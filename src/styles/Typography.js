import { Link } from "gatsby";
import styled, { css } from "styled-components";


export const PageTitle = styled.h1`
  font-family: ${({theme}) => theme.fonts.headline};
  font-size: ${({theme}) => theme.fontSize.kilo};
  font-weight: ${({theme}) => theme.fontweight.bold};
  color: ${({theme}) => theme.colors.white};
  line-height: ${({theme}) => theme.lineheight.dense};
  
  @media ${({theme}) => theme.sizes.tablet}{
    font-size: ${({theme}) => theme.fontSize.h1};
  }
  @media ${({theme}) => theme.sizes.mobile}{
    font-size: ${({theme}) => theme.fontSize.h2};
}
`
export const Headline = styled.h2`
  font-family: ${({theme}) => theme.fonts.headline};
  font-size: ${({theme}) => theme.fontSize.h2};
  line-height: ${({theme}) => theme.lineheight.dense};
  font-weight: ${({theme}) => theme.fontweight.medium};
  text-transform: ${({theme}) => theme.fontCasing.capitals};
  color: ${({theme}) => theme.colors.white};

  ${({variant}) => {
      switch (variant) {
        case "no-background":
          return`
            color: white;!important 
          ` 
        default:
          return'';
      }
    }}
  ${props => props.HeadlineRed && css` 
    color: ${({theme}) => theme.colors.grey};
  `}

  ${props => props.BigTextHeadline && css`
    font-size: ${({theme}) => theme.fontSize.giga};
    color: ${({theme}) => theme.colors.primaryblue};
    text-transform: ${({theme}) => theme.fontCasing.upper};
    position:relative;
    z-index: 2;
    @media ${({theme}) => theme.sizes.largeTablet}{
      font-size: ${({theme}) => theme.fontSize.kilo};
    }
    @media ${({theme}) => theme.sizes.tablet}{
      font-size: ${({theme}) => theme.fontSize.h1}!important;
    }
    @media ${({theme}) => theme.sizes.mobile}{
      font-size: ${({theme}) => theme.fontSize.h2}!important;
    }
    }
  `}
  ${props => props.HeadlineMedium && css`
    font-size: ${({theme}) => theme.fontSize.h3};
    color:${({theme}) => theme.colors.grey};
  `}

  &.color-change{
    color: ${({theme}) => theme.colors.white};
  }
  @media ${({theme}) => theme.sizes.tablet}{
    font-size: ${({theme}) => theme.fontSize.h3};
  }
  @media ${({theme}) => theme.sizes.mobile}{
    font-size: ${({theme}) => theme.fontSize.h4};
  }
`
export const SubTitle = styled.h3`
  font-family: ${({theme}) => theme.fonts.headline};
  font-size: ${({theme}) => theme.fontSize.h5};
  color: ${({theme}) => theme.colors.grey};

  ${({variant}) => {
      switch (variant) {
        case 'primary':
          return`
            color: white;
          `;
        case "no-background":
          return`
            color: white;!important 
            
          ` 
        default:
          return'';
      }
    }}
  ${props => props.ServiceCardSub && css`
    font-size: ${({theme}) => theme.fontSize.h5};
    color: ${({theme}) => theme.colors.white};
    position:relative;

    &.red-color{
      color: ${({theme}) => theme.colors.grey};
    }
    @media ${({theme}) => theme.sizes.mobile}{
      font-size: ${({theme}) => theme.fontSize.milli};
    }
  `}
  ${props => props.FeatureCardTitle && css`
    font-size: ${({theme}) => theme.fontSize.h3};
    color: ${({theme}) => theme.colors.white};
    @media ${({theme}) => theme.sizes.tablet}{
      font-size: ${({theme}) => theme.fontSize.h4};
    }
    @media ${({theme}) => theme.sizes.mobile}{
      font-size: ${({theme}) => theme.fontSize.h5};
    }
  `}
  ${props => props.SymptomSub && css`
    color: ${({theme}) => theme.colors.headlineblue};
    font-size: ${({theme}) => theme.fontSize.h4};
    @media ${({theme}) => theme.sizes.mobile}{
      font-size: ${({theme}) => theme.fontSize.h5};
    }
  `}
  ${props => props.SpringSub && css` 
    font-size: ${({theme}) => theme.fontSize.h4};
    color: ${({theme}) => theme.colors.accentred};
  `} 
  ${props => props.Assurance && css` 
    font-size: ${({theme}) => theme.fontSize.h5};
  `}
`
export const Kicker = styled.p`
  font-family: ${({theme}) => theme.fonts.mono};
  font-size: ${({theme}) => theme.fontSize.milli};
  color: ${({theme}) => theme.colors.white};
  text-transform: ${({theme}) => theme.fontCasing.upper};
  font-weight: ${({theme}) => theme.fontweight.bold};
 
  ${props => props.Alternate && css`
    color: black;
  `};
  &.color-change{
    color: ${({theme}) => theme.colors.white};
  }

@media ${({theme}) => theme.sizes.tablet}{
  font-size: ${({theme}) => theme.fontSize.nano};
}
@media ${({theme}) => theme.sizes.mobile}{
  font-size: ${({theme}) => theme.fontSize.nano};
}
`
export const TextBlock = styled.div`
 
  p{
    color:${({theme}) => theme.colors.lightgrey};
    font-family: ${({theme}) => theme.fonts.body};
    font-size: ${({theme}) => theme.fontSize.milli};
    font-weight: ${({theme}) => theme.fontweight.normal};
    line-height: ${({theme}) => theme.lineheight.loose}; 
    ${({variant}) => {
      switch (variant) {
        case 'primary':
          return`
            color: white;
          `;
        case 'no-background':
          return`
            color: white;
          `;
        default:
          return'';
      }
    }};
    p:nth-child (2){
        display:none;
      }
  }
  ul{
    li{
      list-style:none;
      font-family: ${({theme}) => theme.fonts.body};
      
      ${({variant}) => {
      switch (variant) {
        case 'primary':
          return`
            color: white;
          `;
        default:
          return'';
      }
    }}
    }
  }
  strong{
    ${({variant}) => {
      switch (variant) {
        case 'primary':
          return`
            color: white;
          `;
        default:
          return'';
      }
    }}
  }
  em{
    ${({variant}) => {
      switch (variant) {
        case 'primary':
          return`
            color: white;
          `;
        default:
          return'';
      }
    }}
  }
  @media ${({theme}) => theme.sizes.largeDesktop}{

  }
  @media ${({theme}) => theme.sizes.desktop}{

  }
  @media ${({theme}) => theme.sizes.largeTablet}{

  }
  @media ${({theme}) => theme.sizes.tablet}{
    p{
      font-size: ${({theme}) => theme.fontSize.micro};
    }
  }
  @media ${({theme}) => theme.sizes.mobile}{

  }
`
//Link component for off site links, hrefs, etc.
export const ExternalLink = styled.a`
  text-decoration:none;
  color: black;
  font-family: ${({theme}) => theme.fonts.body};

  ${props => props.BuilderLink && css` 
    
  `} 
  ${props => props.ButtonLink && css` 
    padding: 1em 1.5em;
    border-radius: .5em;
    box-shadow: none;
    background: transparent;
    transition: all .5s ease-in-out;
    border: 2px solid ${({theme}) => theme.colors.white};
    color: white;
    &.alt{
      color:${({theme}) => theme.colors.grey};
      border: 2px solid ${({theme}) => theme.colors.grey};
    }
    :hover{
      background:${({theme}) => theme.colors.white};
      color: black;
      box-shadow: 0em .5em .5em rgba(0,0,0,.33), 0em 1em 1em rgba(0,0,0,.22);
    }


      
  `}
  ${props => props.ContactLink && css`
    color: black;
    font-family: ${({theme}) => theme.fonts.body};
  `}
`

