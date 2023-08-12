import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';
import {  Headline, ImageWrapper, Section, TextWrapper } from '../styles';


export const BigTextSection = ({section}) => {
  const BigTextRender = section.content.filter(
    (component) =>
    component.internalName === 'Component: Big Text'
  );
  const BigTextImage = getImage(section.content.find(component => component.internalName === "Component: Big Text Image").bigTextSectionImage)

  return(
    <Section
      BigTextSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
    {BigTextRender.map((component) => {
      return(
        <TextWrapper
          BigText
          key={component.contentful_id}
          XLC="8/14" LC="8/14" MC="6/10" SC="2/8" XSC="2/6"
          XLR="1/2"  LR="1/2"  MR= "1/2" SR="2/3" XSR="2/3"
        >
          <Headline BigTextHeadline>
            {component.headline}
          </Headline>
        </TextWrapper>
      )
    })}
      <ImageWrapper
      XLC="2/8" LC="2/8" MC="2/6" SC="2/8" XSC="2/6"
      XLR="1/2" LR="1/2" MR="1/2" SR="1/2" XSR="1/2"
      SingleImage
      BigTextImage
      >
        <GatsbyImage
          image={BigTextImage}
          alt="Garage Door Detatched from house"
          className="image-fit"
        />
      </ImageWrapper>
    </Section>
  )
}

export const query = graphql`
  fragment BigTextContent on ContentfulComponentSection{
    internalName
    contentful_id
    content {
      ... on ContentfulComponentText {
      id
      internalName
      kicker
      headline
      text {
        raw
      }
      } 
      ... on ContentfulComponentImage {
      id
      title
      internalName
      slug
      bigTextSectionImage:image{
        gatsbyImageData(
          cropFocus: CENTER
          layout: FULL_WIDTH
          quality: 100
          placeholder: BLURRED
          resizingBehavior: SCALE
        )
      }
    }
    }
  }
`