import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage} from 'gatsby-plugin-image';
import { ProductsWrapper, Product, Section } from '../styles';



export const ProductsList = ({ section }) => {
  const images = section.content[0].imagesGallery;
  return(
    <Section Products
      XLC="1/15"
      LC="1/15"
      MC="1/11"
      SC="1/9"
      XSC="1/7"
    >
      <ProductsWrapper
        ProductSlide
        XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
        XLR="1/2"  LR="1/2"  MR="1/2"  SR="1/2" XSR="1/2"
      >
      <div className="slide-container">
        {images.map((image) => (
          <Product 
            key={image.contentful_id}
            ProductFixed
          >
            <GatsbyImage
              className='image-container' 
              imgClassName='product-image'
              image={getImage(image)}
              alt=""
            />
          </Product>
        ))}
        </div>
        <div className="slide-container">
        {images.map((image) => (
          <Product 
            key={image.contentful_id}
            ProductFixed
          >
            <GatsbyImage
              className='image-container' 
              imgClassName='product-image'
              image={getImage(image)}
              alt=""
              loading='eager'
            />
          </Product>
        ))}
      </div>    
      </ProductsWrapper>
    </Section>
  )
}

export const query = graphql`
  fragment ProductsList on ContentfulComponentSection{
    contentful_id
    name
    content{
      ... on ContentfulComponentText {
        contentful_id
        title
        text{
          raw
        }
      }
      ... on ContentfulComponentGallery {
        id
        internalName
        contentful_id
        imagesGallery {
          contentful_id
          id
          gatsbyImageData(
            quality: 50
            placeholder: BLURRED
            layout: FULL_WIDTH
            resizingBehavior: SCALE
            aspectRatio: 3
          )
        }
      }
    }
  }
`