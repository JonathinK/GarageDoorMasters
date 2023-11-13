import styled from "styled-components";

export const HeroImage = styled.div`
  position: relative;
  grid-row: 1 / 2;
  :after{
    content: '';
    background:rgba(0,0,0,.4);
    width:100%;
    height:100%;
    position:absolute;
  }
  
  .background-fit{
    position: absolute;
    width:100%;
    height:100%;
  }
  @media ${({theme}) => theme.sizes.largeDesktop}{
    grid-column:  1 / 15;
  }
  @media ${({theme}) => theme.sizes.desktop}{
    grid-column: 1 / 15;
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-column: 1 / 11 ; 
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-column: 1 / 9 ;
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-column: 1 / 7;
  }
`