import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Gallery } from "./Gallery"

export const App = () => {
  return (
    <div>
      <span>Hello world</span>
      <Gallery></Gallery>
    </div>
  )
}

const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<App />, wrapper) : false;