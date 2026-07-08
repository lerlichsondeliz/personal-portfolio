import { useEffect, useRef } from 'react'

function Section({ id, title, unlocked, wide = false, children }) {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    if (!unlocked) return

    const section = sectionRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scrollAndFocus = () => {
      section?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      headingRef.current?.focus({ preventScroll: true })
    }

    if (reduceMotion || !section) {
      scrollAndFocus()
      return
    }

    const handleTransitionEnd = (event) => {
      if (event.propertyName === 'grid-template-rows') scrollAndFocus()
    }

    section.addEventListener('transitionend', handleTransitionEnd)
    return () => section.removeEventListener('transitionend', handleTransitionEnd)
  }, [unlocked])

  return (
    <section
      id={id}
      ref={sectionRef}
      inert={!unlocked}
      className={`grid scroll-mt-[calc(var(--nav-h)_+_1rem)] overflow-hidden transition-[grid-template-rows] duration-500 ease-out motion-reduce:duration-0 ${
        unlocked ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          className={`mx-auto ${wide ? 'max-w-4xl' : 'max-w-3xl'} px-6 py-16 transition-opacity duration-500 ease-out motion-reduce:duration-0 ${
            unlocked ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="font-display mb-6 text-2xl font-semibold text-ink focus:outline-none"
          >
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
