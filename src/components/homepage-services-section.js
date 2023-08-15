import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Kicker, Section, Headline, TextWrapper, ImageWrapper, Button, ButtonLink } from "../styles";
import { TextBlockRender } from './text-block-render';

export const HomepageServices = ({ section }) => {
 const TopTextRender = section.content.filter(
  (component) => 
    component.internalName === "Landing Page: Services Text"
 );
 const ResidentialRender = section.content.filter(
  (component) =>
    component.internalName === "Landing Page: Services - Residential Image" ||
    component.internalName === "Landing Page: Services Text - Residential" ||
    component.internalName === "Component: Cta - Residential"
 )
 const CommercialRender = section.content.filter(
  (component) =>
    component.internalName === "Landing Page: Services - Commercial Image" ||
    component.internalName === "Landing Page: Services Text - Commercial" ||
    component.internalName === "Component: Cta - Commercial"
 )
  return(
    <Section HomepageServices
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
    {TopTextRender.map((component) => {
      return(
        <TextWrapper
          TopText
          key={component.contentful_id}
          XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
          XLR="1/2"  LR="1/2"  MR="1/2"  SR="1/2" XSR="1/2" 
        >
          <Kicker>{component.kicker}</Kicker>
          <Headline>{component.headline}</Headline>
        </TextWrapper>
      )
    })}
    {ResidentialRender.map((component) => {
      const ResidentialImage = getImage(component.image);
      return(
        <React.Fragment key={component.contentful_id}>
        {component.internalName === "Landing Page: Services - Residential Image" && (
           <ImageWrapper 
            key={component.contentful_id}
            SingleImage
            XLC="2/8" LC="2/8" MC="2/10" SC="2/8" XSC="2/6"
            XLR="2/3" LR="2/3" MR="2/3" SR="2/3" XSR="2/3"
          >
          <GatsbyImage
            image={ResidentialImage}
            alt=""
            className="image-fit"
            loading='lazy'
          />
        </ImageWrapper>
        )}
        {component.internalName === "Landing Page: Services Text - Residential" && (
          <TextWrapper 
          ServiceText
          key={component.contentful_id}
          XLC="2/8" LC="2/8" MC="2/10" SC="2/8" XSC="2/6"
          XLR="3/4" LR="3/4" MR="3/4"  SR="3/4" XSR="3/4"
          >
          <Kicker>
            {component.kicker}
          </Kicker>
          <Headline>{component.headline}</Headline>
          <TextBlockRender content={component} TextValue="primary"/>
          {ResidentialRender.find(
            (item) => item.internalName === "Component: Cta - Residential"
          ) && (
            <Button 
              as="button"
              primary="true"
              key={component.contentful_id}
              >
              <ButtonLink
              primary="true"
                to={
                  ResidentialRender.find(
                    (item) => item.internalName === "Component: Cta - Residential"
                  ).ctaLink
                }
              >
                {
                  ResidentialRender.find(
                    (item) => item.internalName === "Component: Cta - Residential"
                  ).ctaText
                }
              </ButtonLink>
            </Button>
          )}
        </TextWrapper> 
        )}
        </React.Fragment>
      )
    })}
    {CommercialRender.map((component) => {
      const ResidentialImage = getImage(component.image);
      return(
        <React.Fragment key={component.contentful_id}>
        {component.internalName === "Landing Page: Services - Commercial Image" && (
           <ImageWrapper 
            key={component.contentful_id}
            SingleImage
            XLC="8/14" LC="8/14" MC="2/10" SC="2/8" XSC="2/6"
            XLR="2/3"  LR="2/3"  MR="4/5"  SR="4/5" XSR="4/5" 
          >
          <GatsbyImage
            image={ResidentialImage}
            alt=""
            className="image-fit"
            loading='lazy'
          />
        </ImageWrapper>
        )}
        {component.internalName === "Landing Page: Services Text - Commercial" && (
          <TextWrapper 
            ServiceText
            key={component.contentful_id}
            XLC="8/14" LC="8/14" MC="2/10" SC="2/8" XSC="2/6"
            XLR="3/4"  LR="3/4"  MR="5/6"  SR="5/6" XSR="5/6"
          >
          <Kicker>
            {component.kicker}
          </Kicker>
          <Headline>{component.headline}</Headline>
          <TextBlockRender content={component} TextValue="primary"/>
          {CommercialRender.find(
            (item) => item.internalName === "Component: Cta - Commercial"
          ) && (
            <Button 
              as="button"
              primary="true"
              key={component.contentful_id}
            >
              <ButtonLink
                primary="true"
                to={
                  CommercialRender.find(
                    (item) => item.internalName === "Component: Cta - Commercial"
                  ).ctaLink
                }
              >
                {
                  CommercialRender.find(
                    (item) => item.internalName === "Component: Cta - Commercial"
                  ).ctaText
                }
              </ButtonLink>
            </Button>
          )}
        </TextWrapper> 
        )}
        </React.Fragment>
      )
    })}
    </Section>
  )
}
export const query = graphql`
  fragment HomepageServices on ContentfulComponentSection {
  contentful_id
  name
  content {
    ... on ContentfulComponentText {
      id
      contentful_id
      kicker
      title
      headline
      text {
        raw
      }
    }
    ... on ContentfulComponentCta {
      internalName
      contentful_id
      ctaLink
      ctaText:text
    }
    ... on ContentfulComponentImage {
      contentful_id
      title
      internalName
      slug
      image{
        gatsbyImageData(
          aspectRatio: 2.5
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
