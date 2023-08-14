import React from 'react';
import { graphql } from 'gatsby';
import { Headline, ImageWrapper, Kicker, ReviewCardWrapper, Section, SvgWrapper, TextWrapper, Button, ButtonLink } from '../styles'
import { ReviewComponent } from './review-card';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TextBlockRender } from './text-block-render';
import  PageWave from '../svg/assets/main-wave.svg';

export const HomepageReviews= ({section}) => {

  const FeatureReview = section.content.filter(  
    (component) => 
      component.internalName === "Component: Review"
  );

  const TextRender = section.content.filter(
    (component) => 
     component.internalName === "Landing Page: Reviews Text" ||
     component.internalName === "Landing Page: Reviews Cta"
  );

  const ReviewsImage = getImage(section.content.find(component => component.internalName === "Component: Landing Reviews Image").reviewImage);
  
  return(
    <Section HomepageReviews
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
    <SvgWrapper
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
      XLR="1/2" LR="1/2" MR="1/2" SR="1/2" XSR="1/2"
    >
      <PageWave/>
    </SvgWrapper>
    <ImageWrapper 
      SingleImage
      XLC="2/8" LC="2/8" MC="2/6" SC="2/8" XSC="2/6"
      XLR="2/3" LR="2/3" MR="2/3" SR="2/3" XSR="2/3"
    >
      <GatsbyImage 
        image={ReviewsImage}
        className="image-fit"
        alt="Happy Couple Excited"
        loading='lazy'
      />
    </ImageWrapper>
    {TextRender.map((component) => {
      return(
        <React.Fragment key={component.contentful_id}>
        {component.internalName === "Landing Page: Reviews Text" && (
          <TextWrapper 
            ServiceText
            GridAlignCenter
            key={component.contentful_id}
            XLC="9/14" LC="9/14" MC="6/10" SC="2/8" XSC="2/6"
            XLR="2/3" LR="2/3" MR="2/3"  SR="3/4" XSR="3/4"
          >
          <Kicker>
            {component.kicker}
          </Kicker>
          <Headline>{component.headline}</Headline>
          <TextBlockRender content={component} TextValue="primary"/>
          {TextRender.find(
            (item) => item.internalName === "Landing Page: Reviews Cta"
          ) && (
            <Button 
              as="button"
              primary="true"
              key={component.contentful_id}
              >
              <ButtonLink
              primary="true"
                to={
                  TextRender.find(
                    (item) => item.internalName === "Landing Page: Reviews Cta"
                  ).ctaLink
                }
              >
                {
                  TextRender.find(
                    (item) => item.internalName === "Landing Page: Reviews Cta"
                  ).ctaText
                }
              </ButtonLink>
            </Button>
          )}
        </TextWrapper> 
        )}  
        </React.Fragment>  
      )
    })}
    <ReviewCardWrapper HomePageReview>
        {FeatureReview.map((review,index) => (
          <ReviewComponent content={review} key={index}/>
        ))}
    </ReviewCardWrapper>
    </Section>
  )
}
export const query = graphql`
  fragment SocialProof on ContentfulComponentSection {
    contentful_id
    internalName
    content {
      ... on ContentfulReview {
        contentful_id
        internalName
        reviewPlatform
        reviewRating
        title
        reviewerName
        text:reviewText {
          raw
        }
      }
      ... on ContentfulComponentImage {
          id
          contentful_id
          internalName
          reviewImage: image {
            contentful_id
            gatsbyImageData(
              cropFocus: TOP
              jpegProgressive: false
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 60
              resizingBehavior: SCALE
            )
          }
        }
        ... on ContentfulComponentText {
          id
          internalName
          kicker
          headline
          text {
            raw
          }
        }
      ... on ContentfulComponentCta{
        id 
        internalName
        ctaText:text
        ctaLink
      }
    }
  }
`