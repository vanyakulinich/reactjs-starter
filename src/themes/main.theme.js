import { createGlobalStyle } from "styled-components"

// add more theme props
export const mainTheme = {
  color: {
    gray: "#696969",
    white: "#ffffff",
    black: "#000000",
  },
}

// add more global styles here
export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        background: ${mainTheme.color.gray};
    }

    * {
        color: ${mainTheme.color.white};
    }

`
