import React, { useEffect } from "react"
import { Gallery } from "./Gallery"
import { AboutMe } from "./AboutMe"
import { Tools } from "./Tools"
import { Footer } from "./Footer"
import header1 from '../../assets/1.png'
import header2 from '../../assets/2.png'
import header3 from '../../assets/3.png'
import header4 from '../../assets/4.png'
import header5 from '../../assets/5.png'
import footer from '../../assets/background.png'

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

  return (
    <div>
      <h1>PORTFOLIO</h1>
      <img src={header1}></img>
      <img src={header2}></img>
      <img src={header3}></img>
      <img src={header4}></img>
      <img src={header5}></img>
      <div className="mainWrapper">
        <main>
          <AboutMe></AboutMe>
          <Gallery fullImage={fullImage} setFullImage={setFullImage}></Gallery>
          <Tools></Tools>
        </main>
        <Footer></Footer>
        <img src={footer}></img>
      </div>
    </div>
  )
}