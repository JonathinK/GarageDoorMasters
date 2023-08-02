import React from 'react';
import { graphql } from 'gatsby';
import { Button, ButtonLink, CardsWrapper, Headline, ImageWrapper, Section, TextWrapper } from '../styles';
import { ServicesCard } from './services-card';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';

export const CommercialServices = ({ section }) => {
 const RenderedText = section.content.filter(
  (component) => 
    component.internalName === 'Component: Commercial Services Text');
  const CommercialServicesCards = section.content.filter(
    (component) =>
      component.internalName === "Component: Commercial Installation Card" ||
      component.internalName === "Component: Commercial Repair Card" ||
      component.internalName === "Component: Commercial Openers Card" ||
      component.internalName === "Component: Commercial Maintenance Contract Card"

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
      <CardsWrapper CommercialServiceCards>
        {CommercialServicesCards.map((card) => {
        return(
          <ServicesCard content={card} key={card.contentful_id}/>
        )
      })}
      </CardsWrapper>
    </Section>
  )
}
export const query = graphql`
  fragment CommercialServicesContent on ContentfulComponentSection{
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
            )
          }
        }
    }
  }
`