import React from "react"
import { Gallery } from "./Gallery"
import { AboutMe } from "./AboutMe"
// import { Header } from "./Header"
import header1 from '../../assets/1.png'
import header2 from '../../assets/2.png'
import header3 from '../../assets/3.png'
import header4 from '../../assets/4.png'
import header5 from '../../assets/5.png'

export const App = () => {
  return (
    <div>
      <img src={header1}></img>
      <img src={header2}></img>
      <img src={header3}></img>
      <img src={header4}></img>
      <h1>PORTFOLIO</h1>
      <img src={header5}></img>
      {/* <Header></Header> */}
      <div className="mainWrapper">
        <main>
          <AboutMe></AboutMe>
          <Gallery></Gallery>
        </main>
      </div>
    </div>
  )
}