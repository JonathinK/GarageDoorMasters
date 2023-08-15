import React from 'react';
import { graphql } from 'gatsby';
import { CardsWrapper, Section} from '../styles';
import { ResidentialServicePageCard } from './residential-service-card';

export const ResidentialServicesCards = ({ section }) => {

  return(
    <Section ResidentialServicesCardsSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
     <CardsWrapper ResidentialCardsWrapper Breakpoints >
      {section.content.map((card) => {
        return <ResidentialServicePageCard content={card} key={card.contentful_id}/>
      })}
     </CardsWrapper>
    </Section>
  )
}
export const query = graphql`
  fragment ResidentialServicesCardsSection on ContentfulComponentSection {
    contentful_id
    internalName
    name
    content{
      ... on ContentfulComponentCard {
          id
          contentful_id
          internalName
          title
          text{
            raw
          }
          image {
            contentful_id
            gatsbyImageData(
              aspectRatio: 1.5
              cornerRadius: 10
              cropFocus: CENTER
              layout: FULL_WIDTH
              jpegProgressive: true
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 60
              resizingBehavior: SCALE
              formats: [WEBP,AUTO]
            )
          }
          cta {
            internalName
            contentful_id
            text
            link:ctaLink
          }
        }
    }
  }
`