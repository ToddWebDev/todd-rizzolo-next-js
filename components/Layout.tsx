import * as React from 'react'
import Header from './Header'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
      <div className={styles.footer}>
        <p>
          This site is built with the Next JS. Next JS generates these files
          during the build process and Netlify provides continuous deployments
          triggered by Git. This site is blazing fast and secure. Yeah,
          it&apos;s pretty awesome.
        </p>
      </div>
    </>
  )
}
