import React from 'react';
import { Kicker, Section, TextWrapper, Headline, ImageWrapper } from '../styles';
import { TextBlockRender } from './text-block-render';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export const HitYourDoor = ({section}) => {
  const TextRender = section.content.filter(
    (component) => 
      component.internalName === "Component: Hit Door Text"
  )
  const SectionImage = getImage(section.content.find(component => component.internalName === "Component: Hit Door Image").sectionImage);

  return(
    <Section SectionGrid HitDoor
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      {TextRender.map((component) => {
        return(
          <TextWrapper key={component.contentful_id}
            XLC="2/7" LC="2/7" MC="2/10" SC="2/8" XSC="2/6"
            XLR="1/2" LR="1/2" MR="1/2" SR="1/2" XSR="1/2" 
          >
          <Kicker Alternate>
            {component.kicker}
          </Kicker>
          <Headline HeadlineRed>
            {component.headline}
          </Headline>
          <TextBlockRender content={component}/>
          </TextWrapper>
        ) 
      })}
      <ImageWrapper
        SingleImage
        XLC="8/14" LC="8/14" MC="2/10" SC="2/8" XSC="2/6"
        XLR="1/2" LR="1/2" MR="2/3" SR="2/3" XSR="2/3"
      >
        <GatsbyImage
          image={SectionImage}
          alt=""
          className="image-fit"
        />
      </ImageWrapper>
    </Section>
  )
}

export const query = graphql`
  fragment HitYourDoorContent on ContentfulComponentSection{
    internalName
    contentful_id
    content{
        ... on ContentfulComponentText{
          id 
          contentful_id
          internalName
          kicker
          headline
          text{
            raw
          }
        }
        ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          sectionImage:image {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 50
              resizingBehavior: SCALE
            )
          }
        }
    }
  }
`