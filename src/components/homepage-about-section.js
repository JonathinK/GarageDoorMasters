import React from 'react';
import { graphql } from 'gatsby';
import { Section, TextWrapper, Headline,Kicker, ButtonLink, Button, ImageWrapper} from '../styles';
import { TextBlockRender } from './text-block-render';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const HomePageAbout = ({ section }) => {
  const BgImage = getImage(section.content.find(component => component.internalName === 'Landing Page: About Background').sectionImage);
  const Image = getImage(section.content.find(component => component.internalName === 'Landing Page: About Image').image);
  const RenderedComponents = section.content.filter(
    (component) => 
    component.internalName === 'Landing Page: About Text' ||
    component.internalName === 'Landing Page: About Section Cta' 
  );
  
  return (
   <Section HomepageAbout 
    XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
    {/* Background */}
    <ImageWrapper AboutBackground
    XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    XLR="1/3" LR="1/3" MR="1/3" SR="1/3" XSR="1/3"
    >
      <GatsbyImage
        image={BgImage}
        className='full-width-background'
        alt=''
      />
    </ImageWrapper>
    {/* Text Block */}
      {RenderedComponents.map((component) => {
        if (component.internalName === 'Landing Page: About Text') {
          return(
            <TextWrapper key={component.id} GridAlignCenter
              XLC="2/7" LC="2/7" MC="2/10" SC="2/8" XSC="2/6"
              XLR="1/3" LR="1/3" MR="1/2" SR="1/2" XSR="1/2"
            >
              <Kicker>{component.kicker}</Kicker>
              <Headline>{component.headline}</Headline>
              <TextBlockRender content={component} TextValue="primary"/>
              {RenderedComponents.find(
              (c) => c.internalName === 'Landing Page: About Section Cta'
            ) && (
              <Button primary="true">
                <ButtonLink primary="true" to={RenderedComponents.find((c) => c.internalName === 'Landing Page: About Section Cta').ctaLink}>
                {RenderedComponents.find(
                  (c) => c.internalName === 'Landing Page: About Section Cta'
                ).ctaText}
              </ButtonLink>
              </Button>
            )}
            </TextWrapper>
          );
        }
        return null;
      })}
    {/* Section Image */}
    <ImageWrapper SingleImage
      XLC="8/14" LC="8/14" MC="2/10" SC="2/8" XSC="2/6"
      XLR="1/3" LR="1/3" MR="2/3" SR="2/3" XSR="2/3"
    >  
      <GatsbyImage 
        image={Image}
        alt=""
        className='image-fit'
      />
    </ImageWrapper>
    </Section>
  )
}
export const query = graphql`
  fragment AboutSection on ContentfulComponentSection {
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
    ... on ContentfulComponentCta{
      id  
      internalName
      ctaLink
      ctaText:text
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
        )
      }
    }
  }
}
`