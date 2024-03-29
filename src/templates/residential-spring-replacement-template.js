import React from 'react';
import { graphql } from 'gatsby';
import { ContactUsSection, Banner, ResidentialDamagedSprings, ResidentialBrokenSpringSymptoms, ResidentialLearningTheSystem } from '../components';
import Seo from '../components/seo';

const ResidentialSpringRepair = ({ data }) => {
  const SpringRepairBanner = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section;
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
export const Head = ({ data }) => <Seo
  title={data.contentfulPage.seoMetadata.seoTitle}
  description={data.contentfulPage.seoMetadata.description}
  canonical={data.contentfulPage.seoMetadata.cannonical}
  keywords={data.contentfulPage.seoMetadata.keywords}
/> 
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
        ...ResidentialDamagedSprings
        ...ResidentialLearningTheSpringSystem
        ...ResidentialSpringSymptoms
        ...ContactUsSection
      }
    }
  }
`
