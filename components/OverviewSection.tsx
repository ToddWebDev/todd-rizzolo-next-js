import React, { useState } from 'react'
import styles from './Layout.module.css'

const Overview = () => {
  const [readMore, setReadMore] = useState(false)

  const descriptionText =
    "I'm an experienced software engineer with a strong focus on javascript, user interface design and implementation. I help conceptualize, facilitate, design, prototype and build digital products. My experience includes writing functional, well thought-out and production-ready code, that is unit tested and meets the design requirements of detailed prototypes and mockups. I'm a self starter, a team player and have many years of experience working in a scrum and agile oriented system. I have strong communication skills, enjoy solving complex problems and most of all, I enjoy building great digital products."

  const handleClick = (e) => {
    e.preventDefault()
    setReadMore(true)
  }
  return (
    <section>
      <h2>Software Engineer</h2>
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

      <h3>My Professional Skills</h3>
      <ul>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Vue</li>
        <li>React</li>
        <li>Angular</li>
        <li>Next.js</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>Docker</li>
        <li>Laravel</li>
        <li>PHP</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
        <li>Web Security</li>
        <li>OAuth</li>
        <li>Testing</li>
        <li>CI/CD</li>
        <li>Debugging</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
        <li>Web Accessibility</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>Styled Components</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
        <li>Component Libraries</li>
        <li>Style Guides</li>
        <li>UX/UI</li>
        <li>Responsive Layouts</li>
        <li>Figma</li>
        <li className={styles.listFill}>&nbsp;</li>
        <li className={styles.listBreak}></li>
      </ul>
    </section>
  )
}

export default Overview
