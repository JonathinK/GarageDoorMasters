import styled from "styled-components";

export const BannerContainer = styled.div`
  display:grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  height:auto;

  @media ${({theme}) => theme.sizes.largeDesktop}{
    grid-column: 1/15
  }
  @media ${({theme}) => theme.sizes.desktop}{
    grid-column: 1/15;
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-column: 1/11;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-column: 1/9;
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-column: 1/7;
}
`
export const BannerImage = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  height:60vh;
  position:relative;
  overflow:hidden;
  z-index:0;
  
  ${({variant}) =>  {
    switch (variant) {
      case 'Gradient':
        return`
        :after{
          height:100%;
          width:100%;
          content:'';
          position:absolute;
          background-image: linear-gradient(to top, hsla(213, 81%, 21%, 1), hsla(213,81%,21%,0));
        }
        `;
        default: 
          return``;
        
    }
  }}
  :after{
    height:100%;
    width:100%;
    content:'';
    position:absolute;
    background-color:rgba(0,0,0,.5);
  }

  .image-fit{
    width:100%;
    height:100%;
    position: absolute;
    filter: blur(3px);
    transform: scale(1.05);
  }

  @media ${({theme}) => theme.sizes.largeDesktop}{
  }
  @media ${({theme}) => theme.sizes.desktop}{

  }
  @media ${({theme}) => theme.sizes.largeTablet}{

  }
  @media ${({theme}) => theme.sizes.tablet}{
 
  }
  @media ${({theme}) => theme.sizes.mobile}{
    height: 60vh;
  }
`
export const BannerTitleBlock = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    position: relative;
    justify-self: center;
    align-self:center;
    text-align:center;
    padding: 0em 2em;
    @media ${({theme}) => theme.sizes.largeTablet}{
      padding: 0em 2em;
    }  
    @media ${({theme}) => theme.sizes.tablet}{
      padding: 0em 1em;
    }
    @media ${({theme}) => theme.sizes.mobile}{
    }
`
