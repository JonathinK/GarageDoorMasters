import styled from "styled-components";

export const PaginationWrapper = styled.ul`
      grid-column: 2/14;
      grid-row: 2/3;
      display:flex;
      flex-flow: row nowrap;
      gap: 1em;
      justify-content:center;
      align-items:center;
      li{
        list-style:none;
      }
    @media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
      grid-row: 2/3;
    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
      grid-row: 2/3;
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8;
      grid-row: 2/3; 
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
      grid-row: 2/3;
    }
`