import React from 'react';
import { Headline, Section, TextWrapper, ExternalLink } from '../styles';
import { graphql } from 'gatsby';
import { TextBlockRender } from './text-block-render';

export const ReviewsPanel = ({section}) => {
  return(
    <Section SectionGrid Reviews
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      {section.content.map((component) => {
        return(
          <TextWrapper 
            key={component.contentful_id}
            XLC="4/12" LC="4/12" MC="2/10" SC="2/8" XSC="2/6" 
            GridAlignCenter
            FlexCenter
            TextAlignCenter
          >
            <Headline>{component.headline}</Headline>  
            <TextBlockRender content={component} TextValue="primary"/>
            <div className="Button-Flex-Wrapper">
                <ExternalLink 
                  href="https://www.google.com/search?q=Garage+Door+Masters+LLC,+Brick,+NJ&amp;ludocid=17006289284884916486#lrd=0x89c183dc3f7acdb1:0xec027a005d18e906,3"
                  ButtonLink
                  >
                  Review us on Google
                </ExternalLink>
                <ExternalLink 
                  href='https://www.facebook.com/GarageDoorMastersNJ/'
                  ButtonLink
                >
                  Review us on Facebook
                </ExternalLink>
            </div>
          </TextWrapper>
        )
      })}
    </Section>
  )
}

export const query = graphql`
  fragment ReviewsPanel on ContentfulComponentSection {
    contentful_id
    internalName
    content {
      ... on ContentfulComponentText {
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