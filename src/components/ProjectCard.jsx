import { useState } from 'react'

// Local paths like '/assets/x.png' must be served relative to the deploy base
// (GitHub Pages hosts the site under /personal-portfolio/, not the domain root).
function resolveSrc(src) {
  return src.startsWith('http') ? src : import.meta.env.BASE_URL + src.replace(/^\//, '')
}

function Artifact({ artifact }) {
  const [failed, setFailed] = useState(false)

  if (artifact.type === 'image' && !failed) {
    return (
      <img
        src={resolveSrc(artifact.src)}
        alt={artifact.alt}
        onError={() => setFailed(true)}
        className="mt-4 w-full rounded-lg border border-gray-200 object-cover dark:border-gray-700"
      />
    )
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
  const [expanded, setExpanded] = useState(false)
  const panelId = `${project.slug}-panel`

  return (
    <div className="rounded-xl border border-gray-200 p-5 backdrop-blur-0 transition-[background-color,box-shadow,backdrop-filter] duration-300 hover:bg-cream/80 hover:shadow-sm hover:backdrop-blur dark:border-gray-700">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
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
          {expanded ? 'Hide details' : 'View details'}
        </span>
      </button>

      {expanded && (
        <div id={panelId} className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
          {project.highlights.length > 0 && (
            <ul className="list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          <Artifact artifact={project.artifact} />
        </div>
      )}
    </div>
  )
}

export default ProjectCard
