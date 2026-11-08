import { useState } from 'react'

export default function SkillCard({ skill, index }) {
  const [copied, setCopied] = useState(false)
  const install = `npx skills add Kirky-X/${skill.repo} --agent claude-code -y`

  const copy = async e => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(install)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      /* clipboard unavailable (http/permissions) — the code line is selectable anyway */
    }
  }

  return (
    <article
      className="card rv"
      style={{ '--d': `${Math.min(index * 24, 240)}ms` }}
      onClick={e => {
        if (!e.target.closest('a, button')) window.open(skill.repoUrl, '_blank', 'noreferrer')
      }}
    >
      <span className="glyph" aria-hidden="true">{skill.glyph}</span>
      <div className="top">
        <a className="name" href={skill.repoUrl} target="_blank" rel="noreferrer">
          {skill.name}
        </a>
        {skill.cn && <span className="cn">{skill.cn}</span>}
      </div>
      <p className="desc">{skill.focus}</p>
      <div className="install">
        <code>{install}</code>
        <button type="button" className="copy" onClick={copy}>
          {copied ? 'copied' : 'copy'}
        </button>
      </div>
      <div className="meta">
        <span className="lang-tag">MIT{skill.version ? ` · v${skill.version}` : ''}</span>
      </div>
    </article>
  )
}
