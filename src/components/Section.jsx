import { useEffect, useRef } from 'react'

// Scroll-reveal wrapper: adds .in once when the section enters the viewport;
// children marked .rv then play the rise animation with their own --d delays.
export default function Section({ id, title, count, note, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id={id} className="section reveal" ref={ref}>
      <div className="container">
        <div className="section-head rv">
          <h2>{title}</h2>
          {count != null && <span className="count">{count}</span>}
        </div>
        {note && <p className="section-note rv" style={{ '--d': '60ms' }}>{note}</p>}
        {children}
      </div>
    </section>
  )
}
