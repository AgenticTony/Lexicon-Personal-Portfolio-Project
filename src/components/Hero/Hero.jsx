import { siteData } from "../../data/content";
import styles from "./Hero.module.css";
import heroImage from "/hero_section_head_shot.png";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const position = element.offsetTop - headerHeight;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        <div className={styles.heroLayout}>
          <div className={styles.content}>
            <p className={styles.greeting}>Hi, I'm Anthony Foran</p>

            <h1 className={styles.headline}>
              <span className="gradient-text">I Build AI Solutions</span>
              <br />
              That Actually Work
            </h1>

            <p className={styles.subheadline}>
              Most developers build features. I build solutions —<br />
              because I've spent 20 years on the other side of the problem.
            </p>

            <div className={styles.socialProof}>
              <span className={`${styles.statItem} ${styles.statItem1}`}>✓ 3 Production Apps</span>
              <span className={styles.statDivider}>•</span>
              <span className={`${styles.statItem} ${styles.statItem2}`}>✓ 30+ Certifications</span>
              <span className={styles.statDivider}>•</span>
              <span className={`${styles.statItem} ${styles.statItem3}`}>✓ Studying with Lexicon</span>
            </div>

            <div className={styles.cta}>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${styles.ctaPrimary} btn btn-primary`}>
                <span className={styles.ctaIcon}>🚀</span>
                View What I've Built
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${styles.ctaSecondary} btn btn-secondary`}>
                <span className={styles.ctaIcon}>💬</span>
                Let's Discuss Your AI Needs
              </button>
            </div>

            <div className={styles.social}>
              <a
                href={siteData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub">
                GitHub
              </a>
              <span className={styles.socialDivider}>•</span>
              <a
                href={siteData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <img
                src={heroImage}
                alt="Anthony Foran - AI Developer"
                className={styles.profileImage}
              />
              <div className={styles.imageAccent}></div>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
