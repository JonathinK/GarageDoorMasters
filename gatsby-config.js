/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(process.env);
module.exports = {
  siteMetadata: {
    title: `Garage Door Masters`,
    description: `Garage Door Masters are your one stop shop for all of your Residential and Commercial garage door needs. From broken springs to new doors,"we do it all". We service monmouth and ocean counties`,
    author: `@DiamondDigitalServices`,
    canonical: `https://garagedoormastersllc.com/`,
    phone:`(732)-870-7313`,
    navigationLinks: [
      {name: "Residential", link:"/residential"},
      {name: "Commercial", link:"/commercial"},
      {name: "About", link:"/about-us"},
      {name: "Service Areas", link:"/areas-we-service"},
      {name: "Gallery", link:"/gallery"},
      {name: "Reviews", link:"/reviews"},
      {name: "Contact", link:"/contact"},
    ],
    businessLicense:`#13vh07144300`,
    businessHours:[
      {day: "Monday", time: "8:00AM - 6:00PM"},
      {day: "Tuesday", time: "8:00AM - 6:00PM"},
      {day: "Wednesday", time: "8:00AM - 6:00PM"},
      {day: "Thursday", time: "8:00AM - 6:00PM"},
      {day: "Friday", time: "8:00AM - 6:00PM"},
      {day: "Saturday", time: "8:00AM - 1:00PM"},
    ],
    socialLinks: [
      {name: "facebook", url: 'https://www.facebook.com/GarageDoorMastersNJ/'},
      {name:"google", url:"https://www.google.com/search?hl=en-US&gl=us&q=Garage+Door+Masters+LLC&ludocid=17006289284884916486lsig=AB86z5X6wawVTNhGumXYMzkFxxUn#lrd=0x89c183dc3f7acdb1:0xec027a005d18e906,3C"},
      {name: "networkx", url: 'https://www.networx.com/c.garage-door-masters-llc'}
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken:
          process.env.NODE_ENV === "development"
            ? process.env.CONTENTFUL_PREVIEW_API_TOKEN
            : process.env.CONTENTFUL_DELIVERY_API_TOKEN,
        host:
          process.env.NODE_ENV === "development"
            ? "preview.contentful.com"
            : "cdn.contentful.com",
        environment:
          process.env.NODE_ENV === "development" ? "preview" : "master",
          ...process.env.NODE_ENV === 'development' ? { deliveryToken: undefined } : {},
      },
    },
  ],
}
