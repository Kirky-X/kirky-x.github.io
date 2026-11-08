import Section from '../components/Section.jsx'
import RepoCard from '../components/RepoCard.jsx'
import { REPOS } from '../data/repos.js'

export default function OssSection() {
  return (
    <Section id="oss" title="Other open source" count={String(REPOS.length)}>
      <div className="grid">
        {REPOS.map((r, i) => (
          <RepoCard key={r.repo} repo={r} index={i} />
        ))}
      </div>
    </Section>
  )
}
