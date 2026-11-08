import baseline from './baseline.json'

// Visitor-side live numbers from crates.io (CORS-enabled API), cached in
// localStorage for 10 minutes; every crate falls back to its baked baseline
// independently, so a partial failure degrades instead of breaking the page.
const CACHE_KEY = 'kirky-live-v1'
const TTL = 10 * 60 * 1000
const TIMEOUT = 8000
const NAMES = Object.keys(baseline.crates)

async function fetchJson(url, signal) {
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(String(res.status))
  return res.json()
}

async function fetchCrate(name, signal) {
  const [crate, versions] = await Promise.all([
    fetchJson(`https://crates.io/api/v1/crates/${name}`, signal),
    fetchJson(`https://crates.io/api/v1/crates/${name}/versions`, signal),
  ])
  const spark = [...versions.versions]
    .sort((a, b) => a.created_at.localeCompare(b.created_at))
    .slice(-10)
    .map(v => v.downloads)
  return { downloads: crate.crate.downloads, spark, live: true }
}

function readCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null')
    if (cached && Date.now() - cached.at < TTL) return cached.data
  } catch {
    /* corrupted cache is as good as no cache */
  }
  return null
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }))
  } catch {
    /* private mode / quota — live data still works this session */
  }
}

export async function loadLive() {
  const cached = readCache()
  if (cached) return cached

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT)
  const crates = {}
  let liveCount = 0

  await Promise.allSettled(
    NAMES.map(async name => {
      try {
        crates[name] = await fetchCrate(name, controller.signal)
        liveCount++
      } catch {
        const fb = baseline.crates[name] ?? { downloads: 0, spark: [] }
        crates[name] = { ...fb, live: false }
      }
    }),
  )
  clearTimeout(timer)

  const data = { crates, syncedAt: new Date().toISOString(), allLive: liveCount === NAMES.length }
  if (liveCount > 0) writeCache(data)
  return data
}
