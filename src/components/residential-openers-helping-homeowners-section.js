import React from 'react';
import { Headline, Product, ProductsWrapper, Section, TextWrapper } from '../styles';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';

export const HelpingHomeownersSection = ({section}) => {
  const BrandImages = section.content.find(component => component.internalName === 'Component: Opener Brands').imagesGallery;

  const RenderedText = section.content.filter(
    (component) => 
      component.internalName === "Component: Helping homeowners text"
  );
  return(
    <Section HelpingHomeownersSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      {RenderedText.map((render) => {
        return(
          <TextWrapper key={render.contentful_id}
            XLC="4/12"
            XLR="1/2"
            LC="4/12"
            LR="1/2"
            MC="2/10"
            MR="1/2"
            SC="2/8"
            SR="1/2"
            XSC="2/6"
            XSR="1/2"
            TextAlignCenter
          >
            <Headline HeadlineRed>{render.headline}</Headline>
            <TextBlockRender content={render}/>
          </TextWrapper>
        )
      })}
        <ProductsWrapper OpenersPage
          XLC="2/14"
          XLR="2/3"
          LC="2/14"
          LR="2/3"
          MC="2/10"
          MR="2/3"
          SC="2/8"
          SR="2/3"
          XSC="2/6"
          XSR="2/3"
        >
          {BrandImages.map((brand) => {
            return(
              <Product key={brand.contentful_id} OpenerBrands>
                <GatsbyImage 
                  image={getImage(brand)}
                  alt="Opener Brands"
                  loading='eager'
                />
              </Product>
            )
          })}
        </ProductsWrapper>
    </Section>
  )
}

export const query = graphql`
  fragment HelpingHomeowners on ContentfulComponentSection {
    id
    internalName
    contentful_id
    content{
      ...on ContentfulComponentText{
        id
        contentful_id
        internalName
        kicker
        headline
        text {
          raw
        } 
      }
      ... on ContentfulComponentGallery {
          id
          contentful_id
          internalName
          imagesGallery {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              jpegProgressive: true
              layout: CONSTRAINED
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 70
              resizingBehavior: SCALE
              formats: [WEBP,AUTO]
            )
          }
        }
    }
  }
`