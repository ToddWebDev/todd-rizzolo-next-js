import * as React from 'react'
import Header from './Header'
import styles from './Layout.module.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <p>
          This site is built with the Next JS. Next JS generates these files
          during the build process and Netlify provides continuous deployments
          triggered by Git. This site is blazing fast and secure. Yeah,
          it&apos;s pretty awesome.
        </p>
        <div>
          <h3>Lighthouse Score</h3>
          <ul style={{ justifyContent: 'center' }}>
            <li
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '1em',
              }}
            >
              <div style={{ width: 50, height: 50, marginBottom: '0.5em' }}>
                <CircularProgressbarWithChildren value={93}>
                  {<h4>93</h4>}
                </CircularProgressbarWithChildren>
              </div>
              Performance
            </li>
            <li
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '1em',
              }}
            >
              <div style={{ width: 50, height: 50, marginBottom: '0.5em' }}>
                <CircularProgressbarWithChildren value={98}>
                  {<h4>98</h4>}
                </CircularProgressbarWithChildren>
              </div>
              Accessibility
            </li>
            <li
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ width: 50, height: 50, marginBottom: '0.5em' }}>
                <CircularProgressbarWithChildren value={100}>
                  {<h4>100</h4>}
                </CircularProgressbarWithChildren>
              </div>
              Best Practices
            </li>
          </ul>
          <p style={{ fontSize: '.75em' }}>
            Lighthouse is an open-source tool that audits for performance,
            accessibility, progressive web apps, SEO, and more.
          </p>
        </div>
      </footer>
    </>
  )
}
