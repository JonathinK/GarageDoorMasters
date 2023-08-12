import React from 'react';
import { graphql } from 'gatsby';
import { CardsWrapper, Section } from '../styles';
import { ServicesCard } from "../components";


export const HomepageServicesCards = ({ section }) => {
  return(
    <Section HomepageServicesCards
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
     >
      <CardsWrapper HomepageServiceCards Breakpoints>
        {section.content.map((component,index) => {
          return (
            <ServicesCard 
              content={component}
              key={index}
              cardIcon={true}
            />
          )
        })}
      </CardsWrapper>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageServicesCards on ContentfulComponentSection {
  contentful_id
  name
  content {
    ... on ContentfulComponentCard {
        id
        title
        text {
          raw
        }
        image {
          contentful_id
          gatsbyImageData(
            aspectRatio: 1.8
            cornerRadius: 10
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