import React from 'react'
import styles from '../Components.module.css'

const Highlight = () => (
  <section>
    <h2>My Recent</h2>
    <p>My latest design and development work for Lendio SaaS products.</p>
    {/* <div className={feature}>
      <div className={video}>
        <iframe
          src="https://player.vimeo.com/video/543751841?title=0&autoplay=0&muted=1"
          title="Digital Curriculum on Ministry Grid"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div> */}
    <div className={styles.cards}>
      <div className={styles.card} style={{ maxWidth: '390px' }}>
        <i aria-hidden className='fas fa-compass'></i>
        <h3>White Label Style Guide</h3>
        <p>
          A &lsquo;from-scratch&rsquo; style guide built with white label
          theming in mind.
        </p>
        <ul>
          <li>Vue</li>
          <li>Tailwind CSS</li>
          <li>UX/UI</li>
        </ul>
        <div>
          <button
            rel='noreferrer'
            onClick={() =>
              window.open(
                'https://lendio-styleguide-tailwind.netlify.app',
                '_blank'
              )
            }
          >
            Visit Guide <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Highlight
