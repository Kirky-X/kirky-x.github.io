export default function RepoCard({ repo, index }) {
  return (
    <article
      className="card rv"
      style={{ '--d': `${Math.min(index * 24, 240)}ms` }}
      onClick={e => {
        if (!e.target.closest('a')) window.open(repo.repoUrl, '_blank', 'noreferrer')
      }}
    >
      <div className="top">
        <a className="name" href={repo.repoUrl} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
        <span className="lang-tag">{repo.lang}</span>
      </div>
      <p className="desc">{repo.desc}</p>
    </article>
  )
}
