import React, { useEffect, useState, useRef } from "react"
import { Gallery } from "./Gallery"
import { AboutMe } from "./AboutMe"
import { Tools } from "./Tools"
import { Footer } from "./Footer"
import { FullImage } from "./FullImage"

import header1BigWebp from '../../assets/webp/1.webp'
import header2BigWebp from '../../assets/webp/2.webp'
import header3BigWebp from '../../assets/webp/3.webp'
import header4BigWebp from '../../assets/webp/4.webp'
import header5BigWebp from '../../assets/webp/5.webp'
import footerBigWebp from '../../assets/webp/background.webp'

export const App = () => {

  useEffect(() => setupAnimationsOnScroll(), [])

  const [fullImage, setFullImage] = useState(null)

  const setupAnimationsOnScroll = () => {
    const scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    const arts = document.getElementsByClassName("art")
    const checkArtsToShow = () => {
      Array.from(arts).forEach(art => {
        if (isArtInViewport(art)) {
          art.classList.add("appear-on-scroll")
        }
        else {
          art.classList.remove("appear-on-scroll")
        }
      })
      scroll(checkArtsToShow)
    }
    const isArtInViewport = (art) => {
      const rect = art.getBoundingClientRect()
      return rect.bottom >= 0 && rect.bottom <= document.documentElement.clientHeight
    }
    scroll(checkArtsToShow)
  }

  //fullImage out of container due to problems with position: fixed in div with perspective property set
  return (
    <div>
      {fullImage && <FullImage url={fullImage} hideFullImage={() => setFullImage(null)}></FullImage>}
      <div className="content">
        <div className="headings">
          <h1>PORTFOLIO</h1>
          <h3>HUBERT NASTAŁY</h3>
        </div>
        <img src={header1BigWebp} ></img>
        <img src={header2BigWebp} ></img>
        <img src={header3BigWebp} ></img>
        <img src={header4BigWebp} ></img>
        <img src={header5BigWebp} ></img>
        <div className="mainWrapper">
          <main>
            <AboutMe></AboutMe>
            <Gallery fullImage={fullImage} setFullImage={setFullImage}></Gallery>
            <Tools></Tools>
          </main>
          <Footer></Footer>
          <img src={footerBigWebp}></img>
        </div>
      </div>
    </div>
  )
}