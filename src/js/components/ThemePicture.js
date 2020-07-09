import React from 'react';

export const ThemePicture = (props) => {
  const { png, webp } = props
  return (
    <picture>
      <source type="image/png" srcSet={png} />
      <source type="image/webp" srcSet={webp} />
      <img src={webp} />
    </picture>
  )
}