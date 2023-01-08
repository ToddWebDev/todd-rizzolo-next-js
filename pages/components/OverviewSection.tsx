import React, { useState } from 'react'

const Overview = () => {
  const [readMore, setReadMore] = useState(false)

  const descriptionText =
    "I'm a front-end software developer with a strong focus on javascript, user interface design and implementation. I help conceptualize, facilitate, design, prototype and build digital products. My experience includes writing functional, well thought-out and production-ready code, that is unit tested and meets the design requirements of detailed prototypes and mockups. I'm a self starter, a team player and have many years of experience working in a scrum and agile oriented system. I have strong communication skills, enjoy solving complex problems and most of all, I enjoy building great digital products."

  const handleClick = (e) => {
    e.preventDefault()
    setReadMore(true)
  }
  return (
    <section>
      <h2>Front-End Web Developer</h2>
      <blockquote>
        {readMore ? descriptionText : descriptionText.slice(0, 331) + '...'}
        <br />
        {!readMore && (
          <a href='#' onClick={(e) => handleClick(e)}>
            Read More
          </a>
        )}
      </blockquote>

      <h3>Toolbox</h3>
      <ul>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Vue</li>
        <li>React</li>
        <li>AngularJS</li>
        <li></li>
      </ul>
      <ul>
        <li>NextJS</li>
        <li>Gatsby</li>
        <li>GraphQL</li>
        <li>Accessibility</li>
        <li></li>
      </ul>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>Styled Components</li>
        <li></li>
      </ul>
      <ul>
        <li>Design Systems</li>
        <li>User Interface Design</li>
        <li>UX</li>
        <li>Wireframes</li>
        <li>Prototyping</li>
        <li></li>
      </ul>
    </section>
  )
}

export default Overview
