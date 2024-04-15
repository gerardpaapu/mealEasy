import React from 'react'

const ImageFrontPage = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={`rounded shadow-lg ${className}`} />
  )
}

export default ImageFrontPage
