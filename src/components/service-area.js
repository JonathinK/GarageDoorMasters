import React from 'react';
import { Headline, ImageWrapper, ListItem, ListWrapper, Section, TextWrapper } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export const ServiceAreas = ({ section }) => {
  /* Images Finder Variable */
  const OceanCountyImage = getImage(section.content.find(component => component.internalName === "Component: Ocean County Image").countyImage);
  const MonmouthCountyImage = getImage(section.content.find(component => component.internalName === "Component: Monmouth County Image").countyImage);
  /* Headline Variable Filter */
  const OceanCountyTitle = section.content.filter(
    (component) => component.internalName === "Component: Ocean County List"
  );
  const MonmouthCountyTitle = section.content.filter(
    (component) => component.internalName === "Component: Monmouth County List"
  );
  /* List Items Filter */
  const OceanCountyList = section.content.filter(
    (component) => component.internalName === "Component: Ocean County List"
  )[0].listItems;  
  const MonmouthCountyList = section.content.filter(
    (component) => component.internalName === "Component: Monmouth County List"
  )[0].listItems;
  
  return(
    <Section SectionGrid ServiceAreas 
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
    {/* Ocean County */}
      <ImageWrapper
        AreasImage
        XLC="2/14"
        XLR="1/2"
        LC="2/14"
        LR="1/2"
        MC="2/10"
        MR="1/2"
        SC="2/8"
        SR="1/2"
        XSC="2/6"
        XSR="1/2"
      >
        <GatsbyImage
          image={OceanCountyImage}
          alt=""
          className='image-fit'
        />
      </ImageWrapper>
      <TextWrapper
        CountyList
        XLC=" 2/14"
        XLR="2/3"
        LC=" 2/14"
        LR="2/3"
        MC="2/10"
        MR="2/3"
        SC="2/8"
        SR="2/3"
        XSC="2/6"
        XSR="2/3"
      >
        {OceanCountyTitle.map((title,index) => {
          const countyTitle = title.title;
          return (
            <Headline 
            HeadlineRed
            key={index}
            >
            {countyTitle}
            </Headline>
          )
        })}
        <ListWrapper>
          {OceanCountyList.map((item) => {
            return(
              <ListItem key={item}>
                {item}
              </ListItem>
            )
          })}
        </ListWrapper>
      </TextWrapper>

      {/* Monmouth County */}
      <ImageWrapper
        AreasImage
        className='alternate'
        XLC="2/14" 
        XLR="3/4"
        LC="2/14" 
        LR="3/4"
        MC="2/10"
        MR="3/4"
        SC="2/8"
        SR="3/4"
        XSC="2/6"
        XSR="3/4"
      >
        <GatsbyImage
          image={MonmouthCountyImage}
          alt=""
          className='image-fit'
        />
      </ImageWrapper>
      <TextWrapper
        CountyList
        XLC=" 2/14"
        XLR="4/5"
        LC=" 2/14"
        LR="4/5"
        MC="2/10"
        MR="4/5"
        SC="2/8"
        SR="4/5"
        XSC="2/6"
        XSR="4/5"
      >
        {MonmouthCountyTitle.map((title,index) => {
          const countyTitle = title.title;
          return (
            <Headline 
            HeadlineRed
            key={index}
            >
            {countyTitle}
            </Headline>
          )
        })}
        <ListWrapper>
          {MonmouthCountyList.map((item) => {
            return(
              <ListItem key={item}>
                {item}
              </ListItem>
            )
          })}
        </ListWrapper>
      </TextWrapper>
       
    </Section>
  )
}
export const query = graphql`
  fragment Counties on ContentfulComponentSection{
    internalName
    contentful_id
    content{
      
      ... on ContentfulComponentList {
          id
          contentful_id
          internalName
          title
          listItems
        }
        ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          countyImage:image {
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