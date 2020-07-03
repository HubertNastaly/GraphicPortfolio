import React from "react"

export const FullImage = (props) => {

  const { url, hideFullImage } = props

  const handleClick = (e) => {
    e.stopPropagation()
    hideFullImage()
  }

  return (
    <img src={url} className="fullImage" onClick={handleClick}></img>
  )

}