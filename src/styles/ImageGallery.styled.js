import styled from 'styled-components';

export const ImageGalleryWrapper = styled.div` 
  grid-column: 2/14;
  grid-row: 1/2;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));  
  gap: 1em;
  position: relative;

  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-column: 2/10;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-column: 2/8;
    grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-column: 2/6;
    grid-template-columns: repeat(auto-fill, minmax(150px,1fr));
  }
`