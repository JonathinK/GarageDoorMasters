import styled, {css} from "styled-components";

export const TextWrapper = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:flex-start;
  gap: 1em; 
  position:relative;

  /* Text Wrapper Props for specific sections */
  ${props => props.HeroText && css`
    justify-self:center;
    align-self:center;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding: 0em 2.5em;
    gap: 1.5em;
    text-shadow: 0em .1em .3em black;
    max-width: 550px;
    
    div > p{
      font-size: ${({theme}) => theme.fontSize.h5};
    }
    @media ${({theme}) => theme.sizes.tablet}{
      div > p{
      font-size: ${({theme}) => theme.fontSize.milli};
    }
    }
    @media ${({theme}) => theme.sizes.tablet}{
      div > p{
      font-size: ${({theme}) => theme.fontSize.micro};
    }
    }
  `}

  ${props => props.ServicesText && css`
    z-index: 2;
    justify-content:flex-end;
    align-items: center;
    text-align:center;
  `}

  ${props => props.ServiceText && css`
    z-index: 2;
    justify-content: space-evenly;
    align-items: center;
    justify-self: stretch;
    align-self:stretch;
    text-align:center;
    
   
    @media ${({theme}) => theme.sizes.desktop}{
      p{
        max-width: 500px;
      }
    }@media ${({theme}) => theme.sizes.tablet}{
      padding: 0em 0em;
    }
  `}

  ${props => props.TopText && css`
    z-index: 2;
    justify-content:flex-end;
    align-items: center;
    text-align:center;
    padding: 5em 30%;
    background:transparent;
    box-shadow: 0em 3em 4em -2.5em rgba(0,0,0,.33),
                0em -3em 4em -2.5em rgba(0,0,0,.33);
    @media ${({theme}) => theme.sizes.largeTablet}{
      padding: 5em 3em;
    }
    @media ${({theme}) => theme.sizes.mobile}{
      padding: 3em 2em;
    }
  `} 
  ${props => props.BigText && css`
    padding-left: 1em;
    justify-self:center;
    align-self:center;
    position:relative;

    :before{
      content:'';
      position: absolute;
      width:100%;
      height: 50%;
      top: 0;
      left:0;
      background: ${({theme}) => theme.colors.headlineblue};
      z-index:1;
      border-radius: 0 1em 1em 0;
      transform: scaleX(1.2) translateX(-9%);
    }
    @media ${({theme}) => theme.sizes.largeTablet}{
      :before{
      height: 50%;
      border-radius: 0 1em 1em 0;
      transform: scaleX(1.2) translateX(-9%);
    }
    }
    @media ${({theme}) => theme.sizes.tablet}{
    padding-right: 1em;
    :before{
      height: 50%;
      border-radius: 0 1em 1em 0;
      transform: scaleX(1.2) translateX(-8%);
    }
    }
    @media ${({theme}) => theme.sizes.mobile}{

    }
  `}

  ${props => props.FeatureCard && css`
    justify-content:flex-start;
    align-items: flex-start;
    gap: .5em;
  `}
  ${props => props.GenieText && css`

    .kicker-image-wrap{
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items:center;
      gap:0em 1em;
      width:100%;
      filter: drop-shadow(0 1em .5em rgba(0,0,0,.32));
      @media ${({theme}) => theme.sizes.mobile}{
        filter: drop-shadow(0 .5em .5em rgba(0,0,0,.32));
      }
      & .badge{
        flex: 1 1 110px;
        max-width: 200px;

        @media ${({theme}) => theme.sizes.mobile}{
          flex: 1 1 50px;
          max-width: 100px;
        }
      }
    }
  `}
  ${props => props.OpenerRepairText && css`
    background: transparent;
    padding: 1.5em;
    border-radius: 1em;
   
  `}
  ${props => props.SpringCardText && css`
    gap: 1em;
  `}
  ${props => props.TrustProsText && css`
    width:40%;
    @media ${({theme}) => theme.sizes.tablet}{
      width: 60%;
    }
  `}
  ${props => props.TextImageWrapper && css`
    width:100%;
    background: ${({theme}) => theme.colors.white};
    display:flex;
    flex-flow:  row wrap;
    justify-content:center;
    align-items:center;
    border-radius: 1em;
    padding: 2em;
    box-shadow: 0em 2em 2em -.5em rgba(0,0,0,.32), 0em 0em .5em .5em rgba(0,0,0,.2) inset;
  `}
  ${props => props.ContactText && css` 
      padding-right: 3em;
      gap: 1em;
      .wrappers{
        display:inherit;
        flex: row nowrap;
        justify-content: flex-start;
        align-items:center;
        gap: 1em;
        width:100%;
        p{
        font-family: ${({theme}) => theme.fonts.body};
        }
      }
      .businessHours {
          display:block;
          flex: row wrap;
          justify-content: flex-start;
          align-content:center;
          width:100%;
        ul{
          width:100%;
          display:flex;
          flex-flow: row wrap;
          justify-content:flex-start;
          align-items:center;
          gap:1em;
          flex: 100%;
          padding-left: 3em;
          li{
            list-style: none;
            display:inherit;
            justify-content:flex-start;
            align-items:center;
            flex: 100%;
            font-family:${({theme}) => theme.fonts.body};
          }
        }
        .wrappers{
          display:flex;
          flex: row wrap;
          justify-content: flex-start;
          align-items:center;
          gap: 1em;
          width:100%;
          flex: 100%;
        }
      }
      @media ${({theme}) => theme.sizes.largeTablet}{
        padding-right: 0;
      }
  `}
  ${props => props.CountyList && css` 
      justify-content: center;
      align-items:center;
      padding:1em 5em;

      @media ${({theme}) => theme.sizes.largeTablet}{
        padding:1em 0em;
      }
  `}
  ${props => props.ServicesCard && css` 
      justify-content: center;
      align-items:center;
      text-align:center;
      max-width: 450px;

      @media ${({theme}) => theme.sizes.desktop}{
       gap: .5em;
       justify-content:flex-start;
       align-items:center;
       flex: 1 1 50%;
      }

      @media ${({theme}) => theme.sizes.largeTablet}{
       gap: .5em;
       justify-content:flex-start;
       align-items:center;
       text-align:center;
      }
      
      @media ${({theme}) => theme.sizes.tablet}{
       gap: .5em;
       justify-content:;
       align-items:center; 
       text-align: center;
       flex: 1 1 50%;
      }

      @media ${({theme}) => theme.sizes.mobile}{
        gap: .5em;
        justify-content:center;
        align-items:center;
        flex: 1 1 50%;
      }
  `}
  ${props => props.ResidentialServiceCardText && css` 
   

      @media ${({theme}) => theme.sizes.desktop}{
      
      }

      @media ${({theme}) => theme.sizes.largeTablet}{
    
      }
      
      @media ${({theme}) => theme.sizes.tablet}{
       
      }

      @media ${({theme}) => theme.sizes.mobile}{

        
      }
  `}



/* General Styles*/
  ${props => props.GridAlignCenter && css` 
    justify-self:center;
    align-self:center;
  `}
  ${props => props.TextAlignCenter && css`
    text-align:center;
  `} 
  ${props => props.FlexCenter && css`
    justify-content:center;
    align-items:center;
  `}

{/* Button Flex Wrapper */}
  .Button-Flex-Wrapper{
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items:center;
    gap: 2em;
    height:auto;
    width:100%;
  }

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