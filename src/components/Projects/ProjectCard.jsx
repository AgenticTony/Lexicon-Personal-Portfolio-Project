import styles from './ProjectCard.module.css'

function ProjectCard({ title, status, problem, solution, results, tech, demo, github, image }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live Demo': return styles.statusLive
      case 'Open Source': return styles.statusOpen
      case 'Beta Testing': return styles.statusBeta
      default: return styles.statusDefault
    }
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={`${styles.status} ${getStatusColor(status)}`}>
          {status}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.description}>
          <div className={styles.problemSolution}>
            <p className={styles.problem}>
              <strong>The Problem:</strong> {problem}
            </p>
            <p className={styles.solution}>
              <strong>The Solution:</strong> {solution}
            </p>
          </div>

          <div className={styles.results}>
            <p className={styles.resultsTitle}>The Results:</p>
            <ul className={styles.resultsList}>
              {results.map((result, index) => (
                <li key={index} className={styles.resultItem}>{result}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.tech}>
          <span className={styles.techList}>
            {tech.join(' • ')}
          </span>
        </div>

        <div className={styles.links}>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.linkPrimary}`}
          >
            Live Demo →
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Code →
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard