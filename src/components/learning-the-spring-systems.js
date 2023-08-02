import React from 'react';
import { ImageWrapper, Kicker, Section, TextWrapper, Headline, CardsWrapper } from '../styles';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';
import { SpringsCard } from './spring-card';


export const ResidentialLearningTheSystem = ({ section }) => {
  const BackgroundImage = getImage(section.content.find(bgImg => bgImg.internalName === "Component: Spring Systems Background").Images);
  const RenderedComponents = section.content.filter(
    (component) => 
      component.internalName === "Component: Learning The Systems Text"
  );
  const RenderedCards = section.content.filter(
    (card) => 
      card.internalName === "Component: Extension Spring System Card" ||
      card.internalName === "Component: Torsion System Card"
  );
  return(
    <Section SectionGrid ResidentialLearningTheSystem
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      <ImageWrapper FullWidth LearningTheSystemsBackground
        XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"  
        XLR="1/3"  LR="1/3"  MR="1/3"  SR="1/3" XSR="1/2"
      >
        <GatsbyImage image={BackgroundImage} className='fullWidth' alt=""/>
      </ImageWrapper>
      {RenderedComponents.map((component) => {
        return(
          <TextWrapper
            XLC="4/12" LC="4/12" MC="2/10" SC="2/8" XSC="2/6"
            XLR="1/2"  LR="1/2"  MR="1/2"  SR="1/2" XSR="1/2"
            TextAlignCenter
            FlexCenter
          >
            <Kicker>{component.kicker}</Kicker>
            <Headline>{component.headline}</Headline>
            <TextBlockRender content={component} TextValue="primary"/>
          </TextWrapper>
        )
      })}
     <CardsWrapper SpringsCardWrapper>
        {RenderedCards.map((content) => {
          return <SpringsCard content={content} key={content.contentful_id}/>
        })}
     </CardsWrapper>
    </Section>
  )
}
export const query = graphql`
  fragment ResidentialLearningTheSpringSystem on ContentfulComponentSection {
    id
    contentful_id
    internalName
    content{
      ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          Images: image {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              jpegProgressive: false
              layout: FULL_WIDTH
              outputPixelDensities: 2
              placeholder: BLURRED
              quality: 100
              resizingBehavior: SCALE
            )
          }
        }
        ... on ContentfulComponentText {
          id
          internalName
          headline
          text {
            raw
          }
        }
        ...on ContentfulComponentCard {
          id
          contentful_id
          kicker
          internalName
          title
          text {
            raw
          }
          image{
            contentful_id
            gatsbyImageData(
              cropFocus: TOP
              jpegProgressive: false
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