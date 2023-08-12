import { graphql } from 'gatsby';
import React from 'react';
import { Banner, CommercialOpeningSection, CommercialServices, ImagesPanel, TrustPros, ContactUsSection } from '../components';
import Seo from '../components/seo';



const Commercial = ({ data }) => {
  const BannerData = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section;

  return(
    <>
      <Banner data={BannerData} inputValue=""/>
      {Sections.map((section) => {
        switch (section.internalName){
          case 'Section: Commercial Services Opening':
            return <CommercialOpeningSection section={section} key={section.contentful_id}/>
          case 'Section: Commercial Services':
            return <CommercialServices section={section} key={section.contentful_id}/>
          case 'Section: Commercial Images Panel':
            return <ImagesPanel section={section} key={section.contentful_id}/>
          case 'Section: Trust the pros':
            return <TrustPros section={section} key={section.contentful_id}/>
          case 'Section: Contact Us Section':
            return <ContactUsSection section={section} key={section.contentful_id}/>
          default:
            return null;
        }
      })}
    </>
  )
}
export default Commercial;
export const Head = ({ data }) => <Seo
  title={data.contentfulPage.seoMetadata.seoTitle}
  description={data.contentfulPage.seoMetadata.description}
  canonical={data.contentfulPage.seoMetadata.canonical}
  keywords={data.contentfulPage.seoMetadata.keywords}
/> 
export const query = graphql`
  query {
    contentfulPage (internalName: {eq: "Commercial-Garage-Door-Services"}) {
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
        ...OpeningSection
        ...CommercialServicesContent
        ...ImagesPanel
        ...TrustThePros
        ...ContactUsSection
      }
    }
  }
`
