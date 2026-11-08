import { useEffect, useState } from 'react'
import TopNav from './components/TopNav.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import CratesSection from './sections/CratesSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import OssSection from './sections/OssSection.jsx'
import { CRATES, TOTAL_BASELINE } from './data/crates.js'
import { SKILLS } from './data/skills.js'
import { loadLive } from './data/live.js'

export default function App() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'light')
  const [live, setLive] = useState(null)

  useEffect(() => {
    loadLive()
      .then(setLive)
      .catch(() => setLive(null))
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('kirky-theme', next)
    } catch {
      /* private mode — theme still flips for this session */
    }
    setTheme(next)
  }

  const total = live
    ? Object.values(live.crates).reduce((sum, c) => sum + c.downloads, 0)
    : TOTAL_BASELINE

  return (
    <>
      <a className="skip" href="#crates">Skip to content</a>
      <TopNav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero
          total={total}
          cratesCount={CRATES.length}
          skillsCount={SKILLS.length}
          allLive={live?.allLive}
          syncedAt={live?.syncedAt}
        />
        <CratesSection live={live} />
        <SkillsSection />
        <OssSection />
      </main>
      <Footer allLive={live?.allLive} syncedAt={live?.syncedAt} />
    </>
  )
}
