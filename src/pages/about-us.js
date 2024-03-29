import React from 'react';
import { graphql } from 'gatsby';
import { Banner, RightCompanySection, AboutGdmSection, ContactUsSection, AssuranceSection, BigTextSection} from '../components';
import Seo from '../components/seo';

const AboutUs = ({ data }) => {
 const BannerData = data.contentfulPage.banner;
 const Sections = data.contentfulPage.section;

  return(
    <>
    <Banner data={BannerData} inputValue="Gradient"/>
      {Sections.map((section) => {
        switch (section.internalName) {
          case "Section: About the company":
            return <AboutGdmSection section={section} key={section.contentful_id}/> 
          case "Section: Assurance Section":
            return <AssuranceSection section={section} key={section.contentful_id}/>
          case "Section: Big Text Section":
            return <BigTextSection section={section} key={section.contentful_id}/>
          case "Section: Right company":
            return <RightCompanySection section={section} key={section.contentful_id} isHomepage={false}/>
          case "Section: Contact Us Section":
            return <ContactUsSection section={section} key={section.contentful_id}/>
          default: 
            return ''
        }
      })}
    </>
  )
}

export default AboutUs;
export const Head = ({ data }) => <Seo
  title={data.contentfulPage.seoMetadata.seoTitle}
  description={data.contentfulPage.seoMetadata.description}
  canonical={data.contentfulPage.seoMetadata.cannonical}
  keywords={data.contentfulPage.seoMetadata.keywords}
/> 

export const query = graphql`
  query {
    contentfulPage (internalName: {eq: "About Us"}) {
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
            quality: 100
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
        ...AboutTheCompany
        ...AssuranceContent
        ...BigTextContent
        ...RightCompanySection
        ...ContactUsSection
      }
    }
  }
`
