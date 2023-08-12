import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { LightboxContainer, LightBox, LightBoxImage, Close} from '../styles';

export const Lightbox = ({selectedImage, closeModal}) => {
  return(
    <LightboxContainer>
      {selectedImage !== null && (
        <LightboxModal
          image={selectedImage.gatsbyImageData}
          closeModal={closeModal}
        />
      )}
    </LightboxContainer>
  )
}

const LightboxModal = ({image, closeModal}) => {
  return(
    <LightBox>
      <LightBoxImage className="lightbox-image">
        <GatsbyImage
          image={image}
          alt=""
          style={{
            position:'absolute',
            width:'100%',
            height:'80%',
          }}
          imgStyle={{
            objectFit: 'contain'
          }}
        />
      </LightBoxImage>
      <Close onClick={closeModal}>
        <div/>
        <div/>
      </Close>
    </LightBox>
  )
}