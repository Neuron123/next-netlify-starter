import styles from './Footer.module.css'
import Script from 'next/script'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you

        {/* Bootstrap cdn */}

        <Script 
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log('jquery loaded')
                }
          />

        <Script 
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log('popper js loaded')
                }
          />

        <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log('bootstrap js loaded')
                }
          />
        {/* End of Bootstrap cdn */}
      </footer>
    </>
  )
}
