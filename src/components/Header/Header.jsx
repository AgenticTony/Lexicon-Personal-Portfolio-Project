import { useState } from 'react'
import { siteData } from '../../data/content'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const position = element.offsetTop - headerHeight
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          A<span className={styles.logoAccent}>F</span>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button
            className={`${styles.navLink} ${styles.contactLink}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
          <a
            href={siteData.cvUrl}
            className={styles.cvButton}
            download
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header