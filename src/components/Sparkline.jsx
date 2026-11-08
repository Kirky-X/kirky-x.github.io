// Last-N per-version downloads. Bars grow once the parent section reveals;
// the color step encodes relative size (contribution-ramp semantics).
export default function Sparkline({ values }) {
  if (!values?.length) return <div className="spark" aria-hidden="true" />
  const max = Math.max(...values, 1)
  return (
    <div className="spark" aria-hidden="true">
      {values.map((v, i) => {
        const ratio = v / max
        const height = Math.max(4, Math.round(ratio * 56))
        const step = Math.min(3, Math.floor(ratio * 4))
        return (
          <span
            key={i}
            className="bar"
            style={{ height, background: `var(--g${step + 1})`, transitionDelay: `${i * 24}ms` }}
          />
        )
      })}
    </div>
  )
}
