const React = require("react")
const { ThemeProvider } = require("styled-components");
const { default: Layout } = require("./src/components/layout");
const { GlobalStyles } = require("./src/styles/Global.styled");
const { mainTheme } = require("./src/themes/Theme");

// Makes the theme available to the entire application
// Also in the future i will implement a feature to change the theme to lighter colors
// Always wrap the root element before you wrap the page element
exports.wrapRootElement = ({ element }) => {
  return(
    <ThemeProvider theme={mainTheme}>
      {element}
    </ThemeProvider>
  )
}

//Wraps every page with layout
exports.wrapPageElement = ({ element, props}) => {
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
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
