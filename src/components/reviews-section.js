import React, {useState} from 'react';
import { Section, ReviewCardWrapper, Button } from '../styles';
import { graphql } from 'gatsby';
import { ReviewComponent } from './review-card';

export const ReviewsContent = ({ section }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const Reviews = section.content;
  const reviewsPerPage = 3; // Number of reviews to show per page

  // Calculate the index of the first and last review for the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = Reviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Section ReviewSection SectionGrid XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7">
      <ReviewCardWrapper>
        {currentReviews.map((review) => {
          return (
            <ReviewComponent 
              content={review} 
              key={review.contentful_id}
            />
          )
        })}
        <Pagination
        reviewsPerPage={reviewsPerPage}
        totalReviews={Reviews.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      </ReviewCardWrapper>
    </Section>
  );
}

const Pagination = ({ reviewsPerPage, totalReviews, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number,index) => (
        <li key={index}>
          <Button 
            onClick={() => paginate(number)} 
            disabled={currentPage === number}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </Button>
        </li>
      ))}
    </ul>
  );
};
export const query = graphql`
  fragment ReviewsContent on ContentfulComponentSection {
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
    }
  }
`