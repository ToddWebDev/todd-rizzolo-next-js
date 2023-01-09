import React, { useState } from 'react'
import Image from 'next/image'
import profilePic from '../images/JoshuaTreeNP22.jpeg'
import styles from '../Layout.module.css'
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

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.image}>
          {profilePic && (
            <Image
              src={profilePic}
              alt='Profile Image'
              width='350'
              height='350'
            />
          )}
        </div>
        <h1>Todd Rizzolo</h1>
        <h2>
          {' '}
          Half Stack Developer.
          <br />
          User Interface Builder.
        </h2>
        <h3 style={{ fontSize: '1.17em' }}>
          <i aria-hidden className='fas fa-map-pin'></i> Salt Lake City, Utah
        </h3>
      </div>
      <ContactFooter />
    </header>
  )
}

export default Header
