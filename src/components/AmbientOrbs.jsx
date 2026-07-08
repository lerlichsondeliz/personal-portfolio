const ORBS = [
  { id: 'about', accentColor: '#f0a868', top: '15%', left: '80%', size: 700, duration: 15, driftX: -50, driftY: 40 },
  { id: 'projects', accentColor: '#57b1d6', top: '55%', left: '5%', size: 750, duration: 17, driftX: 45, driftY: 35 },
  {
    id: 'experience',
    accentColor: '#74bf63',
    top: '80%',
    left: '65%',
    size: 670,
    duration: 14,
    driftX: -40,
    driftY: -50,
  },
  { id: 'contact', accentColor: '#e37fa8', top: '35%', left: '35%', size: 650, duration: 18, driftX: 55, driftY: -30 },
]

const TINT_OPACITY = 0.4
const ACCENT_OPACITY = 0.45

function Orb({ accentColor, top, left, size, duration, driftX, driftY, delay, unlocked }) {
  return (
    <div
      className="orb absolute overflow-hidden rounded-full blur-[70px]"
      style={{
        top,
        left,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        '--orb-duration': `${duration}s`,
        '--drift-x': `${driftX}px`,
        '--drift-y': `${driftY}px`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, var(--orb-tint) 0%, transparent 60%)',
          opacity: TINT_OPACITY,
        }}
      />
      <div
        className="absolute inset-0 transition-opacity ease-out"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 60%)`,
          opacity: unlocked ? ACCENT_OPACITY : 0,
          transitionDuration: '1000ms',
        }}
      />
    </div>
  )
}

function AmbientOrbs({ unlockedIds }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {ORBS.map((orb, index) => (
        <Orb key={orb.id} {...orb} delay={index * -4} unlocked={unlockedIds.includes(orb.id)} />
      ))}
    </div>
  )
}

export default AmbientOrbs
