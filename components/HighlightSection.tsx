import React from 'react'
import YouTubeEmbed from './YouTubeEmbed'
import styles from './Components.module.css'

const Highlight = () => {
  return (
    <section>
      <h2>Showcase</h2>
      <p id='showcase'>
        Recently, I&apos;ve been focused on web accessibility with the U.S.
        Department of Veterans Affairs.
      </p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.video}>
            <YouTubeEmbed
              title='Web Accessibility with the VA'
              videoId={'hWZKkr_pEQs'}
              startTime={0}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlight
