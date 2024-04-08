import React from 'react'
import styles from './Components.module.css'

const Portfolio = () => (
  <section>
    <h2>My Portfolio</h2>
    <p>
      I was the lead front-end software developer and the user interface
      designer for these web apps.
    </p>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '1em',
      }}
    >
      <div className={styles.card}>
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
          A &lsquo;from-scratch&rsquo; style guide and component library built
          with white label theming in mind for Lendio SaaS products.
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
      <div className={styles.card}>
        <i aria-hidden className='fas fa-bible'></i>
        <div style={{ display: 'flex', flexFlow: 'column-reverse' }}>
          <h3 style={{ marginTop: '-0.75em' }}>Digital Curriculum</h3>
          <h4
            style={{
              fontSize: '0.75em',
              margin: '0',
              color: `var(--text-color-medium)`,
            }}
          >
            2022-2020
          </h4>
        </div>
        <p>A digital curriculum web app tailored for church leaders.</p>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>UX/UI</li>
        </ul>
        <div>
          <button
            onClick={() =>
              window.open(
                'https://ministrygrid.com/curriculum',
                '_blank',
                'noopener'
              )
            }
          >
            Visit Marketing{' '}
            <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
          <button
            className='secondary'
            onClick={() =>
              window.open(
                'https://ministrygrid.lifeway.com/#/bible-studies',
                '_blank',
                'noopener'
              )
            }
          >
            Visit App <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <i aria-hidden className='icomoon-ministryGrid'></i>
        <div style={{ display: 'flex', flexFlow: 'column-reverse' }}>
          <h3 style={{ marginTop: '-0.75em' }}>Ministry Grid</h3>
          <h4
            style={{
              fontSize: '0.75em',
              margin: '0',
              color: `var(--text-color-medium)`,
            }}
          >
            2019-2017
          </h4>
        </div>
        <p>A training web app tailored for church leaders.</p>
        <ul>
          <li>React</li>
          <li>AngularJS</li>
          <li>UX/UI</li>
        </ul>
        <div>
          <button
            onClick={() =>
              window.open('https://ministrygrid.com/', '_blank', 'noopener')
            }
          >
            Visit Marketing{' '}
            <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
          <button
            className='secondary'
            onClick={() =>
              window.open(
                'https://ministrygrid.lifeway.com/#/catalog',
                '_blank',
                'noopener'
              )
            }
          >
            Visit App <i aria-hidden className='fas fa-external-link-alt'></i>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio
