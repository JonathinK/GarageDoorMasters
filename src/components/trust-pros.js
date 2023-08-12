import React from 'react' 
import { ImageWrapper, Section, TextWrapper, Headline } from '../styles'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const TrustPros = ({ section }) => {
  const BackgroundImage = getImage(section.content.find(image => image.internalName === "Component: Trust Pros Background").background);
  const TextRender = section.content.filter(
    (component) => 
      component.internalName === 'Component: Trust The Pros Text'
  );

  return(
    <Section  TrustProsSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      <ImageWrapper TrustPros
        XLC= "1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
        XLR= "1/2"  LR="1/2"  MR="1/2"  SR="1/2"  XSR="1/2"
      >
        <GatsbyImage image={BackgroundImage} className="image-fit" alt=""/>
      </ImageWrapper>
      {TextRender.map((component) => {
        return(
          <TextWrapper key={component.contentful_id}
            XLC="4/12" LC="4/12" MC="2/10" SC="2/8" XSC="2/6"
            XLR="1/2"  LR="1/2"  MR="1/2" SR="1/2" XSR="1/2"
            GridAlignCenter
            TextAlignCenter
            TrustProsText
          >
            <Headline TrustPros>{component.headline}</Headline>
          </TextWrapper>
        )
      })}
    </Section>
  )
}
export const query = graphql`
  fragment TrustThePros on ContentfulComponentSection {
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
          background: image {
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