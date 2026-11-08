import { useMemo, useState } from 'react'
import Section from '../components/Section.jsx'
import Toolbar from '../components/Toolbar.jsx'
import CrateCard from '../components/CrateCard.jsx'
import { CRATES, DOMAINS } from '../data/crates.js'

const SORTS = [
  { key: 'downloads', label: 'Downloads' },
  { key: 'name', label: 'Name' },
]

export default function CratesSection({ live }) {
  const [query, setQuery] = useState('')
  const [domain, setDomain] = useState('all')
  const [sort, setSort] = useState('downloads')

  const dataOf = c => live?.crates?.[c.name] ?? { ...c.fallback, live: false }

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CRATES
      .filter(c => domain === 'all' || c.domain === domain)
      .filter(c => !q || c.name.toLowerCase().includes(q) || c.focus.toLowerCase().includes(q))
      .sort((a, b) =>
        sort === 'name' ? a.name.localeCompare(b.name) : dataOf(b).downloads - dataOf(a).downloads,
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, domain, sort, live])

  return (
    <Section
      id="crates"
      title="Core crates"
      count={`18 published · sorted by ${sort === 'name' ? 'name' : 'downloads'}`}
      note="Numbers are fetched live from crates.io in your browser, cached for ten minutes, and fall back to the last baked sync when offline."
    >
      <Toolbar query={query} onQuery={setQuery} placeholder="Filter by name or purpose…">
        {DOMAINS.map(d => (
          <button
            key={d}
            type="button"
            className={`chip${domain === d ? ' on' : ''}`}
            onClick={() => setDomain(d)}
          >
            {d === 'all' ? 'All' : d}
          </button>
        ))}
        <span style={{ flex: 1 }} />
        {SORTS.map(s => (
          <button
            key={s.key}
            type="button"
            className={`chip${sort === s.key ? ' on' : ''}`}
            onClick={() => setSort(s.key)}
          >
            {s.label}
          </button>
        ))}
      </Toolbar>
      <div className="grid">
        {visible.map((c, i) => (
          <CrateCard key={c.name} crate={c} data={dataOf(c)} index={i} />
        ))}
      </div>
    </Section>
  )
}
