import React from 'react';
import { ImageWrapper, Section, TextWrapper, Headline, Kicker } from '../styles';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';
import { graphql } from 'gatsby';

export const OpenerServices = ({ section }) => {
  const OpenerRepairImage = section.content.find(
    component => component.internalName === "Component: Opener Fix Image"
  )?.openerRepairImage;
  const RepairTextRender = section.content.filter(
    (component) => component.internalName === "Component: Opener Service Text"
  );
  return(
    <Section SectionGrid OpenerRepair
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
       <ImageWrapper
        SingleImage
        XLC="8/14"
        XLR="1/2"
        LC="8/14"
        LR="1/2"
        MC="2/10"
        MR="2/3"
        SC="2/8"
        SR="2/3"
        XSC="2/6"
        XSR="2/3"
       >
       
          {OpenerRepairImage ? (
            // eslint-disable-next-line react/prop-types
          <GatsbyImage 
            image={getImage(OpenerRepairImage)}
            alt=""
            className="image-fit"
          />
          ): null}
       </ImageWrapper>
       {RepairTextRender.map((component) => {
        return(
          <TextWrapper 
            key={component.contentful_id}
            OpenerRepairText
            XLC="2/8"
            XLR="1/2"
            LC="2/8"
            LR="1/2"
            MC="2/10"
            MR="1/2"
            SC="2/8"
            SR="1/2"
            XSC="2/6"
            XSR="1/2"
          >
            <Kicker Alternate>{component.kicker}</Kicker>
            <Headline HeadlineRed>{component.headline}</Headline>
            <TextBlockRender content={component}/>
          </TextWrapper>
        )
       })}
    </Section>
  )
}

export const query = graphql`
  fragment OpenerServicesContent on ContentfulComponentSection {
    contentful_id
    internalName
    content{
      ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          openerRepairImage:image {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              jpegProgressive: true
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              resizingBehavior: SCALE
              quality: 100
            )
          }
        }
        ...on ContentfulComponentText { 
          contentful_id
          internalName
          kicker
          headline
          text{
            raw
          }
        }
    }
  }
`