import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Headline, Section, TextWrapper, Button, ButtonLink, ImageWrapper } from '../styles';
import { TextBlockRender } from './text-block-render';


export const ContactUsSection = ({ section }) => {
  const ContactImage = getImage(section.content.find(image => image.internalName === 'Component: Contact Section Image').contactImage);
  const RenderedComponents = section.content.filter(
    (component) => 
      component.internalName === 'Component: Contact Us Section Text' ||
      component.internalName === 'Component: Contact Us Section Cta'
  );
  
  return(
    <Section ContactUsSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
    <ImageWrapper ContactUsImage
      XLC="9/15" LC="9/15" MC="1/11" SC="1/9" XSC="1/7" 
      XLR="1/2"  LR="1/2"  MR="2/3"  SR="2/3" XSR="2/3"
    >
      <GatsbyImage image={ContactImage} className='full-width' alt=""/>
    </ImageWrapper>
    {RenderedComponents.map((component) => {
      if(component.internalName === 'Component: Contact Us Section Text'){
        return(
          <TextWrapper key={component.contentful_id}
            XLC="2/8" LC="2/8" MC="2/10" SC="2/8" XSC="2/6"
            XLR="1/2" LR="1/2" MR="1/2"  SR="1/2" XSR="1/2"
          >
            <Headline HeadlineRed>{component.headline}</Headline>
            <TextBlockRender content={component}/>
            {RenderedComponents.find((c) => c.internalName === 'Component: Contact Us Section Cta') && (
              <Button primary>
                <ButtonLink primary to={RenderedComponents.find((c) => c.internalName === 'Component: Contact Us Section Cta').ctaLink}>
                {RenderedComponents.find(
                  (c) => c.internalName === 'Component: Contact Us Section Cta'
                ).ctaText}
              </ButtonLink>
              </Button>
            )}
          </TextWrapper>
        );
      } return null
    })}
    </Section>
  )
}

export const query = graphql`
  fragment ContactUsSection on ContentfulComponentSection {
    contentful_id
    internalName
    content{
      ...on ContentfulComponentText {
        contentful_id
        internalName
        headline
        text{
          raw
        }
      }
      ... on ContentfulComponentImage {
        id
        internalName
        contentful_id
        contactImage:image {
          contentful_id
          gatsbyImageData(
            cropFocus: CENTER
            layout: FULL_WIDTH
            jpegProgressive: true
            outputPixelDensities: 1.5
            placeholder: BLURRED
            quality: 70
            resizingBehavior: SCALE
          )
        }
      }
      ...on ContentfulComponentCta{
        contentful_id
        internalName
        ctaLink
        ctaText:text
      }
    }
  }
`