import styled from "styled-components";

export const LayoutContainer = styled.main` 
  display: grid;
  grid-auto-flow: row;
  height: auto;
  width:100%;

  @media ${({theme}) => theme.sizes.largeDesktop} {
    grid-template-columns: ${({theme}) => theme.grid.largeDesktop};
  }
  @media ${({theme}) => theme.sizes.desktop} {
    grid-template-columns: ${({theme}) => theme.grid.desktop}; 
  }
  @media ${({theme}) => theme.sizes.largeTablet} {
    grid-template-columns: ${({theme}) => theme.grid.largeTablet};
  }
  @media ${({theme}) => theme.sizes.tablet} {
    grid-template-columns: ${({theme}) => theme.grid.tablet};
  }
  @media ${({theme}) => theme.sizes.mobile} {
    grid-template-columns: ${({theme}) => theme.grid.mobile};
  }
`
