import { createGlobalStyle } from "styled-components";
import "../fonts/fonts.css"

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  html{
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font: sans-serif;
    font-size:;
    line-height: ${({theme}) => theme.lineheight.normal};
    overflow-y: scroll;
  }
  body{
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: ${({theme}) => theme.colors.primaryblue};
    font-family: sans-serif;
    font-family: ${({theme}) => theme.fonts.goodheadline};
    font-weight: normal;
    margin: 0;
    word-wrap: break-word;
  }
`