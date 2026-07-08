import { PROJECTS } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className="grid gap-4 text-left sm:grid-cols-2">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

export default Projects
