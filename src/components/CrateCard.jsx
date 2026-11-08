import Sparkline from './Sparkline.jsx'

const fmt = n => n.toLocaleString('en-US')

// Whole card click opens the repo; the name and the crates.io badge are real
// anchors for keyboard users. Inversion on hover is the D-P1-2 accent.
export default function CrateCard({ crate, data, index }) {
  return (
    <article
      className="card rv"
      style={{ '--d': `${Math.min(index * 24, 240)}ms` }}
      onClick={e => {
        if (!e.target.closest('a')) window.open(crate.repoUrl, '_blank', 'noreferrer')
      }}
    >
      <div className="top">
        <a className="name" href={crate.repoUrl} target="_blank" rel="noreferrer">
          {crate.name}
        </a>
        <span className="cn">{crate.domain}</span>
      </div>
      <p className="desc">{crate.focus}</p>
      <div className="meta">
        <div>
          <div className="dl">{fmt(data.downloads)}</div>
          <div className="dl-lbl">{data.live ? 'downloads · live' : 'downloads · last sync'}</div>
        </div>
        <Sparkline values={data.spark} />
      </div>
      <a className="crate-link" href={crate.crateUrl} target="_blank" rel="noreferrer">
        crates.io ↗
      </a>
    </article>
  )
}
