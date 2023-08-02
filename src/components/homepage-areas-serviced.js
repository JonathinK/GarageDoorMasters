import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { MARKS } from '@contentful/rich-text-types';
import React from 'react';
import { Flex, Headline, Kicker, Section, SectionTitle, Text, BoldStyle, ItalicStyle, ImageContainer, Button, InternalLink } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const AreasServiced = ({ section }) => {
  const sectionContent = section.content;
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <BoldStyle>{text}</BoldStyle>,
      [MARKS.ITALIC]: text => <ItalicStyle>{text}</ItalicStyle>,
    },
  } 
  return(
    <Section>
      {sectionContent.map((component) => {
        const richText = component.text;
        const areasBackground = getImage(component.image);
        return(
          <>
            <Flex>
              <Kicker>{component.kicker}</Kicker>
              <SectionTitle>{component.title}</SectionTitle>
              <Headline>{component.headline}</Headline>
              <Text>{richText && renderRichText(richText,options)}</Text>
              {component.ctaLink === "service-areas" && 
                <Button primary>
                  <InternalLink ButtonLink to={component.ctaLink}>
                  {component.ctaText}
                  </InternalLink>
                </Button>
              }
            </Flex>
            {component.internalName === "Landing Page: Areas we service - Background" &&
            <ImageContainer>
              <GatsbyImage image={areasBackground}/>
            </ImageContainer>
          }
          </>
        )
      })}
    </Section>
  )    
}

export const query = graphql`
  fragment AreasServiced on ContentfulComponentSection {
    contentful_id
    name
    content{
      ... on ContentfulComponentText{
      kicker
      title
      headline
      text{
        raw
      }  
      }
      ... on ContentfulComponentImage{
        internalName
        image{
          gatsbyImageData(
            aspectRatio: 1.5
            cropFocus: CENTER
            layout: FULL_WIDTH
            quality: 60
            placeholder: BLURRED
            resizingBehavior: SCALE
          )
        }
      }
      ...on ContentfulComponentCta{
        id
        ctaText:text
        ctaLink
      } 
    }
  }
`