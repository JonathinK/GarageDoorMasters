import React from 'react';
import { Headline, ImageWrapper, Kicker, SpringCard, SubTitle, TextWrapper } from '../styles';
import { TextBlockRender } from './text-block-render';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const SpringsCard = ({ content }) => {
  const Extension = content.internalName === "Component: Extension Spring System Card";
  const Torsion = content.internalName === "Component: Torsion System Card";
  
  return(
    <SpringCard>
      <TextWrapper SpringCardText>
        <Kicker Alternate>{content.kicker}</Kicker>
        <SubTitle SpringSub>{content.title}</SubTitle>
        <TextBlockRender content={content}/>
      </TextWrapper>
      <ImageWrapper SpringCardImage>
        {Extension && (
          <GatsbyImage image={getImage(content.image)} className='extension'/>
        )}
        {Torsion && (
          <GatsbyImage image={getImage(content.image)} className='torsion'/>
        )}
      </ImageWrapper>
    </SpringCard>
  )
}