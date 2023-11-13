import React from 'react';
import { graphql } from 'gatsby';
import { Hero, HomePageAbout, ProductsList, HomepageServices, HomepageServicesCards, RightCompanySection, HomepageReviews, ContactUsSection} from '../components';
import Seo from '../components/seo';

const HomePage = ({ data }) => {
  const HeroData = data.contentfulLandingPage.hero;
  const Sections = data.contentfulLandingPage.sections;
  return(
   <>
    <Hero data={HeroData}/>
    {Sections.map((section) => {
      switch (section.internalName) {
        case "Landing Page: About Gdm":
          return <HomePageAbout section={section} key={section.contentful_id}/>
        case "Products we use":
          return <ProductsList section={section} key={section.contentful_id}/>
        case "Landing Page: Services":
          return <HomepageServices section={section} key={section.contentful_id}/> 
        case "Landing Page: Services Cards":
          return <HomepageServicesCards section={section} key={section.contentful_id}/> 
        case "Section: Right company":
          return <RightCompanySection section={section} key={section.contentful_id} isHomepage={true}/>
        case "Landing Page: Reviews":
          return <HomepageReviews section={section} key={section.contentful_id}/>
        case 'Section: Contact Us Section':
          return <ContactUsSection section={section} key={section.contentful_id}/>
        default:
          return null
      }
    })}
   </>
  )
}

export const Head = ({ data }) => <Seo
  title={data.contentfulLandingPage.seoMetadata.seoTitle}
  description={data.contentfulLandingPage.seoMetadata.description}
  canonical={data.contentfulLandingPage.seoMetadata.cannonical}
  keywords={data.contentfulLandingPage.seoMetadata.keywords}
/> 
export const query = graphql`
  query {
    contentfulLandingPage {
      contentful_id
      seoMetadata {
        seoTitle
        no_follow
        no_index
        cannonical
        keywords
        description
      }
      hero {
        contentful_id
        title
        kicker
        text {
          raw
        }
        ctaBlock {
          contentful_id
          text
          ctaLink
        }
        backgroundImage {
          contentful_id
          gatsbyImageData(
            placeholder: BLURRED
            resizingBehavior: SCALE
            quality: 50
            layout: FULL_WIDTH
            cropFocus: CENTER
            breakpoints:[430,768,1024,1920]
            formats: [WEBP,AUTO]
          )
        }
      }
      sections {
        contentful_id
        ...AboutSection
        ...ProductsList
        ...HomepageServices
        ...HomepageServicesCards
        ...RightCompanySection
        ...SocialProof
        ...ContactUsSection
      }
    }
  }
`;
export default HomePage