import React from 'react';
import { graphql } from 'gatsby';
import { Headline,TextWrapper,Kicker,Section} from '../styles';
import { TextBlockRender } from './text-block-render';

export const ResidentialOpeningStatement = ({ section }) => {
  const RenderedTextComponent = section.content.filter(
    (component) => 
    component.internalName === 'Component: Opening Statement');
 
    return(
    <Section ResidentialServicesOpeningSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      {RenderedTextComponent.map((component) => {
        if(component.internalName === 'Component: Opening Statement'){
          return(
            <TextWrapper  
              XLC="4/12" LC="4/12" MC="2/10" SC="2/8" XSC="2/6"
              XLR="1/2" LR="1/2" MR="1/2" SR="1/2" XSR="1/2"
            >
              <Kicker Alternate>{component.kicker}</Kicker>
              <Headline HeadlineRed>{component.headline}</Headline>
              <TextBlockRender content={component}/>
            </TextWrapper>
          )
        }return null;
      })}
    </Section>
  )
}
export const query = graphql`
  fragment ResidentialOpeningSection on ContentfulComponentSection {
    contentful_id
    internalName
    name
    content{
      ...on ContentfulComponentText {
        id 
        internalName
        contentful_id
        kicker
        headline
        text{
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
        )
      }
    }
    }
  }
`