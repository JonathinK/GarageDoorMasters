const React = require("react")
const { ThemeProvider } = require("styled-components");
const { default: Layout } = require("./src/components/layout");
const { GlobalStyles } = require("./src/styles/SiteGlobalStyles");
const { mainTheme } = require("./src/theme/theme");

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles/>
      {element}
    </ThemeProvider>
  )
}

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
