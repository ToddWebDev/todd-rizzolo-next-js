import React from 'react'

const SocialMediaFooter = () => (
  <div className='social'>
    <ul>
    <li>
        <a
          href='ToddRizzoloResumeSoftwareEngineer.pdf'
          download
          className='icon'
          aria-label='Download Resume'
        >
          <span aria-hidden className='fas fa-download'></span>
        </a>
      </li>
      <li>
        <a
          href='https://www.github.com/toddwebdev'
          target='_blank'
          rel='noreferrer'
          className='icon'
          aria-label='Github'
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
          aria-label='Instagram'
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
          aria-label='Twitter'
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
          aria-label='Codepen'
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
          aria-label='YouTube'
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
          aria-label='Linked In'
        >
          <span aria-hidden className='fab fa-linkedin'></span>
        </a>
      </li>
    </ul>
  </div>
)

export default SocialMediaFooter
