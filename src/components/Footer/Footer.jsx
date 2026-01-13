import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} Anthony Foran. Built with purpose.
        </p>
      </div>
    </footer>
  )
}

export default Footer