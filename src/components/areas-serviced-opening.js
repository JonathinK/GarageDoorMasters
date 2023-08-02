import { graphql } from 'gatsby';
import React from 'react';
import { Headline, Section, TextWrapper } from '../styles';
import { TextBlockRender } from './text-block-render';

export const AreasServicedOpening = ({ section }) => {
  const TextRender = section.content.filter(
    (component) => 
      component.internalName === "Component: Areas Serviced Opening Text"
  )
  return(
    <Section SectionGrid AreasOpening
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      {TextRender.map((component) => {
        return(
          <TextWrapper key={component.contentful_id}
            XLC="2/7" LC="2/7" MC="2/10" SC="2/8" XSC="2/6"
            XLR="1/2" LR="1/2" MR="1/2"  SR="1/2" XSR="1/2"
          >
          <Headline>
            {component.headline}
          </Headline>
          <TextBlockRender content={component} TextValue='primary'/>
        </TextWrapper>
        ) 
      })}
    </Section>
  )
}

export const query = graphql`
  fragment AreasServicedOpeningContent on ContentfulComponentSection{
    internalName
    contentful_id
    content{
      ...on ContentfulComponentText{
      internalName
      contentful_id
      headline
      text{
        raw
      }
    }
    }
    
  }
`