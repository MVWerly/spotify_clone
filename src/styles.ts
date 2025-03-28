import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  backgroundBase: '#121212',
  backgroundElevatedBase: '#1f1f1f',
  backgroundElevatedHighlight: '#2a2a2a',
  textBase: '#fff',
  textSubdued: '#b3b3b3',
  profileColor: '#006400',
  backgroundTintedBase: 'hsla(0, 0%, 100%, .1)',
  backgroundTintedBaseHighlight: 'hsla(0, 0%, 100%, .14)',
  scrollBase: 'hsla(0, 0%, 100%, .3)',
  scrollHighlight: 'hsla(0, 0%, 100%, .5)'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.black};
    color: ${colors.textSubdued};
    font-family: sans-serif;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`
