import styled,{ css, keyframes }from "styled-components"

export const ProductsWrapper = styled.div`
  display:flex;
  flex-flow: row wrap;
  position: relative;

  ${props => props.ProductSlide && css`
    background: ${({theme}) => theme.colors.white};
    flex-flow: row nowrap;
    justify-self:center;
    align-self:center;
    justify-content:stretch;
    align-items:center;
    width:100%;
    height:auto;
    padding: 2em 2em;
    gap: 1em 5em;
    overflow: hidden;
    box-shadow: 0px 4px 8px black inset,
                0px -4px 8px black inset;
    :before{
      content: '';
      position:absolute;
      left: 0;
      top:0;
      height:100%;
      width:20%;
      background:linear-gradient(
        to left,
        rgba(255,255,255,0),
        rgba(255,255,255,1)
      );
      z-index:2;
    }
    :after{
      content: '';
      position:absolute;
      right: 0;
      top:0;
      height:100%;
      width:20%;
      background-image:linear-gradient(
        to right,
        rgba(255,255,255,0),
        rgba(255,255,255,1)
      );
      z-index:2;
    }
    
    & .slide-container{
      display:inherit;
      justify-content:flex-start;
      align-items:inherit;
      gap:inherit;
      animation: ${slideLeftDesktop} 25s infinite linear;
      width: calc(300px * 20);
    }
    @media ${({theme}) => theme.sizes.tablet}{
      & .slide-container{
      animation: ${slideLeftTablet} 25s infinite linear;
      width: calc(150px * 20);
    }
    :before{
      content: '';
      position:absolute;
      left: 0;
      top:0;
      height:100%;
      width:30%;
      background:linear-gradient(
        to left,
        rgba(255,255,255,0),
        rgba(255,255,255,1)
      );
      z-index:2;
    }
    :after{
      content: '';
      position:absolute;
      right: 0;
      top:0;
      height:100%;
      width:30%;
      background-image:linear-gradient(
        to right,
        rgba(255,255,255,0),
        rgba(255,255,255,1)
      );
      z-index:2;
    }
    }
  `}
  ${props => props.OpenersPage && css` 
    flex-flow: row wrap;
    justify-content: center;
    align-items:center;
    text-align:center;
    gap: 2.5em 2.5em;
    background-image:linear-gradient(to right, rgba(215,215,215,0),rgba(252,252,252,1), rgba(215,215,215,0));
    padding: 4em 0;
    position: relative;
    overflow: hidden;
    animation: ${ProductShadowAnimation} 5s ease-in-out infinite;

    @media ${({theme}) => theme.sizes.largeTablet}{

    }

  `}
  ${props => props.DoorBuilder && css`
    flex-flow: row wrap;
    justify-content: center;
    align-items:center;
    gap: 1em 1em;
    @media ${({theme}) => theme.sizes.mobile}{
      justify-content:flex-start;
      align-items:center;
    }
  `}

  /***** Media Queries for prop inputs and styles *****/
  @media ${({theme}) => theme.sizes.largeDesktop}{
    grid-row: ${props => props.XLR};
    grid-column: ${props => props.XLC};
  }
  @media ${({theme}) => theme.sizes.desktop}{
    grid-row: ${props => props.LR};
    grid-column: ${props => props.LC};
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-row: ${props => props.MR}; 
    grid-column: ${props => props.MC}; 
    gap: 3.2em 3.2em;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-row: ${props => props.SR};
    grid-column: ${props => props.SC};
    gap: 2em 2em;
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-row: ${props => props.XSR};
    grid-column: ${props => props.XSC};
    gap: 2em 2em;
  }
`
export const Product = styled.div`
  
  ${props => props.ProductFixed && css`
    width: 300px;
    min-width: 300px;
    filter: grayscale(100%);
    
    @media ${({theme}) => theme.sizes.tablet}{
      min-width: 150px;
      width: 150px;
    }
  `}

  ${props => props.OpenerBrands && css` 
    max-width: 200px;
    flex: 1 1 200px;
    min-width:100px;
    position:relative;    
  `}
  
  /*Media Queries*/
  @media ${({theme}) => theme.sizes.largeDesktop}{

  }
  @media ${({theme}) => theme.sizes.desktop}{

  }
  @media ${({theme}) => theme.sizes.largeTablet}{ 
    flex: 1 1 200px;
    max-width: 200px;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    flex: 0 1 180px;
  }
  @media ${({theme}) => theme.sizes.mobile}{
    flex: 1 1 90px;
  }
`

const ProductShadowAnimation = keyframes`
  0%{
    box-shadow: 0em 3em 2em -3.1em rgba(0,0,0,.1),
                0em -3em 2em -3.1em rgba(0,0,0,.1);
  }
  50%{
    box-shadow: 0em 3em 2em -3.1em rgba(0,0,0,.3),
                0em -3em 2em -3.1em rgba(0,0,0,.3);
  }
  100%{
    box-shadow: 0em 3em 2em -3.1em rgba(0,0,0,.1),
                0em -3em 2em -3.1em rgba(0,0,0,.1);
  }
`
const slideLeftDesktop = keyframes`
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(calc(-380px * 10));
  }
`
const slideLeftTablet = keyframes`
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(calc(-121.4% / 2));
  }
`