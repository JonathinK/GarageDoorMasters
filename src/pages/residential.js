import { graphql } from 'gatsby';
import React from 'react';
import { Banner } from '../components';
import { ResidentialOpeningStatement, ResidentialServicesCards, ContactUsSection } from '../components';
import Seo from '../components/seo';

const ResidentialPage = ({ data }) => {
  const BannerData = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section; 
  return(
    <>
      <Banner data={BannerData} inputValue=""/>
      {Sections.map((section) => {
        switch(section.name) {
          case 'Section: Opening Services Statement':
            return <ResidentialOpeningStatement section={section} key={section.contentful_id}/>
          case 'Section: Residential Services Page Cards':
            return <ResidentialServicesCards section={section} key={section.contentful_id}/>
          case 'Section: Contact Us Section':
            return <ContactUsSection section={section} key={section.contentful_id}/>
          default:
            return null;
        }
      })}
    </>
  )
}
export default ResidentialPage

export const Head = ({ data }) => <Seo
  title={data.contentfulPage.seoMetadata.seoTitle}
  description={data.contentfulPage.seoMetadata.description}
  canonical={data.contentfulPage.seoMetadata.cannonical}
  keywords={data.contentfulPage.seoMetadata.keywords}
/> 

export const query = graphql`
  query {
    contentfulPage (internalName: {eq: "Residential-Garage-Door-Services"}) {
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
            placeholder: BLURRED
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
        no_index
        no_follow
      }
      section{
        ...ResidentialOpeningSection
        ...ResidentialServicesCardsSection
        ...ContactUsSection
      }
    }
  }
`
