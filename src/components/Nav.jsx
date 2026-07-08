const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function Nav({ isUnlocked, onUnlock }) {
  const handleClick = (id) => {
    if (isUnlocked(id)) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      return
    }
    onUnlock(id)
  }

  return (
    <nav className="sticky top-0 z-10 mx-auto mt-10 mb-[max(0px,calc(50vh_-_var(--hero-half)_-_2.5rem_-_var(--nav-h)))] flex w-fit max-w-[calc(100vw-2rem)] flex-wrap justify-center gap-1.5 rounded-full bg-cream/80 px-3 py-2 shadow-sm backdrop-blur sm:gap-4 sm:px-4 sm:py-3">
      {NAV_ITEMS.map(({ id, label }) => {
        const unlocked = isUnlocked(id)
        return (
          <button
            key={id}
            type="button"
            onClick={() => handleClick(id)}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:px-4 sm:py-1.5 sm:text-base ${
              unlocked
                ? 'border border-ink bg-ink text-cream hover:opacity-90'
                : 'border border-gray-300 bg-transparent text-gray-500 hover:border-gray-400 hover:text-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {label}
          </button>
        )
      })}
    </nav>
  )
}

export default Nav
