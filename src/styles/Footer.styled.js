import styled, {css} from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({theme}) => theme.colors.calmbluegradient};
  display:none;
  grid-template-rows: auto;
  grid-column: 1 / 15;
  gap:minmax(${({theme}) => theme.gridGap.tight},${({theme}) => theme.gridGap.wide});
  padding: 1em 0;   

  @media ${({theme}) => theme.sizes.largeDesktop}{
    grid-template-columns: ${({theme}) => theme.grid.largeDesktop};
    grid-column: 1 / 15;
  } 
  @media ${({theme}) => theme.sizes.desktop}{
    grid-template-columns: ${({theme}) => theme.grid.desktop};
    grid-column: 1 / 15;
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-template-columns: ${({theme}) => theme.grid.largeTablet};
    grid-column: 1 / 11;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-template-columns: ${({theme}) => theme.grid.tablet};
    grid-column: 1/9;
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-template-columns: ${({theme}) => theme.grid.mobile};
    grid-column: 1/8;
  }

`
export const FooterInfoContainer = styled.div`  
  display:flex;
  flex-flow: row wrap;
  gap: 1em;
  width:30%;

  .logo-wrapper{
    width: 140px;
  }
  @media ${({theme}) => theme.sizes.largeDesktop}{
    grid-column: 1 / 15;
  } 
  @media ${({theme}) => theme.sizes.desktop}{
    grid-column: 1 / 15;
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-column: 1 / 11;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-column: 1/9;
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-column: 1/8;
  }
`
export const HoursContainer = styled.div`
  width: 30%;
  display: flex;
  flex-flow: column nowrap;
  justify-content:center;
  align-items:center;
  gap:.3em;
  color: ${({theme}) => theme.colors.white};
`
export const PaymentsContainer = styled.div`
  width: 30%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: flex-start;
  gap:.5em;
  text-align: center;

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
  grid-row: 2 / 3;
  grid-column: 2 / 14;
  padding: 1em 0 0 0;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items:center;
  gap: .5em;
  border-top: 2px solid ${({theme}) => theme.colors.white};
`
export const FooterFlex = styled.div`
    display: flex;

  ${props => props.MainFooterFlex && css`
    grid-row: 1 / 2;
    grid-column: 2 / 14;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 1em;
  `}
  ${props => props.InfoFlex && css`
    flex-flow:column wrap;
    flex: 1 0 12em;
    gap: .3em;
  `}
  ${props => props.PoweredByFlex && css`
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    
    hr{
      height: 15px;
    }
  `}
  ${props => props.CopyrightFlex && css`
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    
    hr{
      height: 15px;
    }
  `}
  ${props => props.DesignedByFlex && css`
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    
    hr{
      height: 15px;
    }
  `}
`
//Typography for the footer
export const FooterTitle = styled.h5`
  font-family: ${({theme}) => theme.fonts.headline};
  font-size: ${({theme}) => theme.fontSize.micro};
  font-weight: ${({theme}) => theme.fontweight.normal};
  line-height: ${({theme}) => theme.lineheight.normal};
  letter-spacing: ${({theme}) => theme.letterSpacing.wide};
  color: ${({theme}) => theme.colors.white};
`
export const FooterText = styled.p`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.mono};
  font-size: ${({theme}) => theme.fontSize.micro};
  font-weight: ${({theme}) => theme.fontweight.normal};
  line-height: ${({theme}) => theme.lineheight.normal};
  letter-spacing: ${({theme}) => theme.letterSpacing.wide};
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


