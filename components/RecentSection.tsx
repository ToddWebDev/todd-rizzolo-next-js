import React from 'react'
import styles from './Components.module.css'

const Recent = () => (
  <section>
    <h2>My Current Projects</h2>
    <p>My latest design and development work.</p>
    <div className={styles.cards}>
      <div className={styles.card}>
        <i aria-hidden className='fas fa-university'></i>
        <div style={{ display: 'flex', flexFlow: 'column-reverse' }}>
          <h3 style={{ marginTop: '-0.75em' }}>VA.gov</h3>
          <h4
            style={{
              fontSize: '0.75em',
              margin: '0',
              color: `var(--text-color-medium)`,
            }}
          >
            2024
          </h4>
        </div>
        <p>
          The Veterans Pension Benefits application for the U.S. Department of
          Veterans Affairs.
        </p>
        <ul>
          <li>VA Forms Library</li>
          <li>Javascript</li>
          <li>API</li>
        </ul>
        <div>
          <button
            onClick={() =>
              window.open('https://www.va.gov', '_blank', 'noopener')
            }
          >
            Visit VA.gov{' '}
            <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <i aria-hidden className='fas fa-car'></i>
        <div style={{ display: 'flex', flexFlow: 'column-reverse' }}>
          <h3 style={{ marginTop: '-0.75em' }}>Travel Log</h3>
          <h4
            style={{
              fontSize: '0.75em',
              margin: '0',
              color: `var(--text-color-medium)`,
            }}
          >
            2024-2023
          </h4>
        </div>
        <p>An interactive travel log built with the MapBox API.</p>
        <ul>
          <li>Javascript</li>
          <li>API</li>
          <li>UX/UI</li>
        </ul>
        <div>
          <button
            onClick={() =>
              window.open(
                'https://www.toddrizzolo.com/travellog/index.html',
                '_blank',
                'noopener'
              )
            }
          >
            Visit Travel Log{' '}
            <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Recent
