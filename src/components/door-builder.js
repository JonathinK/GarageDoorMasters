import React from 'react';
import { ExternalLink, ImageWrapper, ProductsWrapper} from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const DoorBuilder = ({ content }) => {
  return(
    <ProductsWrapper DoorBuilder
      XLC="2/14" LC="2/14" MC="2/10" SC="2/8" XSC="2/6"
      XLR="3/4"  LR="3/4"  MR="3/4" SR="3/4" XSR="3/4"
    >
      {content.map((builder) => {
        return(
          <ImageWrapper key={builder.contentful_id} BuilderImage>
            <ExternalLink 
              href={builder.slug}
              BuilderLink
              >
              <GatsbyImage 
                image={getImage(builder.builderImage)}
                alt=""
                className="image"
                />
            </ExternalLink>
          </ImageWrapper>
        )
      })}
    </ProductsWrapper>
  )
}