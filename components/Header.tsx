import React from 'react'
import Image from 'next/image'
import styles from './Layout.module.css'
import ContactFooter from './ContactFooter'

const Header = () => {
  const baseURL = 'https://api.github.com'

  const fetchGithubData = async () =>
    await fetch(`${baseURL}/users/toddwebdev`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err))

  React.useEffect(() => {
    fetchGithubData()
  }, [])

  function downloadResume() {
    window.open('ToddRizzoloResumeSoftwareEngineer.pdf')
  }
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.image}>
          <Image
            src='https://avatars.githubusercontent.com/u/7394764?v=4'
            alt='Todd Rizzolo'
            width={350}
            height={350}
          />
        </div>
        <h1>Todd Rizzolo</h1>
        <h2>
          {' '}
          Software Engineer.
          <br />
          User Interface Builder.
        </h2>
        <h3 style={{ fontSize: '1.17em' }}>
          <i aria-hidden className='fas fa-map-pin'></i> Salt Lake City, Utah
        </h3>
        <button onClick={downloadResume} aria-label='Download Resume as PDF'>
          <span
            aria-hidden
            className='fas fa-download'
            style={{ marginRight: '8px' }}
          ></span>
          Download Resume
        </button>
      </div>
      <div>
        <ContactFooter />
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()}</p>
      </div>
    </header>
  )
}

export default Header
