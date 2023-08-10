import styled from 'styled-components';

export const ImageGalleryWrapper = styled.div` 
  grid-column: 2/14;
  grid-row: 1/2;
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  align-items: center;  
  gap: 1em;
  position: relative;

  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-column: 2/10;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-column: 2/8;
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-column: 2/6;
  }
`