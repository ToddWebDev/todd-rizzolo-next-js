import React from 'react'

const SocialMediaFooter = () => (
  <footer>
    <ul>
      <li>
        <a
          href='https://www.github.com/toddwebdev'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <span aria-hidden className='fab fa-github'></span>
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/toddwebdev'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <span aria-hidden className='fab fa-instagram'></span>
        </a>
      </li>
      <li>
        <a
          href='https://www.twitter.com/toddwebdev'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <span aria-hidden className='fab fa-twitter'></span>
        </a>
      </li>
      <li>
        <a
          href='https://www.codepen.io/toddwebdev'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <span aria-hidden className='fab fa-codepen'></span>
        </a>
      </li>
      <li>
        <a
          href='https://www.youtube.com/channel/UCzIrcCwm52dXyIo2jHUp9zQ'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <span aria-hidden className='fab fa-youtube'></span>
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/todd-rizzolo-b017a6b3/'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <span aria-hidden className='fab fa-linkedin'></span>
        </a>
      </li>
    </ul>
    <p>&copy; {new Date().getFullYear()}</p>
  </footer>
)

export default SocialMediaFooter
