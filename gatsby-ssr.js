import React from 'react';  
import { ThemeProvider } from "styled-components";
import  Layout  from "./src/components/layout";
import { GlobalStyles }  from "./src/styles/Global.styled";
import { mainTheme } from './src/themes/Theme';
import "./src/fonts/fonts.css"

// Makes the theme available to the entire application
// Also in the future i will implement a feature to change the theme to lighter colors
// Always wrap the root element before you wrap the page element
export const wrapRootElement = ({ element }) => {
  return(
    <ThemeProvider theme={mainTheme}>
      {element}
    </ThemeProvider>    
  )
}

//Wraps every page with layout
export const wrapPageElement = ({ element, props}) => {
  return(
    <Layout {...props}> 
    <GlobalStyles/>   
      {element}
    </Layout>
  )
}








/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
