import { useEffect, useState } from 'react'

function useCountUp(target, duration = 400) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    let raf
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min(1, (now - t0) / duration)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

export default function Hero({ total, cratesCount, skillsCount, allLive, syncedAt }) {
  const animated = useCountUp(total)
  return (
    <header className="hero reveal in">
      <div className="container" style={{ position: 'relative' }}>
        <span className="hero-ghost" aria-hidden="true">quietly</span>
        <h1 className="rv">Defensive code belongs in libraries, written once.</h1>
        <p className="sub rv" style={{ '--d': '60ms' }}>
          Domain-specific Rust libraries and open-source skills. The hard parts are
          handled once at the library layer, and everything downstream inherits them.
        </p>
        <div className="stats">
          <div className="stat rv" style={{ '--d': '120ms' }}>
            <div className="num">{animated.toLocaleString('en-US')}</div>
            <div className="lbl">downloads, all crates</div>
          </div>
          <div className="stat rv" style={{ '--d': '180ms' }}>
            <div className="num">{cratesCount}</div>
            <div className="lbl">published crates</div>
          </div>
          <div className="stat rv" style={{ '--d': '240ms' }}>
            <div className="num">{skillsCount}</div>
            <div className="lbl">open-source skills</div>
          </div>
        </div>
        <p className="live-note rv" style={{ '--d': '300ms' }}>
          {allLive === undefined
            ? 'connecting to crates.io…'
            : allLive
              ? 'live numbers, fetched from crates.io in your browser'
              : `crates.io unreachable — last baked sync ${syncedAt ? syncedAt.slice(0, 10) : 'n/a'}`}
        </p>
      </div>
    </header>
  )
}
