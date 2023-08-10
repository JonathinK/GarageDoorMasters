import styled, {css} from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-rows:auto;
  grid-template-columns: inherit;
  grid-column: 1/15;
  overflow: hidden;
  gap: 2em 1em;
  background: ${({theme}) => theme.colors.calmbluegradient};

  @media ${({theme}) => theme.sizes.desktop}{
    grid-column: 1/15;
  }@media ${({theme}) => theme.sizes.largeTablet}{
    grid-column: 1/11;
  }@media ${({theme}) => theme.sizes.tablet}{
    grid-column: 1/9; 
  }@media ${({theme}) => theme.sizes.mobile}{
    grid-column: 1/7;
  }

`
export const FooterInfoContainer = styled.div`  
  display:flex;

  .logo-wrapper{
    width: 250px;
  }
  @media ${({theme}) => theme.sizes.desktop}{

  }@media ${({theme}) => theme.sizes.largeTablet}{

  }@media ${({theme}) => theme.sizes.tablet}{
    
  }@media ${({theme}) => theme.sizes.mobile}{
    width:100%;
    flex: 1 1 100%;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    
    .logo-wrapper{
      width: 100px;
    }
  }
`
export const HoursContainer = styled.div`
 
`
export const PaymentsContainer = styled.div`
 
  p{
    font-family: ${({theme}) => theme.fonts.headline};
    font-size: ${({theme}) => theme.fontSize.micro};
    font-weight: ${({theme}) => theme.fontweight.normal};
    line-height: ${({theme}) => theme.lineheight.normal};
    letter-spacing: ${({theme}) => theme.letterSpacing.wide};
    color: ${({theme}) => theme.colors.white};
  }

  div{
    width: 250px; 
  }
`
export const FooterBottomBar = styled.div`
  grid-column: 2/14;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items:center;
  justify-self:center;
  align-self:center;
  text-align:center;
  padding-bottom: 1em;


    @media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
      grid-row: 7/8;
    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
      grid-row: 7/8;
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8;
      grid-row: 7/8; 
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
      grid-row: 7/8;
      flex-flow: column wrap;
    }
`
export const FooterFlex = styled.div`
    display:flex;
  ${props => props.PaymentBBBFlex && css`
    flex-flow: column nowrap;
    justify-content: center;
    align-items:center;
    gap: 2em;
    grid-column: 2/14;

    @media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8; 
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
    }
  `}
  ${props => props.FooterLinks && css`
    flex-flow: column nowrap;
    justify-content: center;
    align-items:center;
    gap: 1em;
    grid-column: 2/14;
    width:100%;
    padding: 1em 0em;
    border: solid white;
    border-left: 2px;
    border-right: 2px;

    @media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8; 
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
    }
  `}
  
`
//Typography for the footer
export const FooterTitle = styled.h5`
  
`
export const FooterText = styled.p`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.mono};
  font-size: ${({theme}) => theme.fontSize.micro};
  font-weight: ${({theme}) => theme.fontweight.normal};
  line-height: ${({theme}) => theme.lineheight.normal};
  letter-spacing: ${({theme}) => theme.letterSpacing.wide};
  strong{
    font-size: ${({theme}) => theme.fontSize.milli};
  }
`
export const FooterLink = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.mono};
  font-size: ${({theme}) => theme.fontSize.micro};
  font-weight: ${({theme}) => theme.fontweight.normal};
  line-height: ${({theme}) => theme.lineheight.normal};
  letter-spacing: ${({theme}) => theme.letterSpacing.wide};

@media ${({theme}) => theme.sizes.hover}{
  :hover {
    color: ${({theme}) => theme.colors.accentredlink});
  }
}
`


