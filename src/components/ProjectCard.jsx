import { useRef, useState } from 'react'
import Slideshow from './Slideshow'

// Local paths like '/assets/x.png' must be served relative to the deploy base
// (GitHub Pages hosts the site under /personal-portfolio/, not the domain root).
function resolveSrc(src) {
  return src.startsWith('http') ? src : import.meta.env.BASE_URL + src.replace(/^\//, '')
}

function ImageArtifact({ artifact }) {
  const [failed, setFailed] = useState(false)
  const lightboxRef = useRef(null)
  const src = resolveSrc(artifact.src)

  if (failed) {
    return (
      <div className="mt-4 flex h-32 items-center justify-center rounded-lg border border-dashed border-gray-300 text-sm text-gray-400 dark:border-gray-600 dark:text-gray-500">
        Artifact placeholder — add asset to /assets
      </div>
    )
  }

  return (
    <>
      <button
        type="button"
        onClick={() => lightboxRef.current?.showModal()}
        aria-label={`${artifact.alt} — view full size`}
        className="group mt-4 block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
      >
        <img
          src={src}
          alt={artifact.alt}
          onError={() => setFailed(true)}
          className="w-full rounded-lg border border-gray-200 transition-opacity group-hover:opacity-90 dark:border-gray-700"
        />
        <span className="mt-2 block text-center text-xs text-gray-400 dark:text-gray-500">
          Click to view full size
        </span>
      </button>

      <dialog
        ref={lightboxRef}
        onClick={() => lightboxRef.current?.close()}
        className="m-auto bg-transparent backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <img src={src} alt={artifact.alt} className="max-h-[90vh] max-w-[95vw] rounded-lg" />
      </dialog>
    </>
  )
}

function Artifact({ artifact }) {
  if (artifact.type === 'slides') {
    return <Slideshow basePath={resolveSrc(artifact.src)} count={artifact.count} alt={artifact.alt} />
  }

  if (artifact.type === 'image') {
    return <ImageArtifact artifact={artifact} />
  }

  if (artifact.type === 'pdf' || artifact.type === 'link') {
    return (
      <a
        href={resolveSrc(artifact.src)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-cream hover:opacity-90"
      >
        {artifact.label}
      </a>
    )
  }

  return (
    <div className="mt-4 flex h-32 items-center justify-center rounded-lg border border-dashed border-gray-300 text-sm text-gray-400 dark:border-gray-600 dark:text-gray-500">
      Artifact placeholder — add asset to /assets
    </div>
  )
}

function ProjectCard({ project }) {
  const dialogRef = useRef(null)
  const titleId = `${project.slug}-modal-title`

  // Clicks on the dialog element itself land on the backdrop area —
  // clicks inside the content hit the inner div instead.
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close()
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="rounded-xl border border-gray-200 p-5 text-left backdrop-blur-0 transition-[background-color,box-shadow,backdrop-filter] duration-300 hover:bg-cream/80 hover:shadow-sm hover:backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-3 inline-block text-sm font-medium text-gray-400 dark:text-gray-500">
          View details
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        aria-labelledby={titleId}
        className="m-auto max-h-[85vh] w-[min(42rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl bg-cream text-ink shadow-xl backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 id={titleId} className="font-display text-xl font-semibold text-ink">
              {project.title}
            </h3>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close details"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:hover:bg-gray-800"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <p className="mt-3 text-gray-600 dark:text-gray-300">{project.summary}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.highlights.length > 0 && (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}

          <Artifact artifact={project.artifact} />
        </div>
      </dialog>
    </>
  )
}

export default ProjectCard
