import React from 'react';
import { graphql } from 'gatsby';
import { Headline, ImageWrapper, Section, SvgWrapper, TextWrapper, Kicker, SubTitle } from '../styles';
import MainWave from '../svg/assets/main-wave.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';

export const AboutGdmSection = ({ section }) => {

  const AboutImage = getImage(section.content.find(image => image.internalName === "About the company logo").sectionImage);

  const RenderedComponents = section.content.filter(
    (component) => 
    component.internalName === 'About the company: Text' 
  ); 
  const OwnerContent = section.content.filter(
    (component) => 
      component.internalName === 'Component: Owner Text'
  )
  const OwnerImage = getImage(section.content.find(component => component.internalName === "Component: Jeff Image").sectionImage);
  return(
    <Section AboutGdmSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      <SvgWrapper
        XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
        XLR="1/2"  LR="1/2"  MR="1/2"  SR="1/2" XSR="1/2"
        className="absolute-position-top"
      >
       <MainWave/>
      </SvgWrapper>
    {/* About Us Text and Image*/}
      {RenderedComponents.map((component) => {
        if (component.internalName === 'About the company: Text') {
          return(
            <TextWrapper key={component.contentful_id} GridAlignCenter
              XLC="2/8 " LC="2/8" MC="2/10" SC="2/8" XSC="2/6" 
              XLR="2/3" LR="2/3" MR="2/3" SR="2/3" XSR="2/3"
            >
              <Kicker Alternate>{component.kicker}</Kicker>
              <Headline HeadlineRed>{component.headline}</Headline>
              <TextBlockRender content={component} TextValue=""/>
            </TextWrapper>
          );
        }
        return null;
      })}
      <ImageWrapper AboutImage
        XLC="6/10" LC="6/10" MC="4/8" SC="3/7" XSC="2/6" 
        XLR="1/2" LR="1/2" MR="1/2" SR="1/2" XSR="1/2"
      >
        <GatsbyImage
          image={AboutImage}
          className='image-size'
          alt="Gdm Logo"
          loading="eager"
        />
      </ImageWrapper>     
    {/* Owner Text And Image*/}
      <ImageWrapper OwnerImage
        XLC="8/10" LC="8/10" MC="2/5" SC="2/4" XSC="2/6" 
        XLR="2/3" LR="2/3" MR="3/4" SR="3/4" XSR="3/4"

      >
        <GatsbyImage
          image={OwnerImage}
          alt="Company Owner Jeff Wardell"
          className='image-size'
          loading='eager'
        />
      </ImageWrapper>
      {OwnerContent.map((component) => {
        if (component.internalName === 'Component: Owner Text') {
          return(
            <TextWrapper key={component.id} GridAlignCenter
              XLC="10/14 " LC="10/14" MC="5/10" SC="4/8" XSC="2/6" 
              XLR="2/3" LR="2/3" MR="3/4" SR="3/4" XSR="4/5"
            >
              <Kicker Alternate>{component.kicker}</Kicker>
              <SubTitle>{component.headline}</SubTitle>
              <TextBlockRender content={component} TextValue=""/>
            </TextWrapper>
          );
        }
        return null;
      })}
    </Section>
  )
}


export const query = graphql`
  fragment AboutTheCompany on ContentfulComponentSection {
    contentful_id
    internalName
    name
    content{
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
      sectionImage:image{
        gatsbyImageData(
          cropFocus: CENTER
          layout: FULL_WIDTH
          quality: 100
          placeholder: BLURRED
          resizingBehavior: SCALE
          breakpoints:[430,768,1024,1920]
          sizes: "(max-width: 720px) 100vw, 400px "
        )
      }
    }
    }
  }
`