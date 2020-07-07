import React from 'react'
import { render } from 'react-dom'
import { App } from "./js/components/App"
import "./style.scss"

const adjustHeader = () => {
  const root = document.documentElement
  root.style.setProperty("--client-width", root.clientWidth)
}

window.addEventListener("resize", adjustHeader)
window.addEventListener("load", adjustHeader)

render(<App />, document.getElementById("container"))