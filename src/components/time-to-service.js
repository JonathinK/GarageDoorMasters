import React from 'react';
import { Section,TextWrapper, ImageWrapper, Headline, Kicker } from '../styles';
import { TextBlockRender, Symptoms } from '../components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export const TimeToService = ({section}) => {
  const TextRender = section.content.filter(
    (component) => 
    component.internalName === "Component: Time To Service Text"
  );
  const BackgroundImage = getImage(section.content.find(component => component.internalName === "Component: Time To Repair Background").repairImages);
  const JumpedCable = getImage(section.content.find(component => component.internalName === "Component: Jumped Cable Image").repairImages);
  const FrayedCable = getImage(section.content.find(component => component.internalName === "Component: Frayed Cable Image").repairImages);
  //Finds Repair Reasons Data
  const ReasonsList = section.content.find(component => component.internalName === 'Component: Reasons List');
  return(
    <Section SectionGrid TimeToService
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7" 
    > 
    {/*Background Image For Section*/}
      <ImageWrapper FullWidth
        className="no-blur"
        XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
        XLR="1/4" LR="1/4" MR="1/4" SR="1/3" XSR="1/3"
      >
        <GatsbyImage
          alt=""
          image={BackgroundImage}
          className="fullWidth colored-overlay"
          imgClassName='img-style'
        />
      </ImageWrapper>
      {/*Top Level Content That Sits Over The Background Image*/}{TextRender.map((component) => {
        return(
          <TextWrapper FlexCenter GridAlignCenter TextAlignCenter
            key={component.contentful_id}
            XLC="5/11" LC="4/12" MC="2/10" SC="2/8" XSC="2/6" 
            XLR="1/2"  LR="1/2" MR="1/2" SR="1/2" XSR="1/2"
          >
            <Kicker >{component.kicker}</Kicker>
            <Headline>{component.headline}</Headline>
            <TextBlockRender content={component} TextValue="primary"/>
          </TextWrapper>
        )
      })}
      <ImageWrapper SingleImage
        XLC="3/7" LC="4/8" MC="2/6" SC="2/5" XSC="2/4"
        XLR="2/3" LR="2/3" MR="2/3" SR="2/3" XSR="2/3"
      >
        <GatsbyImage
          image={JumpedCable}
          alt=""
          className="image-fit"
        />
      </ImageWrapper>
      <ImageWrapper SingleImage
        XLC="3/7" LC="8/12" MC="6/10" SC="5/8" XSC="4/6"
        XLR="3/4" LR="2/3" MR="2/3" SR="2/3" XSR="2/3"
      >
        <GatsbyImage
          image={FrayedCable}
          alt=""
          className='image-fit'
        />
      </ImageWrapper>
      <Symptoms
        XLargeCol="7/13"
        XLargeRow="2/4"
        LargeCol="4/12"
        LargeRow="3/4"
        MedCol="2/10"
        MedRow="3/4"
        SmallCol="2/8"
        SmallRow="3/4"
        XSmallCol="2/6"
        XSmallRow="3/4"
        data={ReasonsList}
        styleVariant="no-background"
      />
    </Section>
  )
}

export const query = graphql`
  fragment TimeToServiceContent on ContentfulComponentSection{
    internalName
    contentful_id
    content{
        ... on ContentfulComponentText{
          id 
          contentful_id
          internalName
          kicker
          headline
          text{
            raw
          }
        }
        ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          repairImages:image {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 50
              resizingBehavior: SCALE
            )
          }
        }
        ... on ContentfulComponentSymptoms {
          id
          contentful_id
          internalName
          symptomAnswerBlock {
            contentful_id
            internalName
            headline
            text {
              raw
            }
          }
        }
    }
  }
`
