import React from 'react'
import styles from './Components.module.css'

const Highlight = () => (
  <section>
    <h2>My Showcase</h2>
    <p>
      A video highlight of my design and development work for Digital Curriculum
      in 2022.
    </p>
    <div className={styles.feature}>
      <div className={styles.video}>
        <iframe
          src='https://player.vimeo.com/video/543751841?title=0&autoplay=0&muted=1'
          title='Digital Curriculum on Ministry Grid'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  </section>
)

export default Highlight
