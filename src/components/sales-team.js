import React from 'react';
import { graphql } from 'gatsby';
import { Headline, Section, TextWrapper } from '../styles';
import { DoorBuilder } from '.';
import { TextBlockRender } from './text-block-render';

export const SalesTeam = ({ section }) => {
  const TextRender = section.content.filter(
    (component) => component.internalName === 'Component: Sales Team Text'
  );
  const DoorBuilderTitle = section.content.filter(
    (component) => 
      component.internalName === 'Component: Build Your Door Text'
      
  );
  const DoorBuilderContent = section.content.filter(
    (component) => 
      component.internalName === 'Component: Haas Door Builder'||
      component.internalName === 'Component: Amarr Door Builder'||
      component.internalName === 'Component: Raynor Door Builder'||
      component.internalName === 'Component: Clopay Door Builder'
  );
  return(
    <Section SalesTeam SectionGrid
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7" 
    >
      {TextRender.map((component) => {
        return(
          <TextWrapper key={component.contentful_id}
            TextAlignCenter
            XLC='5/11' LC="4/12" MC="2/10" SC="2/8" XSC="2/6"
            XLR='1/2'  LR="1/2"  MR="1/2"  SR="1/2" XSR="1/2"
          >
            <Headline>{component.headline}</Headline>
            <TextBlockRender content={component} TextValue="primary"/>
          </TextWrapper>
        )
      })}
     {DoorBuilderTitle.map((component) => {
      return(
        <TextWrapper key={component.contentful_id}
          XLC="5/11" LC="4/12" MC="2/10" SC="2/8" XSC="2/6"
          XLR="2/3"  LR="2/3"  MR="2/3" SR="2/3" XSR="2/3"
          TextAlignCenter
          FlexCenter
        >
          <Headline>{component.headline}</Headline>
        </TextWrapper>
      )
     })}
        <DoorBuilder content={DoorBuilderContent}/>
    </Section>
  )
}

export const query = graphql`
  fragment SalesTeam on ContentfulComponentSection {
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
          builderImage: image {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 50
              resizingBehavior: SCALE
              formats: [WEBP,AUTO]
            )
          }
        }
    }
    
  }
`