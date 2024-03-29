import { createGlobalStyle } from "styled-components";
import '../fonts/fonts.css';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
  }
  html{
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-x:hidden;
  }
  body{
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-weight: normal;
    font-family: "Helvetica Neue",Helvetica;
    margin: 0;
    word-wrap: break-word;
    height: 100%;
    background-color: ${({theme}) => theme.colors.body};
    background-repeat: repeat;
    background-size: fit;
    background-position: center;      
    background-attachment: fixed;
    background-blend-mode: color-dodge; 

    @media ${({theme}) => theme.sizes.mobile}{
      margin-top: 96px;
    }
  }
`