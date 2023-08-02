import React from 'react';
import { ReviewCard, ReviewStar } from '../styles';
import { TextBlockRender } from './text-block-render';

export const ReviewComponent = ({content}) => {
 
  const Stars = ({ rating }) => {
    if (rating === 5 ) {
      return (
        <div>
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
        </div>
      );
    } else {
      return null;
    }
  };
  
  return(
    <ReviewCard key={content.contentful_id}>
      <div className="top-container">
        <p>{content.reviewPlatform}</p>
        <div className="stars">
          <p>{content.reviewRating}</p>
          <Stars rating={content.reviewRating}/>
        </div>
      </div>
      <div className="review-author">
         <p>{content.reviewerName}</p>
      </div>
      <TextBlockRender content={content}/>
    </ReviewCard>
  )
}