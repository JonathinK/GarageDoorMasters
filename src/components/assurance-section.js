import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';
import { CardsWrapper, FeatureCard, ImageWrapper, Section, SubTitle, TextWrapper } from '../styles';


export const AssuranceSection = ({section}) => {
  const AssuranceCards = section.content.filter(
    (component) =>
    component.internalName === 'Component: Assurance Card'
  );

  return(
    <Section 
      AssuranceSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      <CardsWrapper AssuranceWrapper Breakpoints>
        {AssuranceCards.map((card) => {
          const AssuranceImage = getImage(card.assuranceImage)
          return(
            <FeatureCard
              key={card.contentful_id}
              AssuranceCard
            >
              <ImageWrapper AssuranceImage>
                <GatsbyImage
                  image={AssuranceImage}
                  alt="Assurance Image"
                  loading='lazy'
                />
              </ImageWrapper>
              <TextWrapper AssuranceText>
                <SubTitle
                  variant='primary'
                  Assurance
                >
                  {card.title}
                </SubTitle>
              </TextWrapper>
            </FeatureCard>
          )
        })}
      </CardsWrapper>
    </Section>
  )
}

export const query = graphql`
  fragment AssuranceContent on ContentfulComponentSection{
    internalName
    contentful_id
    content {
        ... on ContentfulComponentCard {
          id
          contentful_id
          internalName
          title
          assuranceImage:image {
            contentful_id
            gatsbyImageData(
              aspectRatio: 1
              placeholder: BLURRED
              outputPixelDensities: 1.5
              jpegProgressive: false
              layout: FULL_WIDTH
              quality: 100
              formats: [WEBP,AUTO]
            )
          }
        }
    }
  }
`