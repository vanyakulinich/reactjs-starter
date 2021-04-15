import React from "react"
import { ThemeProvider } from "styled-components"
import { mainTheme, GlobalStyles } from "./themes/main.theme"

const App = () => {
  // TODO: entry point: all providers should be here

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <div>Starter</div>
      </ThemeProvider>
    </>
  )
}

export default App