//Link component for internal routes using gatsby's route link api
export const ButtonLink = styled(Link)`
    display:block;
    font-size: ${({theme}) => theme.fontSize.milli};
    @media ${({theme}) => theme.sizes.tablet}{
      font-size: ${({theme}) => theme.fontSize.micro};
    }
    @media ${({theme}) => theme.sizes.mobile}{
      font-size: ${({theme}) => theme.fontSize.nano};
    }
  ${props => props.primary && css`
    font-family: ${({theme}) => theme.fonts.mono};
    font-weight: ${({theme}) => theme.fontweight.bold};
    line-height: ${({theme}) => theme.lineheight.dense};
    letter-spacing: ${({theme}) => theme.letterSpacing.normal};
    color: ${({theme}) => theme.colors.white};   
    text-transform: ${({theme}) => theme.fontCasing.upper};
    text-decoration:none;
  `}
  ${props => props.secondary && css`
    font-family: ${({theme}) => theme.fonts.mono};
    font-weight: ${({theme}) => theme.fontweight.bold};
    line-height: ${({theme}) => theme.lineheight.dense};
    letter-spacing: ${({theme}) => theme.letterSpacing.normal};
    color: ${({theme}) => theme.colors.white};   
    text-transform: ${({theme}) => theme.fontCasing.upper};
    text-decoration:none;
  `}
  ${props => props.outline && css`
    font-family: ${({theme}) => theme.fonts.mono};
    font-weight: ${({theme}) => theme.fontweight.bold};
    line-height: ${({theme}) => theme.lineheight.dense};
    letter-spacing: ${({theme}) => theme.letterSpacing.normal};
    color: ${({theme}) => theme.colors.white};   
    text-transform: ${({theme}) => theme.fontCasing.upper};
    text-decoration:none;
    position:relative;
    z-index:1;
  `}
  
`
