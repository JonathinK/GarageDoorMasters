import React, {useState} from 'react';
import { ImageGalleryWrapper, ImageWrapper, Section,Button, PaginationWrapper } from '../styles';
import { graphql } from 'gatsby';
import { GatsbyImage,getImage} from 'gatsby-plugin-image';
import { Lightbox } from './lightbox';

export const GalleryComponent = ({ section, page }) => {
  // State Management and Image Limit per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerPage = 12;
  // Render Filter For Gallery Image
  const GalleryRender = section.content.find(
    (gallery) =>
      gallery.internalName === 'Component: Door Gallery'
  );
  // If statement to return null if there is no Gallery
  if (!GalleryRender) {
    return null;
  }
  // Variable for images within gallery
  const images = GalleryRender.imagesGallery;
  // Pagination Logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.documentElement.style.overflow = 'hidden';
  }
  const handleCloseModal = () => {
    setSelectedImage(null);
    document.documentElement.style.overflow = 'auto';
  }
  return (
    <Section
      GallerySection
      SectionGrid
      XLC="1/15"
      LC="1/15"
      MC="1/11"
      SC="1/9"
      XSC="1/7"
    >
      <ImageGalleryWrapper>
        {currentImages.map((image, index) => {
          const imgData = getImage(image);
          return (
            <ImageWrapper
              GalleryImage
              key={image.contentful_id}
              index={index}
              hide={index < indexOfFirstImage || index >= indexOfLastImage}
              onClick={() => handleImageClick(image)}
            >
              <GatsbyImage image={imgData} alt="" className="image" loading='eager' />
            </ImageWrapper>
          );
        })}
      </ImageGalleryWrapper>
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={images.length}
        paginate={paginate}
        currentPage={currentPage}
      />
       <Lightbox
          selectedImage={selectedImage}
          closeModal={handleCloseModal}
        />
    </Section>
  );
};

const Pagination = ({ imagesPerPage, totalImages, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper className="pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <Button
            onClick={() => paginate(number)}
            disabled={currentPage === number}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </Button>
        </li>
      ))}
    </PaginationWrapper>
  );
};


export const query = graphql`
fragment ImageGallery on ContentfulComponentSection{
  contentful_id
  internalName
  content{
    ... on ContentfulComponentGallery {
          id
          contentful_id
          internalName
          imagesGallery {
            contentful_id
            gatsbyImageData(
              cropFocus: CENTER
              jpegProgressive: true
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
              quality: 60
              resizingBehavior: SCALE
              formats: [WEBP,AUTO]
            )
          }
        }
    ... on ContentfulComponentText{
      contentful_id
      internalName
      headline
      text{
        raw
      }
    }
  }
}
`