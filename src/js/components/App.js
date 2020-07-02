import React, { Component } from "react"
import ReactDOM from "react-dom"

export const App = () => {
  return <span>Hello world</span>
}

const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<App />, wrapper) : false;