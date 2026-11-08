#!/usr/bin/env node
// Re-bakes the offline baseline (downloads, sparklines, skill release versions) used when
// the visitor-side crates.io fetch is unreachable. Run: npm run refresh:baseline
import { execSync } from 'node:child_process'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const UA = 'kirky-pages-baseline (github.com/Kirky-X)'
const CRATES = [
  'oxcache', 'trait-kit', 'confers', 'inklog', 'limiteron', 'dbnexus', 'zenith', 'sdforge',
  'garrison', 'vecboost', 'codenexus', 'crawlrs', 'calnexus', 'ciphern', 'nebulaid', 'xlink',
  'fluxweir', 'alchemize',
]
const SKILL_REPOS = [
  'maliang', 'tiangang', 'diting', 'kueiku', 'cangjie', 'dayv', 'liuxiang', 'lizhu',
  'ouyezi', 'pangu', 'specmark', 'wudaozi', 'xizhi', 'element-dev', 'flutter-dev', 'hap-dev', 'pua',
]

const here = dirname(fileURLToPath(import.meta.url))
const outPath = join(here, '..', 'src', 'data', 'baseline.json')

async function getJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`${url} -> ${res.status}`)
  return res.json()
}

const crates = {}
let failed = 0
for (const name of CRATES) {
  try {
    const crate = (await getJson(`https://crates.io/api/v1/crates/${name}`)).crate
    const versions = (await getJson(`https://crates.io/api/v1/crates/${name}/versions`)).versions
    const spark = [...versions]
      .sort((a, b) => a.created_at.localeCompare(b.created_at))
      .slice(-10)
      .map(v => v.downloads)
    crates[name] = { downloads: crate.downloads, spark }
    console.log(`crate ${name}: ${crate.downloads}`)
  } catch (e) {
    failed++
    console.error(`crate ${name} FAILED: ${e.message}`)
  }
}

const skills = {}
for (const repo of SKILL_REPOS) {
  try {
    const tag = execSync(`gh api repos/Kirky-X/${repo}/releases/latest --jq .tag_name`, {
      encoding: 'utf8', timeout: 15000,
    }).trim()
    skills[repo] = { version: tag.replace(/^v/, '') }
    console.log(`skill ${repo}: ${tag}`)
  } catch (e) {
    console.error(`skill ${repo} FAILED: ${e.message}`)
  }
}

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, JSON.stringify({ syncedAt: new Date().toISOString(), crates, skills }, null, 2))
console.log(`\nwrote ${outPath} (crate failures: ${failed})`)
if (failed > 0) process.exitCode = 1
