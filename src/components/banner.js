import React from 'react';
import { PageTitle, BannerContainer, BannerImage, BannerTitleBlock } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Banner = ({ data, inputValue }) => {
 
  const BackgroundImage = data.backgroundImage;
  return(
    <BannerContainer>
      <BannerImage variant={inputValue}>
        <GatsbyImage 
        image={getImage(BackgroundImage)} 
        className="image-fit" 
        alt=""
        loading="eager"
        />
      </BannerImage>
      <BannerTitleBlock>
        {data.title && <PageTitle>{data.title}</PageTitle>}
      </BannerTitleBlock>
    </BannerContainer>
  )
}