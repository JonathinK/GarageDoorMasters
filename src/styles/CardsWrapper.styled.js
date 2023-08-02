import styled,{css} from 'styled-components';
import { ServiceCard } from './ServicesCard.styled';


export const CardsWrapper = styled.div`
   display:flex;
   
  ${props => props.HomepageServiceCards && css`
    flex-flow: row wrap;
    justify-content:stretch;
    align-items:stretch;
    gap: 2em 2em;
    position: relative; 
    width: clamp(auto,100%,100%);
    
    @media ${({theme}) => theme.sizes.desktop}{
      flex-flow: row wrap;
      
      ${ServiceCard}{
        justify-content:center;
        align-items:center;
        text-align:center;
        gap: 1.5em;
      }
    }@media ${({theme}) => theme.sizes.largeTablet}{
      justify-content:center;
      align-items: stretch;
      ${ServiceCard}{
        padding: 2em;
      }

    }@media ${({theme}) => theme.sizes.tablet}{   
      
      ${ServiceCard}{
        padding: 2em;
      }
    }
    @media ${({theme}) => theme.sizes.mobile}{

    }
  `}
  ${props => props.FeatureWrapper && css`
      flex-flow: row wrap;
      justify-content: stretch;
      align-items:stretch;
      gap: 3em;
    
    @media ${({theme}) => theme.sizes.largeDesktop}{
      grid-column: 2/14;
      grid-row:3/4;
    }@media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8;
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
    }
  `} 
  ${props => props.AssuranceWrapper && css`
    gap:2em;
    flex-flow: row wrap;
    justify-content:center;
    align-items:center;

    @media ${({theme}) => theme.sizes.desktop}{
      
    }
    @media ${({theme}) => theme.sizes.largeTablet}{
      gap:1em;
      flex-flow: row wrap;
      justify-content:center;
      align-items:center;
    }
    @media ${({theme}) => theme.sizes.tablet}{
      flex-flow: row wrap;
      gap: 2em;
    }
    @media ${({theme}) => theme.sizes.mobile}{

    }
  `}
  ${props => props.ResidentialCardsWrapper && css` 
    flex-flow: row nowrap;
    gap: 2em 2em;
    @media ${({theme}) => theme.sizes.desktop}{
      flex-flow: row wrap;
    }@media ${({theme}) => theme.sizes.largeTablet}{
    }@media ${({theme}) => theme.sizes.tablet}{    
    }@media ${({theme}) => theme.sizes.mobile}{
    }
  `}
  ${props => props.SpringsCardWrapper && css`
    position: relative;
    gap: 2em;
    flex-flow: row nowrap;
    @media ${({theme}) => theme.sizes.largeDesktop}{
      grid-column: 2/14;
      grid-row: 2/3;
    }@media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
      grid-row: 2/3;
      flex-flow: row nowrap;
    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
      grid-row: 2/3;
      flex-flow: row nowrap;
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8;
      grid-row: 2/3;
      flex-flow: row wrap;
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
      grid-row: 2/3;
      flex-flow: row wrap;
    }
  `}
  ${props => props.CommercialServiceCards && css`
    position: relative;
    height:auto;
    gap:1em;
    flex-flow: row wrap;
    justify-content: stretch;
    align-items: stretch;

  @media ${({theme}) => theme.sizes.largeDesktop}{
      grid-column: 2/14;
      grid-row: 2/3;
    }
  @media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
      grid-row: 2/3;
      flex-flow: row wrap;
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
      padding:0;
      gap: 2em;
      grid-column: 2/10;
      grid-row: 2/3;
    }
  @media ${({theme}) => theme.sizes.tablet}{
      gap:2.5em;
      grid-column: 2/8;
      grid-row: 2/3;
      flex-flow: column nowrap;
    }
  @media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
      grid-row: 2/3;
      flex-flow: row wrap;
      gap: 1em 1em;
      width: 100%;
      justify-content:flex-start;
      align-items:center;
    }
  `}
  ${props => props.ResidentialServiceCards && css`
    position: relative;
    gap: 2em;
  @media ${({theme}) => theme.sizes.largeDesktop}{
      grid-column: 4/12;
      grid-row: 2/3;
    }@media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/12;
      grid-row: 2/3;
    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
      grid-row: 1/2;
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8;
      grid-row: 1/2;
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
      grid-row: 1/2;
    }
  `}

  ${props => props.Breakpoints && css`
    @media ${({theme}) => theme.sizes.largeDesktop}{
      grid-column: 2/14;
      grid-row: 1/2;
    }@media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
      grid-row: 1/2;
    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
      grid-row: 1/2;
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8;
      grid-row: 1/2;
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
      grid-row: 1/2;
    }
  `}

`