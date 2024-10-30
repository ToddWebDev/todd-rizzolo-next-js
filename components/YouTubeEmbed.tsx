import React from 'react'

function YouTubeEmbed({ title = 'Youtube video player', videoId, startTime }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${
    startTime || 0
  }`

  return (
    <iframe
      width='100%'
      height='100%'
      src={embedUrl}
      title={title}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  )
}

export default YouTubeEmbed
