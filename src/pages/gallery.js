import { graphql } from 'gatsby';
import React from 'react';
import { Banner, ContactUsSection, GalleryComponent } from '../components';



const AreasWeService = ({ data }) => {
  const BannerData = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section; 
  
  return(
    <>
      <Banner data={BannerData} inputValue=""/>
      {Sections.map((section) => {
        switch(section.internalName){
          case "Section: Gallery":
           return <GalleryComponent section={section} key={section.contentful_id}/>
          case "Section: Contact Us Section":
            return <ContactUsSection section={section} key={section.contentful_id}/>
          default: 
            return null;
        }
      })}
    </>
  )
}
export default AreasWeService

export const query = graphql`
  query {
    contentfulPage (internalName: {eq: "Gallery"}) {
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
        ...ImageGallery
        ...ContactUsSection
      }
    }
  }
`
