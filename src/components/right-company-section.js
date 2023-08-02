import React from 'react';
import { graphql } from 'gatsby';
import { CardsWrapper, Section, TextWrapper, Headline, Kicker, SvgWrapper } from '../styles';
import { WhyChooseFeature } from './feature-card';
import { TextBlockRender } from './text-block-render';
import PageSvg from '../svg/assets/main-wave.svg';

export const RightCompanySection = ({ section, isHomepage }) => {

const Cards = section.content.filter(
  (item) => item.internalName.endsWith('Card')
);

return(
  <Section RightCompany
    XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    className={isHomepage ? 'homepage':'about-us'}
  >
  <SvgWrapper
    XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    XLR="1/2" LR="1/2" MR="1/2" SR="1/2" XSR="1/2"
    className={isHomepage ? 'color-change-top' : 'color-change-top flip'}
  >
    <PageSvg/>
  </SvgWrapper>
  {section.content.map((component) => {
    if(component.internalName === "Right company text") {
      return(
        <TextWrapper 
          XLC="5/11" LC="5/11" MC="2/10" SC="2/8" XSC="2/6"
          XLR="2/3" LR="2/3" MR="2/3" SR="2/3" XSR="2/3"
          GridAlignCenter
          TextAlignCenter
          FlexCenter
          key={component.contentful_id}
        >
          <Kicker
            Alternate
            className={isHomepage ? '' : 'color-change'}
          >
              {component.kicker}
            </Kicker>
          <Headline 
            HeadlineRed 
            FeatureHeadline
            className={isHomepage ? '' : 'color-change'} 
          >
            {component.headline}
          </Headline>
          <TextBlockRender TextValue={isHomepage ? '' : 'primary'} content={component}/>
        </TextWrapper>
      )
    }
    return null;
  })}
   <CardsWrapper FeatureWrapper>
    {Cards.map((card) => (
      <WhyChooseFeature
        key={card.contentful_id}
        data={card}
        isHomepage={isHomepage}
      />
    ))}
   </CardsWrapper>
  </Section>
 )
}

export const query = graphql`
  fragment RightCompanySection on ContentfulComponentSection {
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
      ... on ContentfulComponentCard {
        contentful_id
        internalName
        title
        text{
          raw
        }
      }
    }
  }
`