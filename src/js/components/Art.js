import React from 'react';

export const Art = (props) => {
  const { url, displayFullImage, title } = props
  return (
    <div className="art" disabled onClick={() => displayFullImage(url)}>
      <h5>{title}</h5>
      <img src={url}></img>
    </div>
  )
}