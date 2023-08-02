import React from 'react' 
import { Section, TextWrapper, Headline, ImageWrapper, SvgWrapper } from '../styles';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PanelCurve from '../svg/assets/main-wave.svg';

export const ImagesPanel = ({ section }) => {
  const Image_1 = getImage(section.content.find(image => image.internalName === "Component: Image-1").panelImages);
  const Image_2 = getImage(section.content.find(image => image.internalName === "Component: Image-2").panelImages);
  const Image_3= getImage(section.content.find(image => image.internalName === "Component: Image-3").panelImages);
  const TextRender = section.content.filter(
    (component) => 
      component.internalName === "Component: Panel Title"
  );
  return(
    <Section ImagesPanel
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    > 
      <SvgWrapper 
      PanelImagesSvg
      className="flip color-change-top"
        XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
        XLR="2/4"  LR="2/4"  MR="2/4"  SR="4/6"  XSR="4/6"  
      >
        <PanelCurve/>
      </SvgWrapper>
      {TextRender.map((component) => {
        return(
          <TextWrapper key={component.contentful_id}
            XLC=" 2/14" LC="2/14" MC="2/10" SC="2/8" XSC="2/6"
            XLR=" 1/2"  LR="1/2"  MR="1/2"  SR="1/2"  XSR="1/2"
            GridAlignCenter
            TextAlignCenter
          >
            <Headline HeadlineMedium>{component.headline}</Headline>
          </TextWrapper>
        )
      })}
      <ImageWrapper 
        ImagePanelSmall
        className="left-image"
        XLC="2/6" LC="2/6" MC="2/5" SC="1/5" XSC="1/4"
        XLR="2/3" LR="2/3" MR="2/3" SR="2/3" XSR="2/3"
      >
        <GatsbyImage image={Image_1} className='image-fit' alt=""/>
      </ImageWrapper> 
      <ImageWrapper 
        ImagePanelSmall
        className="right-image"
        XLC="10/14" LC="10/14" MC="7/10" SC="5/9" XSC="4/7"
        XLR="2/3"   LR="2/3"   MR="2/3"  SR="4/5" XSR="4/5" 
      >
        <GatsbyImage image={Image_3} className='image-fit' alt=""/>
      </ImageWrapper>
      <ImageWrapper ImagePanelLarge
        XLC="5/11" LC="5/11" MC="4/8" SC="2/8" XSC="2/6"
        XLR="2/3"  LR="2/3"  MR="2/3" SR="3/4" XSR="3/4"
      >
        <GatsbyImage image={Image_2} className='image-fit' alt=""/>
      </ImageWrapper> 
     
    </Section>
  )
}
export const query = graphql`
  fragment ImagesPanel on ContentfulComponentSection {
    contentful_id
    internalName
    content{
      ...on ContentfulComponentText {
        internalName
        contentful_id
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
          panelImages: image {
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
    }
  }
`