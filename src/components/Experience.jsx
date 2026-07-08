import { EDUCATION, EXPERIENCE } from '../data/experience'

function Experience() {
  return (
    <div className="text-left">
      <div className="space-y-8">
        {EXPERIENCE.map((job) => (
          <div key={`${job.role}-${job.org}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold text-ink">
                {job.role} — {job.org}
              </h3>
              <span className="text-sm text-gray-400 dark:text-gray-500">{job.dates}</span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mt-12 text-sm font-semibold tracking-wide text-gray-400 dark:text-gray-500 uppercase">
        Education
      </h3>
      <div className="mt-4 space-y-5">
        {EDUCATION.map((edu) => (
          <div key={edu.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="font-medium text-ink">{edu.school}</span>
              <span className="text-sm text-gray-400 dark:text-gray-500">{edu.dates}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {edu.degree} · {edu.location}
            </p>
            <p className="mt-1 text-gray-500 dark:text-gray-400">{edu.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
