import React, { useState } from 'react';
import { apiKey, userId, photosetId } from "./config"
import { Art } from "./Art"

export const Gallery = () => {

  const [arts, setArts] = useState([])

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

  const fetchPhotos = () => {

    const url = createPhotosetUrl()
    fetch(url)
      .then(response => {
        if (response.ok)
          return response.json()
        throw new Error("Something went wrong")
      })
      .then(data => {
        console.log(data)
        const artCollection = data.photoset.photo.map(art => {
          return {
            id: art.id,
            server: art.server,
            secret: art.secret,
            farm: art.farm
          }
        })
        setArts(artCollection)
      })
      .catch(error => console.log(error))
  }

  !arts.length && fetchPhotos()

  return <main>
    {arts.map(art =>
      <Art key={art.id} artData={art}></Art>
    )}
  </main>
}