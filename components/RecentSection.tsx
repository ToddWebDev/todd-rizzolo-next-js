import React from 'react'
import styles from './Components.module.css'

const Recent = () => (
  <section>
    <h2>My Current Projects</h2>
    <p>My latest design and development work for Lendio SaaS products.</p>
    <div className={styles.cards}>
      <div className={styles.card} style={{ maxWidth: '390px' }}>
        <i aria-hidden className='fas fa-compass'></i>
        <div style={{ display: 'flex', flexFlow: 'column-reverse' }}>
          <h3 style={{ marginTop: '-0.75em' }}>White Label Style Guide</h3>
          <h4
            style={{
              fontSize: '0.75em',
              margin: '0',
              color: `var(--text-color-medium)`,
            }}
          >
            2023
          </h4>
        </div>
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
            onClick={() =>
              window.open(
                'https://lendio-styleguide-tailwind.netlify.app',
                '_blank',
                'noopener'
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

export default Recent
