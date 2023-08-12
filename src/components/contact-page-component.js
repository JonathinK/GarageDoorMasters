import React from 'react';
import { Headline, ImageWrapper, PhoneIcon, Section, TextWrapper, ExternalLink, LocationIcon, SubTitle, ClockIcon } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { PageForm } from './form';
import { graphql } from 'gatsby';
import { TextBlockRender } from './text-block-render';

export const ContactComponent = ({ section, siteData }) => {
  /*Render filter for Text Block*/
  const TextRender = section.content.filter(
    (component) => 
      component.internalName === "Component: Contact Text"
  );

  /*Background Image Find*/
  const BackgroundImage = getImage(section.content.find(image => image.internalName === "Component: Form Background").bgImage);
  return(
    <Section SectionGrid Contact
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      <ImageWrapper FormBackground
        XLC="9/15" LC="8/15" MC="3/11" SC="2/9" XSC="3/7"
        XLR="1/2" LR="1/2" MR="2/3" SR="2/3" XSR="2/3"
      >
        <GatsbyImage
          image={BackgroundImage}
          alt=""
          className="image-fit"
        />
      </ImageWrapper>
      {TextRender.map((component) => {
        return(
          <TextWrapper 
            ContactText
            key={component.contentful_id}
            XLC="2/7" LC="2/7" MC="2/10" SC="2/8" XSC="2/6"
            XLR="1/2" LR="1/2" MR="1/2" SR="1/2" XSR="1/2"
          >
            <Headline HeadlineRed>{component.headline}</Headline>
            <TextBlockRender content={component}/>
            <div className="wrappers">
            <PhoneIcon alt="true"/>
            <ExternalLink href="tel:{siteData.phone}" ContactLink>{siteData.phone}
            </ExternalLink>
            </div>
            <div className="wrappers">
            <LocationIcon alt="true"/>
             <p>Brick, NJ</p>
            </div>
            <div className="businessHours">
              <div className='wrappers'><ClockIcon alt="true"/><SubTitle>Hours of operation</SubTitle></div>
              <br />
              <ul>
              {siteData.businessHours.map((component, index) => {
                return(
                  <li key={index}>{component.day}: {component.time}</li>
                )
              })}
              </ul>
              
            </div>
          </TextWrapper>
        )
      })}
      <PageForm
        XLargeCol="9/14"
        XLargeRow="1/2"
        LargeCol="8/14"
        LargeRow="1/2"
        MedCol="2/10"
        MedRow="2/3"
        SmallCol="2/8"
        SmallRow="2/3"
        XSmallCol="2/6"
        XSmallRow="2/3"
      />
    </Section>
  )
}
export const query = graphql`
  fragment ContactContent on ContentfulComponentSection {
    internalName
    contentful_id
    content{
      ... on ContentfulComponentText{
      internalName
      contentful_id
      headline
      text{
        raw
      }
    }
    ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          slug
          bgImage: image {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              layout: FULL_WIDTH
              outputPixelDensities: 2
              placeholder: BLURRED
              quality: 100
              resizingBehavior: SCALE
            )
          }
        }
    }
    
  }
`