import styled from "styled-components";

export const PaginationWrapper = styled.ul`
      grid-column: 2/14;
      grid-row: 2/3;
      display:flex;
      flex-flow: row nowrap;
      gap: 1em;
      justify-content:center;
      align-items:center;
      transition: all .5s ease-in-out;

      li{
        list-style:none;
        
        button{
          padding: .5em 1em;
          border-radius: .25em;
          border:none;
          font-family: ${({theme}) => theme.fonts.mono};
          background: transparent;
          color: ${({theme}) => theme.colors.body};
          box-shadow: none;
          transition: all .5s ease-in-out;
          border: 1px solid ${({theme}) => theme.colors.body};
          cursor: pointer;
          &.active{
            background: ${({theme}) => theme.colors.body};
            color: ${({theme}) => theme.colors.grey};
            box-shadow: 0em .25em .25em 0em rgba(0,0,0,.33),
                        0em .25em .5em 0em rgba(0,0,0,.22);
          }
        }
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