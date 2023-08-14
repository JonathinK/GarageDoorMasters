import React from 'react';
import { getImage,GatsbyImage } from 'gatsby-plugin-image';
import { Section, HeroImage, TextWrapper, Kicker, PageTitle, Button, ButtonLink } from '../styles';
import { TextBlockRender } from './text-block-render';

export const Hero = ({ data }) => {
  const background = getImage(data.backgroundImage.gatsbyImageData);
  return(
    <Section HeroSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      <HeroImage HeroBackground>
        <GatsbyImage 
          image={background}
          alt=""
          className='background-fit'
          loading='eager'
        />
      </HeroImage>
      <TextWrapper HeroText
        XLC="1/2" XLR="1/2" LC="1/2" LR="1/2" MC="1/2" MR="1/2" SC="1/2" SR="1/2" XSC="1/2" XSR="1/2"
      >
      {data.kicker && <Kicker>{data.kicker}</Kicker>}
      {data.title && <PageTitle>{data.title}</PageTitle>}
      {data && <TextBlockRender content={data} TextValue="primary"/>}
      {data.ctaBlock.map((component) => 
        <Button primary="true" key={component.contentful_id}>
          <ButtonLink primary="true" to={component.ctaLink}>{component.text}</ButtonLink>
        </Button>
      )}
      </TextWrapper>
    </Section>
  )
}