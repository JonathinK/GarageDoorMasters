import React, {useState} from 'react';
import { Headline, ImageGalleryWrapper, ImageWrapper, Section, TextWrapper } from '../styles';
import { graphql } from 'gatsby';
import { TextBlockRender } from './text-block-render';
import { GatsbyImage,getImage} from 'gatsby-plugin-image';

export const GalleryComponent = ({ section }) => {
  /*Filter For Gallery Text*/
  const TextRender = section.content.filter(
    (component) => component.internalName === "Component: Gallery Text"
    );
  /*Render Filter For Gallery Images*/
  const GalleryRender = section.content.find(
    gallery =>
      gallery.internalName === "Component: Door Gallery"
  );
  /*If statement to return null if there is no Gallery*/
  if(!GalleryRender) {
    return null;
  }
  /*Variable for images withing gallery*/
  const images = GalleryRender.imagesGallery;

 
  return(
    <Section GallerySection SectionGrid
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      <ImageGalleryWrapper>
       {images.map((image)=> {
          const imgData = getImage(image);
            return(
              <ImageWrapper GalleryImage
                key={image.contentful_id}
              >
              <GatsbyImage
                image={imgData}
                alt=""
                className='image'
              />
            </ImageWrapper>
            )
       })}
      </ImageGalleryWrapper>
    </Section>
  )
}
export const query = graphql`
fragment ImageGallery on ContentfulComponentSection{
  contentful_id
  internalName
  content{
    ... on ContentfulComponentGallery {
          id
          contentful_id
          internalName
          imagesGallery {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              jpegProgressive: true
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 60
              resizingBehavior: SCALE
            )
          }
        }
    ... on ContentfulComponentText{
      contentful_id
      internalName
      headline
      text{
        raw
      }
    }
  }
}
`