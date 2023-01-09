import React from 'react'
import styles from './Components.module.css'

const Projects = () => (
  <section>
    <h2>My Code</h2>
    <p>
      While much of the code I write for my employers is private, I do share
      examples of my code on these platforms.
    </p>
    <div className={styles.smallCards}>
      <div className={styles.card}>
        <i aria-hidden className='fas fa-laptop-code small'></i>
        <h3>Code Sandbox</h3>
        <ul>
          <li>React</li>
          <li>User Interface Design</li>
        </ul>
        <div>
          <button
            onClick={() =>
              window.open(
                'https://codesandbox.io/u/ToddWebDev',
                '_blank',
                'noopener'
              )
            }
          >
            Visit <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <i aria-hidden className='fab fa-codepen small'></i>
        <h3>CodePen</h3>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <div>
          <button
            onClick={() =>
              window.open(
                'https://www.codepen.io/toddwebdev',
                '_blank',
                'noopener'
              )
            }
          >
            Visit <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <i aria-hidden className='fab fa-github small'></i>
        <h3>GitHub</h3>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Webpack</li>
        </ul>
        <div>
          <button
            onClick={() =>
              window.open(
                'https://www.github.com/toddwebdev',
                '_blank',
                'noopener'
              )
            }
          >
            Visit <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Projects
