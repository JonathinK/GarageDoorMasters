import React from 'react';
import { graphql } from 'gatsby';
import { Banner, ContactUsSection, ImagesPanel,ResidentialInstallationServices,ResidentialNewDoor, SalesTeam } from '../components';
import Seo from '../components/seo';

const ResidentialInstallation = ({data}) => {
  const OpenersBanner = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section;
  return(
    <>
    <Banner data={OpenersBanner}/>
        {Sections.map((section) => {
          switch(section.internalName){
            case'Section: New Installation':
            return <ResidentialNewDoor section={section} key={section.contentful_id}/>
            case'Section: Installation Services':
            return <ResidentialInstallationServices section={section} key={section.contentful_id}/>
            case'Section: Residential Installation Image Spread':
            return <ImagesPanel section={section} key={section.contentful_id}/>
            case'Section: Sales Team':
            return <SalesTeam section={section} key={section.contentful_id}/> 
            case'Section: Contact Us Section':
            return <ContactUsSection section={section} key={section.contentful_id}/>
            
            default:
              return null;
          } 
      })}
     
    </>
  )
}
export default ResidentialInstallation
export const Head = ({ data }) => <Seo
  title={data.contentfulPage.seoMetadata.seoTitle}
  description={data.contentfulPage.seoMetadata.description}
  canonical={data.contentfulPage.seoMetadata.cannonical}
  keywords={data.contentfulPage.seoMetadata.keywords}
/> 
export const query = graphql`
  query {
    contentfulPage(internalName: {eq: "Residential Garage Door Installation"}) {
      id
      internalName
      seoMetadata {
        internalName
        contentful_id
        seoTitle
        description
        cannonical
        keywords
        no_follow
        no_index
      }
      banner {
        internalName
        title
        backgroundImage {
          contentful_id
          gatsbyImageData(
            cropFocus: CENTER
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
            quality: 50
            resizingBehavior: SCALE
            sizes: "(max-width: 720px) 100vw, 1920px"
            breakpoints:[430,768,1024,1920]
            formats: [WEBP,AUTO,AVIF]
          )
        }
      }
      section {
        contentful_id
        internalName
        ...ResidentialNewDoor
        ...ResidentialServicesContent
        ...ImagesPanel
        ...SalesTeam
        ...ContactUsSection
      }
    }
  }
`