import { useMemo, useState } from 'react'
import Section from '../components/Section.jsx'
import Toolbar from '../components/Toolbar.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { SKILLS } from '../data/skills.js'

export default function SkillsSection() {
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SKILLS
    return SKILLS.filter(
      s =>
        s.name.toLowerCase().includes(q) ||
        s.cn.includes(q) ||
        s.focus.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <Section
      id="skills"
      title="Open-source skills"
      count="17"
      note="Every skill installs the same way — copy the command on any card."
    >
      <Toolbar query={query} onQuery={setQuery} placeholder="Filter by name or purpose…">
        <span style={{ flex: 1 }} />
      </Toolbar>
      <div className="grid">
        {visible.map((s, i) => (
          <SkillCard key={s.repo} skill={s} index={i} />
        ))}
      </div>
    </Section>
  )
}
