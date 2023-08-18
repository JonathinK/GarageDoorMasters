import { graphql } from 'gatsby';
import React from 'react';
import { Banner, ContactComponent } from '../components';
import { MapIframe, Section } from '../styles';
import Seo from '../components/seo';

const ContactPage = ({ data }) => {
  const BannerData = data.contentfulPage.banner;
  const Sections = data.contentfulPage.section; 
  const siteMetaData = data.site.siteMetadata;
  return(
    <>
      <Banner data={BannerData} inputValue=""/> 
      {Sections.map((section) => {
        switch(section.internalName){
          case "Section: Contact":
            return <ContactComponent section={section} siteData={siteMetaData} key={section.contentful_id}/>
          default:
            return null
        }
      })}
      <Section SectionGrid className="no-padding"
        XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
      >
      <MapIframe
        XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
        XLR="1/2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195619.4732377394!2d-74.4383448989294!3d39.99606523709869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c183dc3f7acdb1%3A0xec027a005d18e906!2sGarage%20Door%20Masters%20LLC!5e0!3m2!1sen!2sus!4v1687987550291!5m2!1sen!2sus"  
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      />
      </Section>
    </>
  )
}
export default ContactPage
export const Head = ({ data }) => <Seo
  title={data.contentfulPage.seoMetadata.seoTitle}
  description={data.contentfulPage.seoMetadata.description}
  canonical={data.contentfulPage.seoMetadata.canonical}
  keywords={data.contentfulPage.seoMetadata.keywords}
/> 
export const query = graphql`
  query {
    contentfulPage (internalName: {eq: "Contact Us"}) {
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
        keywords
        no_index
        no_follow
      }
      section{
        ...ContactContent
      }
    }
    site {
    siteMetadata {
      businessHours {
        day
        time
      }
      phone
      socialLinks {
        name
        url
      }
    }
  }
  }
`
