import { siteData } from '../../data/content'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            A selection of projects that showcase my AI development skills
          </p>
        </div>

        <div className={styles.grid}>
          {siteData.projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              status={project.status}
              problem={project.problem}
              solution={project.solution}
              results={project.results}
              tech={project.tech}
              demo={project.demo}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects