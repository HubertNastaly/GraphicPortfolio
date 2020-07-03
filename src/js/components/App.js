import React, { Component } from "react"
import ReactDOM from "react-dom"
import { apiKey } from "./config"

export const App = () => {
  return <span>Hello world</span>
}

const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<App />, wrapper) : false;