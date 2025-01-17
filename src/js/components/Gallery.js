import React, { useState } from 'react';
import { apiKey, userId, photosetId } from "./config"
import { Art } from "./Art"

export const Gallery = (props) => {

  const [arts, setArts] = useState([])
  const { fullImage, setFullImage } = props

  const createPhotosetUrl = () => {

    const apiUrl = new URL("https://api.flickr.com/services/rest")
    const params = {
      method: "flickr.photosets.getPhotos",
      api_key: apiKey,
      photoset_id: photosetId,
      user_id: userId,
      format: "json",
      nojsoncallback: 1
    }
    apiUrl.search = new URLSearchParams(params).toString()

    return apiUrl
  }

  const createArtUrl = (art) => {
    const { id, server, secret, farm } = art
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.png`
  }

  const fetchPhotos = () => {

    const url = createPhotosetUrl()
    fetch(url)
      .then(response => {
        if (response.ok)
          return response.json()
        throw new Error("Something went wrong")
      })
      .then(data => {
        const artCollection = data.photoset.photo.map(art => {
          return {
            id: art.id,
            server: art.server,
            secret: art.secret,
            farm: art.farm,
            title: art.title
          }
        })
        setArts(artCollection)
      })
      .catch(error => console.log(error))
  }

  !arts.length && fetchPhotos()

  return (
    <section className="gallery">
      {arts.map(art =>
        <Art key={art.id} url={createArtUrl(art)} displayFullImage={(url) => { !fullImage && setFullImage(url) }} title={art.title}></Art>
      )}
    </section>
  )
}