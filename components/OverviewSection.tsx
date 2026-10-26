import React, { useState } from 'react'
import styles from './Layout.module.css'

const Overview = () => {
  const [readMore, setReadMore] = useState(false)

  const descriptionText =
    'I’m a full stack Software Engineer with a focus on frontend architecture. I take ownership of features across the stack, from crafting accessible, responsive interfaces to designing and integrating backend services. I leverage AI powered development tools to streamline workflows, accelerate problem solving, and improve code quality while maintaining a strong emphasis on engineering fundamentals, scalable patterns, thorough testing, and preserving important business rules and application context. I thrive in agile environments and enjoy solving complex problems with pragmatic, well engineered solutions.'

  const handleClick = (e) => {
    e.preventDefault()
    setReadMore(true)
  }
  return (
    <section>
      <h1 style={{ fontSize: '1.75em' }}>Software Engineer</h1>
      <blockquote>
        {readMore ? descriptionText : descriptionText.slice(0, 331) + '...'}
        <br />
        {!readMore && (
          <a
            href='#'
            onClick={(e) => handleClick(e)}
            aria-label='Read more about Todd Rizzolo'
          >
            Read More
          </a>
        )}
      </blockquote>

      <h2>Professional Skills</h2>
      <h3>Frontend Development</h3>
      <ul>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>Next.js</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Backend Development</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>Laravel</li>
        <li>PHP</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Web Accessibility</h3>
      <ul>
        <li>WCAG</li>
        <li>Section 508</li>
        <li>Accessible Forms</li>
        <li>Assistive Technology</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>AI Assisted Development</h3>
      <ul>
        <li>AI Coding Tools</li>
        <li>AI Powered Workflows</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Cloud &amp; DevOps</h3>
      <ul>
        <li>CI/CD</li>
        <li>Docker</li>
        <li>Netlify</li>
        <li>AWS</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Testing &amp; Security</h3>
      <ul>
        <li>Testing</li>
        <li>Debugging</li>
        <li>Web Security</li>
        <li>OAuth</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Design Systems</h3>
      <ul>
        <li>Component Libraries</li>
        <li>Style Guides</li>
        <li>Responsive Layouts</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
    </section>
  )
}

export default Overview
