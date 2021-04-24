import { createGlobalStyle } from "styled-components"

// add more theme props
export const mainTheme = {
  color: {
    gray: "#696969",
    white: "#ffffff",
    black: "#000000",
  },
  flexRow: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColumn: `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
}

// add more global styles here
export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }

    * {
        color: ${mainTheme.color.black};
    }

`
