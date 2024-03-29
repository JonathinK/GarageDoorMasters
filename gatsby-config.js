/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Garage Door Masters LLC`,
    description: `Garage Door Masters are your one stop shop for all of your Residential and Commercial garage door needs. From broken springs to new doors,"we do it all". We service monmouth and ocean counties`,
    author: `DiamondDigitalServices`,
    siteUrl:`https://garagedoormastersllc.com/`,
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
    businessEmail:`gdoormasters@gmail.com`,
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
    bbbProof: 'https://www.bbb.org/us/nj/brick/profile/garage-doors/garage-door-masters-llc-0221-90197097'

  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
    { /* Google Tag Manager */
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PXDZ63WP",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      }
    },
    {/* Gatsby Filesystem */
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },  
    { /* Netlify Plugin */
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    { /* Web Font Loader */
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id:'hnr3hay',
        },
      },
    },
    { /* SiteMap Plugin */
      resolve: 'gatsby-plugin-sitemap',
      options:{
        createLinkInHead: true,
        query: `
          {
            site{
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allContentfulPage {
              nodes {
                slug
                updatedAt
              }
            }
            allContentfulLandingPage {
              nodes {
                slug
                updatedAt
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allContentfulPage: { nodes: allContentfulPages },
        }) => {
          const contentfulPageMap = allContentfulPages.reduce((acc, node) => {
            const { slug } = node;
            acc[slug] = node;

            return acc;
          }, {});

          return allPages.map(page => {
            return { ...page, ...contentfulPageMap[page.path] };
          });
        },
        serialize: ({ path, updatedAt }) => {
          return {
            url: path,
            lastmod: updatedAt,
          };
        },
      },
    },
    { /* Plugin Manifest */
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
    { /* React Svg Plugin */
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    { /* Contentful Plugin*/
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
        environment:'preview',
      },
    },
  ],
}
