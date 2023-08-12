import React from 'react';
import { ImageWrapper, Section, TextWrapper, Kicker, Headline, Video, Iframe } from '../styles';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage} from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';


export const GenieDealerSection = ({section}) => {
  const GenieImage = getImage(section.content.find(component => component.internalName === "Component: Genie Image").image);
  const BadgeImage = getImage(section.content.find(component => component.internalName === "Component: Genie Badge").image);
  const GenieVideo = section.content.find(component => component.internalName === "Component: Genie Video").videoLink;
  const ComponentRender = section.content.filter(
    (component) => 
      component.internalName === 'Component: Genie Dealer Text'
  );
  return(
    <Section GenieDealer
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >  
    <ImageWrapper GenieImage
      XLC="1/8"
      XLR="1/3"
      LC="1/8"
      LR="1/3"
      MC="1/10"
      MR="1/3"
      SC="1/9"
      SR="1/3"
      XSC="1/7"
      XSR="1/3"
    >
      <GatsbyImage image={GenieImage} className="genie" alt=""/>
    </ImageWrapper>
    
      {ComponentRender.map((component) => {
        return(
          <TextWrapper GenieText
          key={component.contentful_id}
          XLC="8/14"
          XLR="1/2"
          LC="8/14"
          LR="1/2"
          MC="2/10"
          MR="1/2"
          SC="2/8"
          SR="1/2"
          XSC="2/6"
          XSR="1/2"
          > 
            <div className="kicker-image-wrap">
              <GatsbyImage image={BadgeImage} className="badge" alt=""/>
              <Kicker>{component.kicker}</Kicker>
            </div>
            <Headline>{component.headline}</Headline>
            <TextBlockRender content={component} TextValue="primary"/>
          </TextWrapper>
        )
      })}
      <Video
        XLC="8/14"
        XLR="2/3"
        LC="8/14"
        LR="2/3"
        MC="2/10"
        MR="2/3"
        SC="2/8"
        SR="2/3"
        XSC="2/6"
        XSR="2/3"
      >
        <Iframe
        src={GenieVideo}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen
       />
      </Video>
    </Section>
  )
}

export const query = graphql`
  fragment GenieDealerSection on ContentfulComponentSection{
    contentful_id
    name
    internalName
    content{
      ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          image {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              jpegProgressive: true
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              resizingBehavior: SCALE
              quality: 70
              cornerRadius: 10
            )
          }
        }
        ...on ContentfulComponentText{
          id 
          contentful_id
          internalName
          kicker
          headline
          text{
            raw
          }
        }
        ... on ContentfulComponentVideo {
          id
          contentful_id
          internalName
          title
          videoLink
        }
        ... on ContentfulComponentCta {
          id
          contentful_id
          internalName
          CtaText:text
          ctaLink
        } 
    }
  }
`
