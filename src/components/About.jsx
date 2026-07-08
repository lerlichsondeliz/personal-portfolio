import { SKILLS } from '../data/skills'

function About() {
  return (
    <div className="text-left">
      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
        I'm Lukas, a recent Computer Science grad who loves the process of learning
        something deeply and then sharing that joy with others — whether that's
        teaching kids chess, mentoring as a STEM Ambassador, or explaining a tricky
        spreadsheet fix to a coworker. Lately that's meant working extensively with
        AI: I experiment with different models daily and collaborate with Claude to
        build, polish, and speed up real workflows (including this site).
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {SKILLS.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-sm font-semibold tracking-wide text-gray-400 uppercase dark:text-gray-500">
              {category}
            </h3>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{items.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
