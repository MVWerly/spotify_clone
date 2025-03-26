import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  backgroundBase: '#121212',
  backgroundElevatedBase: '#1f1f1f',
  backgroundElevatedHighlight: '#2a2a2a',
  textBase: '#fff',
  textSubdued: '#b3b3b3',
  profileColor: '#006400'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.textSubdued};
    font-family: sans-serif;
  }
`
