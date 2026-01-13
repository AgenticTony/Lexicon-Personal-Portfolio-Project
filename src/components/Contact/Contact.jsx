import { siteData } from '../../data/content'
import styles from './Contact.module.css'

function Contact() {
  const handleCtaClick = (cta) => {
    if (cta.type === 'email') {
      window.location.href = `mailto:${cta.action}`
    } else if (cta.type === 'link') {
      window.open(cta.action, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className="gradient-text">{siteData.contact.headline}</span>
          </h2>
          <p className={styles.subheading}>{siteData.contact.subheading}</p>
          <p className={styles.description}>{siteData.contact.description}</p>
        </div>

        <div className={styles.ctaGrid}>
          {siteData.contact.ctaOptions.map((cta) => (
            <div
              key={cta.id}
              className={`${styles.ctaCard} ${cta.primary ? styles.ctaPrimary : ''}`}
              onClick={() => handleCtaClick(cta)}
            >
              <div className={styles.ctaIcon}>{cta.icon}</div>
              <div className={styles.ctaContent}>
                <h3 className={styles.ctaTitle}>{cta.title}</h3>
                <p className={styles.ctaDescription}>{cta.description}</p>
                <div className={styles.ctaAction}>
                  {cta.type === 'email' ? cta.action :
                   cta.action.replace('https://', '').replace('http://', '')}
                </div>
              </div>
              <div className={styles.ctaArrow}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact