import { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'
import OverviewSection from '../components/OverviewSection'
import HighlightSection from '../components/HighlightSection'
import RecentSection from '../components/RecentSection'
import PortfolioSection from '../components/PortfolioSection'
import ProjectsSection from '../components/ProjectsSection'
import PrototypesSection from '../components/PrototypesSection'
import ContactSection from '../components/ContactSection'
import useWindowSize from '../hooks/useWindowSize'

export default function Home() {
  const [theme, toggleTheme] = useState('light')
  const size = useWindowSize()

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

  useEffect(() => {
    document.body.style.setProperty('--vh', `${size.height}px`)
  }, [size])

  return (
    <>
      <Head>
        <title>Todd Rizzolo • Web Developer</title>
        <link rel='canonical' href='https://www.toddrizzolo.com' />
        <meta name='theme-color' content='#164c69' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://www.toddrizzolo.com/lendiostyleguide.png'></meta>
        <meta name='description' content='Todd Rizzolo Software Developer Portfolio Website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Todd Rizzolo • Software Developer' />
        <meta name='twitter:description' content='Todd Rizzolo Software Developer Portfolio Website' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
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
        <RecentSection />
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
      <Script src='https://kit.fontawesome.com/02130b3d51.js' crossOrigin='anonymous' />
    </>
  )
}
