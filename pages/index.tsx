import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from './components/Layout'
import OverviewSection from './components/OverviewSection'
import HighlightSection from './components/HighlightSection'
import PortfolioSection from './components/PortfolioSection'
import ProjectsSection from './components/ProjectsSection'
import PrototypesSection from './components/PrototypesSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  const [theme, toggleTheme] = useState('light')

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    theme && toggleTheme(theme)
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Head>
        <title>Todd Rizzolo - Half Stack Dev</title>
        <link rel='canonical' href='https://www.toddrizzolo.com' />
        <meta name='theme-color' content='#164c69' />
        <meta property='og:type' content='website' />
        <meta
          name='description'
          content='Todd Rizzolo Front-End Developer Portfolio Website'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Todd Rizzolo - Half Stack Dev' />
        <meta
          name='twitter:description'
          content='Todd Rizzolo Front-End Developer Portfolio Website'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          href='https://use.fontawesome.com/releases/v5.7.0/css/all.css'
          rel='stylesheet'
        />
      </Head>

      <Layout>
        <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
          {theme === 'light' ? (
            <button onClick={() => toggleTheme('dark')}>
              <i aria-hidden className='fas fa-cloud-sun'></i> Light Theme
            </button>
          ) : (
            <button onClick={() => toggleTheme('light')}>
              <i aria-hidden className='fas fa-moon'></i> Dark Theme
            </button>
          )}
        </div>
        <OverviewSection />
        <HighlightSection />
        <PortfolioSection />
        <ProjectsSection />
        <PrototypesSection />
        <ContactSection />
        <section>
          <a href='#' onClick={(e) => scrollToTop()}>
            <i aria-hidden className='fas fa-angle-double-up'></i> Back to top
          </a>
        </section>
      </Layout>
    </>
  )
}
