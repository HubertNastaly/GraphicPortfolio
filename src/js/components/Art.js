import React from 'react';

export const Art = (props) => {
  const { url, displayFullImage } = props
  return (
    <div className="art" disabled onClick={() => displayFullImage(url)}>
      <img src={url}></img>
    </div>
  )
}