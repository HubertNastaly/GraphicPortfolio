import React from 'react';

export const Art = (props) => {

  const { id, server, secret, farm } = props.artData

  const artUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.png`

  return <img src={artUrl}></img>
}