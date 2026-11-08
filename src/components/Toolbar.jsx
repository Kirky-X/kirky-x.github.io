export default function Toolbar({ query, onQuery, placeholder, children }) {
  return (
    <div className="toolbar rv" style={{ '--d': '90ms' }}>
      <input
        type="search"
        className="search"
        value={query}
        onChange={e => onQuery(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      {children}
    </div>
  )
}
