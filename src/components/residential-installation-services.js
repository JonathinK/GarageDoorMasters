import React from 'react';
import { graphql } from 'gatsby';
import { CardsWrapper, Headline, Section, TextWrapper } from '../styles';
import { ServicesCard } from './services-card';


export const ResidentialInstallationServices = ({ section }) => {
  
 const RenderedText = section.content.filter(
  (component) => 
    component.internalName === 'Component: Services Text');
  const ResidentialServicesCards = section.content.filter(
    (component) =>
      component.internalName === "Component: High Lift Card" ||
      component.internalName === "Component: Low Headroom Card" ||
      component.internalName === "Component: Custom Door Sizes Card" || 
      component.internalName === "Component: New Installs Card"
  );
  
  return(
    <Section SectionGrid CommercialServices
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      {RenderedText.map((component) => {
        return(
          <TextWrapper key={component.contentful_id}
            XLC="2/14" LC="2/14" MC="2/10" SC="2/8" XSC="2/6"
            XLR="1/2"  LR="1/2"  MR="1/2"  SR="1/2" XSR="1/2"
            TextAlignCenter
            GridAlignCenter
          >
            <Headline HeadlineRed>{component.headline}</Headline>
          </TextWrapper>
        )
      })}
      {/*Cards Render Component*/}
      <CardsWrapper ResidentialServiceCards>
        {ResidentialServicesCards.map((card) => {
        return(
          <ServicesCard content={card} key={card.contentful_id}/>
        )
      })}
      </CardsWrapper>
    </Section>
  )
}
export const query = graphql`
  fragment ResidentialServicesContent on ContentfulComponentSection{
    contentful_id
    internalName
    content{
      ...on ContentfulComponentText {
        internalName
        contentful_id
        kicker
        headline
        text{
          raw
        }
      }
      
      ... on ContentfulComponentCard {
          id
          contentful_id
          internalName
          title
          text {
            raw
          }
          image {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 60
              resizingBehavior: SCALE
              formats: [WEBP,AUTO]
            )
          }
        }
    }
  }
`