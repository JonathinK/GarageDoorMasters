import React from 'react';
import { graphql } from 'gatsby';
import { ContactUsSection, Banner, ResidentialDamagedSprings, ResidentialBrokenSpringSymptoms, ResidentialLearningTheSystem } from '../components';

const ResidentialSpringRepair = ({ data }) => {
  const SpringRepairBanner = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section;
  console.log(Sections)
  return(
    <>
      <Banner data={SpringRepairBanner}/>
      {Sections.map((section) => {
        switch(section.internalName){
          case 'Section: Residential Damaged Springs':
            return <ResidentialDamagedSprings section={section} key={section.contentful_id}/>
          case 'Section: Learning the spring systems':
            return <ResidentialLearningTheSystem section={section} key={section.contentful_id}/>
          case 'Section: Symptoms Of A Broken Spring':
            return <ResidentialBrokenSpringSymptoms section={section} key={section.contentful_id}/>
          case'Section: Contact Us Section':
            return <ContactUsSection section={section} key={section.contentful_id}/>
          default:
            return null;
        } 
      })}
    </>
  )
}
export default ResidentialSpringRepair

export const query = graphql`
  query {
    contentfulPage(internalName: {eq: "Residential Garage Door Spring Repair"}) {
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
        ...ResidentialDamagedSprings
        ...ResidentialLearningTheSpringSystem
        ...ResidentialSpringSymptoms
        ...ContactUsSection
      }
    }
  }
`
