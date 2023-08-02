import styled from 'styled-components';

export const ImageGalleryWrapper = styled.div` 
  grid-column: 2/14;
  grid-row: 2/3;
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  align-items: center;  
  gap: 1em;
  position: relative;

  :before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.1);
    top: 0;
    left: 0;
    filter: blur(15px);
    border-radius: 5em;
  }

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