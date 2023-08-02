import React from 'react';
import { Banner, ContactUsSection, DoorRepair, TimeToService, HitYourDoor } from '../components';
import { graphql } from 'gatsby';

const ResidentialRepair = ({data}) => {
  const OpenersBanner = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section;
  return(
    <>
       <Banner data={OpenersBanner}/>
        {Sections.map((section) => {
          switch(section.internalName){
            case 'Section: Repair':
            return <DoorRepair section={section} key={section.contentful_id}/>
            case 'Section: Time To Service Door':
            return <TimeToService section={section} key={section.contentful_id}/>
            case 'Section: Hit Door Section':
            return <HitYourDoor section={section} key={section.contentful_id}/>
            case 'Section: Contact Us Section':
            return <ContactUsSection section={section} key={section.contentful_id}/>
            default:
              return null;
          } 
      })}
    </>
  )
}
export default ResidentialRepair
export const query = graphql`
  query {
    contentfulPage(internalName: {eq: "Residential Garage Door Repair"}) {
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
            quality: 70
            resizingBehavior: SCALE
          )
        }
      }
      section {
        contentful_id
        internalName
        ...DoorRepairContent
        ...TimeToServiceContent
        ...HitYourDoorContent
        ...ContactUsSection
      }
    }
  }
`