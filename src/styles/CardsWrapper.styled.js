import styled,{css} from 'styled-components';
import { ServiceCard } from './ServicesCard.styled'; 
import { ImageWrapper } from './Imagewrapper.styled';
import { TextWrapper } from './Textwrapper.styled';
import { SubTitle } from './Typography';

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
      gap:2em;
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
    grid-column: 2/14;
    grid-row: 2/3;
    width:100%;
    gap: 2em;
    flex-flow: row wrap;
    justify-content:stretch;
    align-items:stretch;

    ${ServiceCard}{
      flex-flow: column nowrap;
      
      padding: 0;
     ${ImageWrapper}{
      aspect-ratio: 2;
      flex: 2 1 250px;
      max-height: 250px;
     }
     ${TextWrapper}{
        flex: 1 1 30%;
        padding-bottom: 1em;
      ${SubTitle}{
     
      }
      div{
       
      }
     }
    }

    @media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
      flex-flow: row wrap;
      ${ServiceCard}{
        padding: 0;
        flex-flow: column nowrap;
        flex: 1 1 40%;
        ${ImageWrapper}{
          
        }
        ${TextWrapper}{
          padding-bottom: 1em;
    
          ${SubTitle}{
         
          }
        }
    }

    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
      flex-flow: row wrap;
      ${ServiceCard}{
        padding: 0;
     ${ImageWrapper}{
       
     }
     ${TextWrapper}{
      
      ${SubTitle}{

      }
     }
    }
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8; 
      flex-flow: row wrap;
      justify-content:stretch;
      align-items:stretch;
      ${ServiceCard}{
        padding: 0;
        ${ImageWrapper}{
          flex: 2 1 250px;

        }
        ${TextWrapper}{
          padding-bottom: 1em;
          width: 90%;
          div{
            width: 100%;
          }

          ${SubTitle}{
            width:100%;
          }
        }
    }
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
      
      ${ServiceCard}{
        padding: 0;
        flex-flow: column nowrap;
        ${ImageWrapper}{
          flex: 2 1 200px;
          max-height: 200px;
        }
        ${TextWrapper}{
          width: 85%;
          padding: 0 0 1em 0;;

          div{
            width: 100%;
            height: auto;
            ul{
              
            }
          }
          
          ${SubTitle}{
          
          }
        }
      }
    }
  `}
  ${props => props.ResidentialServiceCards && css`
    grid-column: 2/14;
    grid-row: 2/3;
    width:100%;
    gap: 2em;
    flex-flow: row wrap;

    ${ServiceCard}{
      flex-flow: row nowrap;
      justify-content:flex-start;
      align-items:center;
      border-radius: 1em;
      overflow: hidden;
      flex: 1 1 calc(1200px / 2 - 2em);
      padding: 0;
     ${ImageWrapper}{
      flex: 2 1 20%;
      aspect-ratio: 2.5;
     }
     ${TextWrapper}{
        padding: 1em;
        text-align:left;
        flex: 1 1 30%;
      ${SubTitle}{
       width: 100%;
       text-align: left;
      }
     }
    }

    @media ${({theme}) => theme.sizes.desktop}{
      grid-column: 2/14;
      flex-flow: row wrap;
      ${ServiceCard}{
        padding: 0;
        height: auto;
        flex-flow: column wrap;
        ${ImageWrapper}{
          flex: 2 1 300px;
          max-height: 300px;
          aspect-ratio: 2;
        }
        ${TextWrapper}{
          flex: 1 1 20%;
          padding: 0em 1em 1em 1em;
          text-align:center;
          ${SubTitle}{
            text-align:center;
          }
        }
    }

    }@media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2/10;
      flex-flow: row wrap;
      ${ServiceCard}{
        padding: 0;
     ${ImageWrapper}{
        aspect-ratio: 1;
        flex: 2 1 250px;
        max-height: 250px;
     }
     ${TextWrapper}{
        flex: 1 1 20%;
        padding: 1em 2em;
      ${SubTitle}{
       width: 100%;
      }
     }
    }
    }@media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2/8; 
      flex-flow: row wrap;
      justify-content: stretch;
      align-items:stretch;
      ${ServiceCard}{
          padding: 0;
        ${ImageWrapper}{
          aspect-ratio: 2;
          flex: 2 1 200px;
          max-height: 200px;
        }
        ${TextWrapper}{
          flex: 1 1 20%;
          padding: 1em;

          ${SubTitle}{
            
          }
        }
    }
    }@media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2/6;
      flex-flow: column wrap;
      align-items: center;
      justify-content:stretch;
      ${ServiceCard}{
          width: 100%;
          padding: 0;
        ${ImageWrapper}{
          flex: 2 1 50%;
        }
        ${TextWrapper}{
          flex: 1 1 20%;
          padding: 0em 1.5em 1.5em 1em;
          
          ${SubTitle}{
           width: 100%;
          }
        }
      }
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