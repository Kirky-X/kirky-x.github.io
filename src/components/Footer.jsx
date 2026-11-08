export default function Footer({ allLive, syncedAt }) {
  const status =
    allLive === undefined
      ? 'connecting to crates.io…'
      : allLive
        ? 'live numbers from crates.io, cached in your browser for ten minutes'
        : `crates.io unreachable — showing the baked sync of ${(syncedAt || '').slice(0, 10)}`
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>Built quietly. {status}.</span>
        <a href="https://github.com/Kirky-X" target="_blank" rel="noreferrer">
          github.com/Kirky-X
        </a>
      </div>
    </footer>
  )
}
