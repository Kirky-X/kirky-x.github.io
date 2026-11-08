const GITHUB_PATH =
  'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z'

function ThemeIcon({ theme }) {
  return theme === 'dark' ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <circle cx="8" cy="8" r="3.4" />
      <g stroke="currentColor" strokeWidth="1.3">
        <line x1="8" y1="0.8" x2="8" y2="2.6" />
        <line x1="8" y1="13.4" x2="8" y2="15.2" />
        <line x1="0.8" y1="8" x2="2.6" y2="8" />
        <line x1="13.4" y1="8" x2="15.2" y2="8" />
        <line x1="2.9" y1="2.9" x2="4.2" y2="4.2" />
        <line x1="11.8" y1="11.8" x2="13.1" y2="13.1" />
        <line x1="2.9" y1="13.1" x2="4.2" y2="11.8" />
        <line x1="11.8" y1="4.2" x2="13.1" y2="2.9" />
      </g>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M11.9 1.1a7.2 7.2 0 1 0 3 3A5.6 5.6 0 0 1 11.9 1.1Z" />
    </svg>
  )
}

export default function TopNav({ theme, onToggleTheme }) {
  return (
    <nav className="nav" aria-label="Main">
      <div className="container nav-inner">
        <a className="brand" href="/">Kirky</a>
        <div className="nav-links">
          <a href="#crates">Crates</a>
          <a href="#skills">Skills</a>
          <a href="#oss">Open source</a>
          <a
            href="https://github.com/Kirky-X"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            style={{ padding: '0 10px' }}
          >
            <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d={GITHUB_PATH} />
            </svg>
          </a>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </div>
    </nav>
  )
}
