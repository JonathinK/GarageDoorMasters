import React from 'react' 
import { Headline, ImageWrapper, Kicker, Section, TextWrapper } from '../styles'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';

export const CommercialOpeningSection = ({ section }) => {
  const RenderedText = section.content.filter(
    (component) => 
      component.internalName === "Component: Commercial Opening Text");

  const OpeningSectionImage = getImage(section.content.find(image => image.internalName === "Component: Opening Image").image)
  return(
    <Section SectionGrid CommercialOpeningSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
      
    >
    {RenderedText.map((component) => {
      return(
         <TextWrapper key={component.contentful_id}
          XLC="2/7"  LC="2/7"  MC="2/10"  SC="2/8" XSC="2/6"
          XLR="1/2"  LR="1/2"  MR="1/2"  SR="1/2"  XSR="1/2"
         >
          <Kicker>{component.kicker}</Kicker>
          <Headline>{component.headline}</Headline>
          <TextBlockRender content={component} TextValue="primary"/>
        </TextWrapper>
      )  
    })}
    <ImageWrapper SingleImage
      XLC="8/14" LC="8/14" MC="2/10" SC="2/8" XSC="2/6"
      XRC="1/2 " LR="1/2" MR="2/3" SR="2/3" XSR="2/3" 
    >
      <GatsbyImage image={OpeningSectionImage} alt='' className='image-fit'/>
    </ImageWrapper>
    </Section>
  )
}

export const query = graphql`
  fragment OpeningSection on ContentfulComponentSection {
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
      ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          image {
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