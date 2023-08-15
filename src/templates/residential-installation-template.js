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
  canonical={data.contentfulPage.seoMetadata.canonical}
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
            sizes: "1920,1440,720,520"
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