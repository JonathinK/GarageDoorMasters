import React from 'react';
import { graphql } from 'gatsby';
import { Section, TextWrapper, Headline,Kicker, ImageWrapper} from '../styles';
import { TextBlockRender } from './text-block-render';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ResidentialNewDoor = ({ section }) => {
  const Image1 = getImage(section.content.find(component => component.internalName === 'Component: Garage Door 1').newDoor);
  const Image2 = getImage(section.content.find(component => component.internalName === 'Component: Garage Door 2').newDoor);
  const Image3 = getImage(section.content.find(component => component.internalName === 'Component: Garage Door 3').newDoor);
  const Image4 = getImage(section.content.find(component => component.internalName === 'Component: Garage Door 4').newDoor);
  const RenderedComponents = section.content.filter(
    (component) => 
    component.internalName === 'Component: New Installation Text'
  );

  return (
   <Section SectionGrid ResidentialNewDoor
    XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
    {/* Text Block */}
      {RenderedComponents.map((component) => {
        if (component.internalName === 'Component: New Installation Text') {
          return(
            <TextWrapper key={component.id} GridAlignCenter
              XLC="2/7" LC="2/7" MC="2/10" SC="2/8" XSC="2/6"
              XLR="1/3" LR="1/3" MR="1/2" SR="1/2" XSR="1/2"
            >
              <Kicker>{component.kicker}</Kicker>
              <Headline>{component.headline}</Headline>
              <TextBlockRender content={component} TextValue="primary"/>
            </TextWrapper>
          );
        }
        return null;
      })}
    {/* Section Images */}
    <ImageWrapper LargeImage
      XLC="8/12" LC="8/12" MC="2/7" SC="2/6" XSC="2/5"
      XLR="1/2" LR="1/2" MR="2/3" SR="2/3" XSR="2/3"
    >
      <GatsbyImage 
        image={Image1}
        className="image-fit"
        alt=""
      />
    </ImageWrapper>
    <ImageWrapper LargeImage
      XLC="10/14" LC="10/14" MC="5/10" SC="4/8" XSC="3/6"
      XLR="2/3" LR="2/3" MR="3/4" SR="3/4" XSR="3/4"
    >
      <GatsbyImage 
        image={Image3}
        alt=""
        className="image-fit"
      />
    </ImageWrapper>
    <ImageWrapper SmallImage
      XLC="8/11" LC="8/11" MC="6/10" SC="5/8" XSC="4/6"
      XLR="2/3" LR="2/3" MR="2/3" SR="2/3" XSR="2/3"
    >
      <GatsbyImage 
        image={Image2}
        className="image-fit"
        alt=""
      />
    </ImageWrapper>
    <ImageWrapper SmallImage
      XLC="11/14" LC="11/14" MC="2/6" SC="2/5" XSC="2/4"
      XLR="1/2" LR="1/2" MR="3/4" SR="3/4" XSR="3/4"
    >  
      <GatsbyImage 
        image={Image4}
        alt=""
        className="image-fit"
      />
    </ImageWrapper>
    
    </Section>
  )
}
export const query = graphql`
  fragment ResidentialNewDoor on ContentfulComponentSection {
  contentful_id
  name
  content {
    ... on ContentfulComponentText {
      id
      internalName
      kicker
      title
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
      newDoor:image{
        gatsbyImageData(
          aspectRatio: 1.5
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