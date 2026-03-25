import React from 'react'
import styles from './Components.module.css'

const Recent = () => (
  <section>
    <h2>Featured Work</h2>
    <p>
      Large-scale government digital services with a focus on accessibility,
      scalable form architecture, and modern frontend systems.
    </p>
    <div className={styles.cards}>
      <div className={styles.card} style={{ gridColumn: 'span 2' }}>
        <i aria-hidden className='fas fa-university'></i>
        <div style={{ display: 'flex', flexFlow: 'column-reverse' }}>
          <h3 style={{ marginTop: '-0.75em' }}>VA Benefits Forms</h3>
          <h4
            style={{
              fontSize: '0.75em',
              margin: '0',
              color: `var(--text-color-medium)`,
            }}
          >
            2026-2024
          </h4>
        </div>
        <p>
          Led digitization of U.S. Department of Veterans Affairs (VA) benefits
          forms on VA.gov, driving accessibility improvements, design system
          adoption, and scalable form architecture across multiple applications.
        </p>
        <ul>
          <li>VA Forms Library</li>
          <li>React</li>
          <li>Accessibility (508/WCAG)</li>
          <li>Design Systems</li>
          <li>API</li>
        </ul>
        <div>
          <button
            aria-label='Visit VA.gov (opens in new tab)'
            onClick={() =>
              window.open('https://www.va.gov', '_blank', 'noopener')
            }
          >
            Visit VA.gov{' '}
            <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Recent
