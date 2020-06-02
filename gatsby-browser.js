import React from "react"

import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export const onInitialClientRender = () => {
  document
    .querySelector("#___placeholder")
    .setAttribute("style", "display: none")
}
