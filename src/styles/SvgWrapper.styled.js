import styled,{css} from "styled-components";

export const SvgWrapper = styled.div` 
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  width:100%;
  max-width:100%;
  height:100%;
  max-height:109px;
  aspectRatio: 16/9;
  font-size: 0px;
  
  svg{
    width:100%;
    height:100%;
    aspectRatio: 16/9;
  }

  &.color-change-top{
    svg{
      .top{
        fill:${({theme}) => theme.colors.primaryblue};
      }
    }
  }
  &.flip{
    transform: rotateX(180deg) translateY(-1px);
    background: ${({theme}) => theme.colors.body};
    position: relative;
    top:0;
    bottom:0;
    
    svg{
      position:relative;
      z-index:3;
      width: 100%;
    }
    :before{
      content:'';
      position:absolute;
      height:100%;
      width:100%;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background: ${({theme}) => theme.colors.body};
      scale:1.1;
      z-index: 1;
      transform: translateY(10px);
    }
  }

  &.absolute-position-top{
    svg{
      .top{
        fill:${({theme}) => theme.colors.primaryblue};
      }
    }
  }

${props => props.PanelImagesSvg && css`
  position: relative;
  bottom: 0;
  left:0;
  width:100%;
  max-height:100%;
  justify-self:end;
  align-self:end;

  @media ${({theme}) => theme.sizes.largeTablet}{
    max-height: 50%;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    max-height: 100%;
  }
  @media ${({theme}) => theme.sizes.mobile}{
    max-height: 250px;
  } 
`}

${props => props.CardIcon && css`
  svg{
    width: 72px;
    height: 72px;
    aspect-ratio: 1.1;
  } 
  height: 72px;
  justify-content: center;
  align-items:center;
  
  @media ${({theme}) => theme.sizes.tablet}{
    justify-content: center;
    align-items:center;
  }
`}
${props => props.navigationSvg && css` 
  justify-self: start;
  align-self: start;
  height:100%;
  max-height: 100%;
  position: relative;
  z-index: 55;
  
  &.flipped{
    background: transparent;
    transform: rotateX(180deg) translateY(-1px);
    width:100%;
    height:100%;
    position: relative;
    z-index: 55;
    top:0;
    bottom:0;
    justify-self: end;
    align-self: end;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    max-height: 200px;
  }
`}

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
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-row: ${props => props.SR};
    grid-column: ${props => props.SC};
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-row: ${props => props.XSR};
    grid-column: ${props => props.XSC};
  }
`