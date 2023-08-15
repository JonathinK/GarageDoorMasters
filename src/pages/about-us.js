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
  canonical={data.contentfulPage.seoMetadata.canonical}
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
            quality: 50
            placeholder: BLURRED
            resizingBehavior: SCALE
            sizes: "1920,1440,720,520"
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
        ...AboutTheCompany
        ...AssuranceContent
        ...BigTextContent
        ...RightCompanySection
        ...ContactUsSection
      }
    }
  }
`
