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
            return <ReviewsPanel section={section} id={section.contentful_id}/>
          case "Section: Reviews Content":
            return <ReviewsContent section={section} id={section.contentful_id}/>
          case "Section: Contact Us Section":
            return <ContactUsSection section={section} id={section.contentful_id}/>
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
  canonical={data.contentfulPage.seoMetadata.canonical}
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
            quality: 60
            placeholder: BLURRED
            resizingBehavior: SCALE
          )
        }
      }
      seoMetadata {
        contentful_id
        internalName
        seoTitle
        description
        keywords
        no_index
        no_follow
      }
      section{
        ...ReviewsPanel
        ...ReviewsContent
        ...ContactUsSection
      }
    }
  }
`
