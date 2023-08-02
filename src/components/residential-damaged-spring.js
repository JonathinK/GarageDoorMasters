import React from 'react';
import { Headline, ImageWrapper, Kicker, Section, TextWrapper } from '../styles';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';

export const ResidentialDamagedSprings = ({section}) => {
  const RenderedComponent = section.content.filter(
    (component) => component.internalName === 'Component: Broken Spring Opening Text'
  );
  const StretchedSpring = getImage(section.content.find(component => component.internalName === 'Component: Damaged Spring').image);

  return(
    <Section ResidentialDamagedSprings SectionGrid
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
    {RenderedComponent.map((component) => {
      return(
        <TextWrapper 
          XLC="2/7" LC="2/7" MC="2/10" SC="2/8" XSC="2/6"
          XLR="1/2" LR="1/2" MR="1/2" SR="1/2" XSR="1/2"
        >
          <Kicker Alternate>{component.kicker}</Kicker>
          <Headline HeadlineRed>{component.headline}</Headline>
          <TextBlockRender content={component}/>
        </TextWrapper>
      )
    })}
    <ImageWrapper SingleImage
      XLC="8/14" LC="8/14" MC="2/10" SC="2/8" XSC="2/6"
      XLR="1/2"  LR="1/2"  MR="2/3" SR="2/3" XSR="2/3"
    >
      <GatsbyImage image={StretchedSpring} className={`image-fit bottom-image`}/>
    </ImageWrapper>
    </Section>
  )
}
export const query = graphql`
  fragment ResidentialDamagedSprings on ContentfulComponentSection {
    id
    contentful_id
    internalName
    content{
      ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          image {
            contentful_id
            gatsbyImageData(
              cropFocus: TOP
              jpegProgressive: false
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 60
              resizingBehavior: SCALE
            )
          }
        }
        ... on ContentfulComponentText {
          id
          internalName
          kicker
          headline
          text {
            raw
          }
        }
    }
  }
`