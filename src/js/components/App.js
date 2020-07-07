import React from "react"
import { Gallery } from "./Gallery"
import { AboutMe } from "./AboutMe"
import { Tools } from "./Tools"
import header1 from '../../assets/1.png'
import header2 from '../../assets/2.png'
import header3 from '../../assets/3.png'
import header4 from '../../assets/4.png'
import header5 from '../../assets/5.png'
import footer from '../../assets/background.png'

export const App = () => {
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
          <Gallery></Gallery>
          <Tools></Tools>
        </main>
        <img src={footer}></img>
      </div>
    </div>
  )
}