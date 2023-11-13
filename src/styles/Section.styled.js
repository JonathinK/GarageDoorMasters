import styled, {css} from 'styled-components';

export const Section = styled.section`
  display: grid;

  /*****Props for section styles *****/ 
  /***Homepage Sections***/
  ${props => props.HeroSection && css`
    grid-template-rows:100vh;
    grid-template-columns: 1fr;
    overflow: hidden;
  `}
  ${props => props.HomepageAbout && css`
    background: ${({theme}) => theme.colors.primaryblue};
    background-image: radial-gradient(farthest-side at 160% 70%,hsla(213,22%,64%,1) 20%,hsla(213,81%,21%,1) 80% );
    grid-template-rows: 1fr;
    grid-template-columns: inherit;
    gap: 2em 1em;
    height:auto;
    overflow:hidden;
    padding: 5em 0;
    @media ${({theme}) => theme.sizes.tablet}{
      background-image: radial-gradient(farthest-side at 20% 100%,hsla(213,22%,64%,.5
      ) 10%,hsla(213,81%,21%,1) 100% );
      overflow:hidden;
    }
  `}
  ${props => props.HomepageServices && css`
    grid-template-columns:inherit;
    grid-template-rows: auto 1fr auto;
    padding: 5em 0;
    gap: 5em 2em;
    position: relative;
    background-color: ${({theme}) => theme.colors.primaryblue};
    overflow:hidden;
    
    :before{
      content:'';
      position: absolute;
      top:-40%;
      left:0;
      height:100%;
      width:100%;
      background-image: radial-gradient(closest-side at 50% 50%,hsla(213,22%,64%,1),hsla(213,81%,21%,1) );
      scale: 1.3;
      filter: blur(8px);
    }
    @media ${({theme}) => theme.sizes.desktop}{
      gap: 3em 1em;
    }  
    @media ${({theme}) => theme.sizes.tablet}{
      gap: 3em 2em;
    } 
    @media ${({theme}) => theme.sizes.mobile}{
      gap: 3em 1em;
    }
  `}
  ${props => props.HomepageServicesCards && css`
    padding: 0em 0em 5em 0em;
    position: relative;
    grid-template-columns: inherit;
    grid-template-rows:auto;
    background-color: ${({theme}) => theme.colors.primaryblue};
    gap: 2em 2em;
    text-align:center;
    @media ${({theme}) => theme.sizes.desktop}{
      gap: 3em 1em;
    } 
    @media ${({theme}) => theme.sizes.mobile}{
      gap: 3em 1em;
    }

  `}
  ${props => props.HomepageReviews && css`
    position: relative;
    grid-template-columns: inherit;
    grid-template-rows:auto auto auto;
    background-color: ${({theme}) => theme.colors.primaryblue};
    gap: 3em 2em;
    padding-bottom: 5em;
    @media ${({theme}) => theme.sizes.desktop}{
      gap: 3em 1em;
    } 
    @media ${({theme}) => theme.sizes.mobile}{
      gap: 3em 1em;
    }

  `}
  /***About Page Sections ***/
  ${props => props.AboutGdmSection && css` 
    grid-template-columns:inherit;
    grid-template-rows: 1fr auto;
    overflow:hidden;
    width:100%;
    position: relative;
    gap: 1.5em;
    background: ${({theme}) => theme.colors.body};
    
    @media ${({theme}) => theme.sizes.tablet}{
      gap: 2em 1em;
    }
    @media ${({theme}) => theme.sizes.mobile}{
      gap: 2em 1em;
    }
  `}
  ${props => props.AssuranceSection && css` 
    grid-template-columns:inherit;
    grid-template-rows:auto;
    overflow:hidden;
    width:100%;
    position: relative;
    gap: 2em 1.5em;
    background: ${({theme}) => theme.colors.body};
    padding: 5em 0em;
    
    @media ${({theme}) => theme.sizes.tablet}{
      
    }
    @media ${({theme}) => theme.sizes.mobile}{
      gap: 1em;
    }
  `}
  ${props => props.BigTextSection && css` 
    grid-template-columns:inherit;
    grid-template-rows:auto;
    overflow:hidden;
    width:100%;
    position: relative;
    gap: 2em 1.5em;
    background: ${({theme}) => theme.colors.body};
    padding: 0em 0em 5em 0em;
    
    @media ${({theme}) => theme.sizes.tablet}{
      
    }
    @media ${({theme}) => theme.sizes.mobile}{
      gap: 1em;
    }
  `}
  /***Residential Services Page Sections***/
  ${props => props.ResidentialServicesOpeningSection && css` 
    grid-template-rows: auto;
    grid-template-columns: inherit;
    position: relative;
    z-index: 2;
    background: ${({theme}) => theme.colors.body};
    gap: 0em 1em;
    padding: 5em 0em;
  `}
  ${props => props.ResidentialServicesCardsSection && css`
     grid-template-rows: auto;
     grid-template-columns: inherit;
     position: relative;
     z-index: 3;
     background: ${({theme}) => theme.colors.primaryblue};
     gap: 0em 4em;
     padding: 5em 0em;

     @media ${({theme}) => theme.sizes.largeTablet}{
      gap: 2em 2em;
     }
     @media ${({theme}) => theme.sizes.tablet}{
      gap: 1.5em 1.5em;
     }
     @media ${({theme}) => theme.sizes.mobile}{
      gap: 1em 1em;
     }
  `}
  /***Residential Openers Page Sections***/
  ${props => props.HelpingHomeownersSection && css`
    grid-template-rows: auto;
    grid-template-columns:inherit;
    background-color: ${({theme}) => theme.colors.body};
    padding: 3em 0em;
    gap: 2em 1em;
    position: relative;
    z-index: 1;
    overflow: auto;
  `}
  ${props => props.NewOpenerSection && css` 
    background: ${({theme}) => theme.colors.primaryblue};
    grid-template-rows: auto auto;
    grid-template-columns: inherit;
    padding: 3em 0em;
    gap: 1em 2em;
  `}
  ${props => props.GenieDealer && css`
    padding: 5em 0em;
    background: ${({theme}) => theme.colors.primaryblue};
    grid-auto-rows: auto;
    grid-template-columns: inherit;
    gap: 2em 2em;
    
    @media ${({theme}) => theme.sizes.largeTablet}{
      gap: 1.5em 1em;
      overflow: hidden;
      padding: 3em 0em;
    }
    @media ${({theme}) => theme.sizes.tablet}{
      gap: 1.5em 1em;
      overflow: hidden;
    }
  `}
  ${props => props.OpenerRepair && css`
    background: ${({theme}) => theme.colors.body};
    gap: 1em 2em !important;
    @media ${({theme}) => theme.sizes.tablet}{
      gap: 1em 1em !important;
    } 
  `}
  /***Residential Spring Replacement Sections***/
  ${props => props.ResidentialDamagedSprings && css` 
    background: ${({theme}) => theme.colors.body};
    gap: 1em 1em;
  `}
  ${props => props.ResidentialLearningTheSystem && css` 
    background: ${({theme}) => theme.colors.primaryblue};
    gap: 5em 2em;
    overflow:hidden;

    @media ${({theme}) => theme.sizes.mobile}{
    gap: 2em 1em !important; 
    }
  `} 
  ${props => props.BrokenSpringSymptoms && css` 
    background: ${({theme}) => theme.colors.body};
  `}
  /***Commercial Services***/
  ${props => props.TrustProsSection && css`
     padding:0;
     background: ${({theme}) => theme.colors.primaryblue};
     overflow:hidden;

     @media ${({theme}) => theme.sizes.tablet}{
      min-height: 40vh;
     }
  `}
  ${props => props.CommercialOpeningSection && css`
     padding:0;
     background: ${({theme}) => theme.colors.primaryblue};
     overflow:hidden;
  `}
  ${props => props.CommercialServices && css`
     background: ${({theme}) => theme.colors.body};
     overflow:hidden;
  `}
  /***Residential Installation***/
  ${props => props.ResidentialNewDoor && css`
    background: ${({theme}) => theme.colors.primaryblue};
    gap: 1em 2em !important;
    @media ${({theme}) => theme.sizes.largeTablet}{
      gap: 1.5em 2em !important;
    }
    @media ${({theme}) => theme.sizes.tablet}{
      gap: 2em 1.5em !important;
    }
    @media ${({theme}) => theme.sizes.mobile}{
      
    }
  `}
  ${props => props.SalesTeam && css` 
    background: ${({theme}) => theme.colors.primaryblue};
    background-image: linear-gradient(to bottom, hsla(213,81%,21%,1) 10%,hsla(213,81%,21%,.6) 100%);
  `} 
  /***Residential Repair***/
  ${props => props.Repair && css`
    background: ${({theme}) => theme.colors.body};
    position: relative;
  `}
  ${props => props.TimeToService && css` 
    background: ${({theme}) => theme.colors.primaryblue};
    overflow:hidden;
  `} 
  ${props => props.HitDoor && css` 
    background: ${({theme}) => theme.colors.body};
    position: relative;
    overflow:hidden;
  `} 
  /***Areas Serviced***/
  ${props => props.AreasOpening && css` 
    background-image: linear-gradient(to bottom, hsla(213,81%,21%,1) 10%,hsla(213,81%,21%,.6) 100%);
  `}
  ${props => props.ServiceAreas && css` 
    background: ${({theme}) => theme.colors.body};
  `}
  /***Gallery***/
  ${props => props.GallerySection && css`
    background:${({theme}) => theme.colors.primaryblue};
  `} 
  /***Contact***/
  ${props => props.Contact && css`
    background:${({theme}) => theme.colors.body};
    overflow: hidden;
  `}
  ${props => props.Map && css`
    background:${({theme}) => theme.colors.body};
  `}
  /***Reviews***/
  ${props => props.Reviews && css`
    background:${({theme}) => theme.colors.primaryblue};
    overflow: hidden;
  `}
  ${props => props.ReviewSection && css`
    background-image: linear-gradient(to bottom, ${({theme}) => theme.colors.primaryblue}, ${({theme}) => theme.colors.body});
    overflow: hidden;
    padding: 0em 0em 5em 0em !important;
  `}
  /*404 Not Found Page*/
  ${props => props.NotFound && css`
    background:${({theme}) => theme.colors.primaryblue};
    overflow: hidden;
    min-height:100vh;
  `}
  /*Universal Sections Duplicated Throughout Site*/
  ${props => props.Products && css`
    width:100%;
    height:auto;
    padding: 0em 0em 5em 0em;
    grid-template-columns:inherit;
    grid-template-rows: 1fr;
    background: ${({theme}) => theme.colors.primaryblue};
    gap: 1em 1em;
    overflow:hidden;
  `} 

  ${props => props.RightCompany && css`
      padding: 0em 0em 5em 0em;
      grid-template-columns: inherit;
      grid-template-rows: auto auto;
      gap: 2.5em 2em;
      position:relative;
      background:${({theme}) => theme.colors.body};
      overflow: hidden;
      
      &.about-us{
        background:${({theme}) => theme.colors.primaryblue};
      }
  `}

  ${props => props.ContactUsSection && css`
    grid-template-rows: 1fr;
    grid-template-columns: inherit;
    background:${({theme}) => theme.colors.body};
    gap: 0em 2em;
    padding: 10em 0em;
    overflow: hidden;
    
    @media ${({theme}) => theme.sizes.largeTablet}{
      gap:3em 1em;
      padding: 3em 0 0 0;
    }}
  `}
  ${props => props.SymptomsSection && css`  
    grid-auto-rows: auto;
    grid-template-columns: inherit;
    background: ${({theme}) => theme.colors.body};
    gap: 3em 2em;
    padding: 3em 0em;
    overflow:hidden;

    @media ${({theme}) => theme.sizes.tablet}{
      gap: 1em 1em;
    }
    @media ${({theme}) => theme.sizes.mobile}{
      gap: 1em 1em;
    }
  `}
  ${props => props.SectionGrid && css`
    grid-auto-rows: auto;
    grid-template-columns: inherit;
    padding: 3.5em 0em;
    gap: 3em 1em;
    &.no-padding{
      padding: 0;
    } 
    @media ${({theme}) => theme.sizes.largeTablet}{
      gap: 2em 1em;
    } 
    @media ${({theme}) => theme.sizes.tablet}{
      gap: 3em 1em;
    } 
    @media ${({theme}) => theme.sizes.mobile}{
      gap: 2em 1em;
    }
  }

  `}
  ${props => props.ImagesPanel && css`
    grid-template-columns: inherit;
    grid-template-rows: auto auto 3em; 
    background: ${({theme}) => theme.colors.body};
    gap: 3em 3em;
    overflow:hidden;
    
    @media ${({theme}) => theme.sizes.tablet}{
      grid-template-rows: auto auto 1fr auto 3em; 
      gap: 2em 2em;
    }
  `}
  /*****Media queries that include props for placement*****/ 
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