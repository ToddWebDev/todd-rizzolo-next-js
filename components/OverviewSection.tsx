import React, { useState } from 'react'
import styles from './Layout.module.css'

function TextWithReadMore({ text }) {
  const paragraphs = text.split(/\n\s*\n/) // Split text into paragraphs based on double line breaks
  const [showFullText, setShowFullText] = useState(false)

  // Render each paragraph as a separate <p> element
  const displayText = paragraphs.map((paragraph, index) => (
    <p className='lead' key={index}>
      {paragraph}
    </p>
  ))

  return (
    <div>
      {displayText.slice(0, showFullText ? undefined : 1)}{' '}
      {/* Show only the first paragraph */}
      {!showFullText && (
        <a href='#' onClick={(e) => setShowFullText(true)}>
          Read More
        </a>
      )}
    </div>
  )
}

const Overview = () => {
  const descriptionText = `As a skilled and versatile full stack software developer with a strong background in UX, I am confident that I would be an excellent fit for your remote or hybrid team. With my expertise in creating seamless user experiences and my proficiency in modern front-end technologies, I am well-equipped to contribute to your company's success.
  
    With over 7 years of experience in software development, I have honed my skills in building robust and scalable front-end applications. My proficiency in HTML, CSS, and JavaScript, along with my familiarity with popular frameworks like React and Vue, enables me to develop intuitive and visually appealing user interfaces.
    
    Additionally, my moderate experience building RESTful API’s and proficiency in databases and data storage make me a well rounded full stack developer. I am also familiar with web security best practices and continuous integration and continuous deployment (CI/CD) practices.
    
    What sets me apart is my deep understanding of UX principles and my ability to empathize with users to create meaningful interactions. I have a track record of collaborating closely with designers and stakeholders to translate wireframes and prototypes into polished user interfaces that prioritize usability and accessibility.
    
    I thrive in remote or hybrid work environments, leveraging effective communication and collaboration tools to ensure seamless teamwork and project coordination. I am highly self-motivated, disciplined, and capable of managing my time efficiently to deliver high-quality work within deadlines.
    
    Furthermore, my adaptability and willingness to learn make me well-suited for a dynamic industry like software development. I stay updated with the latest trends and emerging technologies in the front-end space, allowing me to bring innovative solutions to the table.`

  return (
    <section>
      <h2>Software Developer</h2>
      <TextWithReadMore text={descriptionText} />

      <h3>Toolbox</h3>
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
