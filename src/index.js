import React from 'react'
import { render } from 'react-dom'
import { App } from "./js/components/App"
import "./style.scss"

const adjustHeader = () => {
  const root = document.documentElement
  root.style.setProperty("--header-height", window.innerHeight)
  root.style.setProperty("--header-width", window.innerWidth)
}

window.addEventListener("resize", adjustHeader)
window.addEventListener("load", adjustHeader)


render(<App />, document.getElementById("container"))