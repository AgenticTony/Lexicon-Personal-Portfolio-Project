import { siteData } from '../../data/content'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Skills</h2>
          <p className={styles.subtitle}>
            AI-first expertise with proven production experience
          </p>
        </div>

        <div className={styles.grid}>
          {siteData.skills.map((category, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <span className={styles.categoryLevel}>{category.level}</span>
              </div>
              <div className={styles.skillsList}>
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <h4 className={styles.skillName}>{skill.name}</h4>
                    <p className={styles.skillDescription}>{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills