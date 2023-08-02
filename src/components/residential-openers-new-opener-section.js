import React from 'react';
import { ImageWrapper, Section, TextWrapper, Headline, Kicker } from '../styles';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';
import { graphql } from 'gatsby';



export const NewOpenerSection = ({ section }) => {
  const Image_1 = getImage(section.content.find(component => component.internalName === 'Component: Opener Image').sectionImage);
  const Image_2 = getImage(section.content.find(component => component.internalName === 'Component: Jeff Installing Opener').sectionImage);
  const Image_3 = getImage(section.content.find(component => component.internalName === 'Component: Liftmaster Opener').sectionImage);
  const Image_4 = getImage(section.content.find(component => component.internalName === 'Component: Genie Opener').sectionImage);
  const RenderedText = section.content.filter(
    (component) => 
      component.internalName === "Component: New Opener Text"
  );
  return(
    <Section NewOpenerSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      {RenderedText.map((render) => {
        return(
          <TextWrapper key={render.contentful_id}
            XLC="2/7"
            XLR="1/3"
            LC="2/7"
            LR="1/3"
            MC="2/10"
            MR="1/2"
            SC="2/8"
            SR="1/2"
            XSC="2/6"
            XSR="1/2"
          >
            <Kicker>{render.kicker}</Kicker>
            <Headline>{render.headline}</Headline>
            <TextBlockRender content={render} TextValue='primary'/>
          </TextWrapper>
        )
      })}
      {/* Image 1 */}
      <ImageWrapper NewOpener className='down'
        XLC="8/11"
        XLR="1/2"
        LC="8/11"
        LR="1/2"
        MC="2/6"
        MR="2/3"
        SC="2/5"
        SR="2/3"
        XSC="2/4"
        XSR="2/3"
      >
        <GatsbyImage image={Image_1} className="Image-Fit" alt=""/>
      </ImageWrapper>
      {/* Image 2 */}
      <ImageWrapper NewOpener className='up'
        XLC="11/14"
        XLR="2/3"
        LC="11/14"
        LR="2/3"
        MC="6/10"
        MR="3/4"
        SC="5/8"
        SR="3/4"
        XSC="4/6"
        XSR="3/4"
      >
        <GatsbyImage image={Image_2} className="Image-Fit" alt=""/>
      </ImageWrapper>
      <ImageWrapper OpenerPng
        XLC="10/14"
        XLR="1/2"
        LC="10/14"
        LR="1/2"
        MC="5/10"
        MR="2/3"
        SC="4/8"
        SR="2/3"
        XSC="3/6"
        XSR="2/3"
      >
        <GatsbyImage image={Image_3} alt=""/>
      </ImageWrapper>
      {/* Image 2 */}
      <ImageWrapper OpenerPng
        XLC="8/12"
        XLR="2/3"
        LC="8/12"
        LR="2/3"
        MC="2/7"
        MR="3/4"
        SC="2/6"
        SR="3/4"
        XSC="2/5"
        XSR="3/4"
      >
        <GatsbyImage image={Image_4} alt=""/>
      </ImageWrapper>
    </Section>
  )
}

export const query = graphql`
  fragment NewOpenersSection on ContentfulComponentSection {
    contentful_id
    internalName
    content{
      ...on ContentfulComponentText{
        id
        contentful_id
        internalName
        kicker
        headline
        text {
          raw
        } 
      }
      ...on ContentfulComponentImage {
        id
        contentful_id
        internalName
        sectionImage: image {
            contentful_id
            gatsbyImageData(
              cornerRadius: 10
              cropFocus: CENTER
              jpegProgressive: false
              layout: FULL_WIDTH
              outputPixelDensities: 7
              placeholder: BLURRED
              resizingBehavior: SCALE
              quality:70
            )
          }
      }
    }
  }
`