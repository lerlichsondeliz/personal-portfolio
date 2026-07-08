import { useState } from 'react'

function Slideshow({ basePath, count, alt }) {
  const [current, setCurrent] = useState(1)

  const goTo = (n) => setCurrent(Math.min(count, Math.max(1, n)))

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') goTo(current - 1)
    if (event.key === 'ArrowRight') goTo(current + 1)
  }

  return (
    <div className="mt-4" onKeyDown={handleKeyDown}>
      <img
        src={`${basePath}/slide-${current}.jpg`}
        alt={`${alt} — slide ${current} of ${count}`}
        className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
      />
      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 1}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <span aria-live="polite" className="text-sm tabular-nums text-gray-500 dark:text-gray-400">
          {current} / {count}
        </span>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={current === count}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Slideshow
