import React from 'react';

export const Art = (props) => {
  const { url, displayFullImage, title } = props
  return (
    <div className="art" disabled onClick={() => displayFullImage(url)}>
      <h3>{title}</h3>
      <img src={url}></img>
    </div>
  )
}