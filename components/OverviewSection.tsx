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
        <li>Frontend Architecture</li>
        <li>Javascript &amp; Typescript</li>
        <li>Component Based Architecture</li>
        <li>State Management</li>
        <li>Performance Optimization</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Backend Development</h3>
      <ul>
        <li>API Development</li>
        <li>Server Side Development</li>
        <li>Data Management</li>
        <li>Business Logic</li>
        <li>System Integration</li>
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
        <li>AI Powered Workflows</li>
        <li>AI Assisted Coding</li>
        <li>AI Driven Problem Solving</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Cloud &amp; DevOps</h3>
      <ul>
        <li>CI/CD</li>
        <li>Deployment Automation</li>
        <li>Containerization</li>
        <li>Cloud Services</li>
        <li>Environment Configuration</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Testing &amp; Security</h3>
      <ul>
        <li>Automated Testing</li>
        <li>Authentication &amp; Authorization</li>
        <li>Debugging</li>
        <li>Web Security</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
      <h3>Design Systems</h3>
      <ul>
        <li>Component Libraries</li>
        <li>Reusable Design Patterns</li>
        <li>Style Guides</li>
        <li>User Experience (UX)</li>
        <li>Responsive Layouts (UI)</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
    </section>
  )
}

export default Overview
