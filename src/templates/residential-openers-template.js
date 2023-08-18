import { graphql } from 'gatsby';
import React from 'react';
import { Banner, HelpingHomeownersSection, NewOpenerSection, ContactUsSection, OpenerSymptomsSection, GenieDealerSection, OpenerServices} from '../components';
import Seo from '../components/seo';


const ResidentialOpenersTemplate = ({ data }) => {
  const OpenersBanner = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section;
  return(
    <>
      <Banner data={OpenersBanner}/>
      {Sections.map((section) => {
        switch(section.internalName){
          case 'Section: Helping Homeowners':
          return <HelpingHomeownersSection section={section} key={section.contentful_id}/>
          case 'Section: New Opener':
          return <NewOpenerSection section={section} key={section.contentful_id}/>
          case 'Section: Genie Dealer':
          return <GenieDealerSection section={section} key={section.contentful_id}/>
          case 'Section: Opener Services Section':
          return <OpenerServices section={section} key={section.contentful_id}/>
          case 'Section: Symptoms of a broken opener':
          return <OpenerSymptomsSection section={section} key={section.contentful_id}/>
          case'Section: Contact Us Section':
          return <ContactUsSection section={section} key={section.contentful_id}/>
          default:
            return null;
        } 
      })}
    </>
  )
}
export default ResidentialOpenersTemplate
export const Head = ({ data }) => <Seo
  title={data.contentfulPage.seoMetadata.seoTitle}
  description={data.contentfulPage.seoMetadata.description}
  canonical={data.contentfulPage.seoMetadata.canonical}
  keywords={data.contentfulPage.seoMetadata.keywords}
/> 
export const query = graphql`
  query{
    contentfulPage (internalName: {eq: "Residential Garage Opener Services"}) {
      id
      internalName
      banner {
        contentful_id
        internalName
        title
        backgroundImage {
          contentful_id
          gatsbyImageData(
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
        keywords
        no_index
        no_follow
      }
      section{
        ...HelpingHomeowners
        ...NewOpenersSection
        ...GenieDealerSection
        ...OpenerServicesContent
        ...SymptomsSection
        ...ContactUsSection
      }
    }
  }
`