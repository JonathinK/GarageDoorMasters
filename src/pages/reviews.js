import { graphql } from 'gatsby';
import React from 'react';
import { Banner,ContactUsSection, ReviewsPanel, ReviewsContent } from '../components';
import Seo from '../components/seo';


const Reviews = ({ data }) => {
  const BannerData = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section;
  return(
    <>
      <Banner data={BannerData} inputValue=""/>
      {Sections.map((section) => {
        switch(section.internalName) {
          case "Section: Reviews Panel":
            return <ReviewsPanel section={section} key={section.contentful_id}/>
          case "Section: Reviews Content":
            return <ReviewsContent section={section} key={section.contentful_id}/>
          case "Section: Contact Us Section":
            return <ContactUsSection section={section} key={section.contentful_id}/>
          default:
            return null;
        }
      })}
    </>
  )
}
export default Reviews

export const Head = ({ data }) => <Seo
  title={data.contentfulPage.seoMetadata.seoTitle}
  description={data.contentfulPage.seoMetadata.description}
  canonical={data.contentfulPage.seoMetadata.cannonical}
  keywords={data.contentfulPage.seoMetadata.keywords}
/>
export const query = graphql`
  query {
    contentfulPage (internalName: {eq: "Reviews"}) {
      id
      internalName
      banner {
        contentful_id
        internalName
        title
        backgroundImage {
          contentful_id
          gatsbyImageData(
            aspectRatio: 1.5
            cropFocus: CENTER
            jpegProgressive: true
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            quality: 50
            placeholder: DOMINANT_COLOR
            resizingBehavior: SCALE
            sizes: "(max-width: 720px) 100vw, 1920px"
            breakpoints:[430,768,1024,1920]
            formats: [WEBP,AUTO,AVIF]
          )
        }
      }
      seoMetadata {
        contentful_id
        internalName
        seoTitle
        description
        cannonical
        keywords
      }
      section{
        contentful_id
        ...ReviewsPanel
        ...ReviewsContent
        ...ContactUsSection
      }
    }
  }
`
