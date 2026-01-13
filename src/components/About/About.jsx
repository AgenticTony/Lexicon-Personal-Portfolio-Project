import { siteData } from "../../data/content";
import styles from "./About.module.css";
import aboutImage from "/about_section.png";
import heroImage from "/hero_section_head_shot.png";

function About() {
  // Function to parse markdown-style bold text
  const parseContent = (content) => {
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className={styles.highlight}>
            {boldText}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{siteData.about.headline}</h2>
            <p className={styles.subheading}>{siteData.about.subheading}</p>

            <div className={styles.journey}>
              {siteData.about.sections.map((section, index) => (
                <div key={index} className={styles.journeyFlow}>
                  <div className={styles.journeySection}>
                    <h3 className={styles.sectionTitle}>{section.title}</h3>
                    <p className={styles.sectionContent}>
                      {parseContent(section.content)}
                    </p>
                  </div>

                  <div className={styles.standoutQuote}>
                    <span className={styles.quoteText}>
                      "{section.highlight}"
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sideContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <img
                  src={heroImage}
                  alt="Anthony Foran - AI Developer"
                  className={styles.image}
                />
                <div className={styles.imageAccent}></div>
              </div>
            </div>

            <div className={styles.statsIntegrated}>
              <h4 className={styles.statsTitle}>The Numbers</h4>
              <div className={styles.statsGrid}>
                {siteData.about.stats.map((stat, index) => (
                  <div key={index} className={styles.statBadge}>
                    <div className={styles.statCheck}>✓</div>
                    <div className={styles.statContent}>
                      <div className={styles.statNumber}>{stat.number}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                      <div className={styles.statDescription}>
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
