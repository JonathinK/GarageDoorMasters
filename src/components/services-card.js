import React from 'react';
import {ImageWrapper, SubTitle, ServiceCard, SvgWrapper, TextWrapper } from '../styles';
import { TextBlockRender } from './text-block-render';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import  Cog  from '../svg/assets/cog.svg';
import  Installation  from '../svg/assets/installation.svg';
import  Repair from '../svg/assets/repair.svg';
import  Opener  from '../svg/assets/opener.svg';

export const ServicesCard = ({ content, cardIcon }) => {
  let iconSwitch;
  if (content.internalName === 'Landing Page: Services Installation Card') {
    iconSwitch = <Installation/>;
  } else if (content.internalName === 'Landing Page: Services Garage Door Repair Card') {
    iconSwitch = <Repair/>;
  } else if (content.internalName === 'Landing Page: Services Garage Door Opener Card') {
    iconSwitch = <Opener/>;
  } else if (content.internalName === 'Component: Garage Door Maintenance Card') {
    iconSwitch = <Cog/>;
  } else {
    // Set a default icon or handle the case when no matching internalName is found
    iconSwitch = null;
  }
  return(
    <ServiceCard ServicesCard>
      {cardIcon ? (
        <SvgWrapper CardIcon>
          {iconSwitch}
        </SvgWrapper>
      ) : (
        <ImageWrapper ServiceImage>
          <GatsbyImage
            image={getImage(content.image)}
            alt=""
            className="image-fit"
          />
        </ImageWrapper>
      )}
      <TextWrapper ServicesCard>
        <SubTitle ServiceCardSub>{content.title}</SubTitle>
        <TextBlockRender content={content} TextValue="primary" />
      </TextWrapper>
    </ServiceCard> 
  )
}
