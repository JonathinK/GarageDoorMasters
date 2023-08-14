import styled,{css} from "styled-components";
import { SubTitle } from "./Typography";

export const ServiceCard = styled.div`
  background: ${({theme}) => theme.colors.white};
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 20%;
  border-radius: 1em;
  overflow:hidden;
  padding: 2em;
  justify-content: center;
  align-items:center;
  

  @media ${({theme}) => theme.sizes.desktop}{
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    flex: 1 1 40%;
    padding: 2em;
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    flex: 1 1 40%;
    padding: 1em;
  }
  @media ${({theme}) => theme.sizes.tablet}{
    flex-flow: column nowrap;
    justify-content: center;
    align-items:center;
    text-align: center;
    padding: 2em;
    gap:1em 1.5em;
    height: auto;
    min-width: 260px;
  }
  @media ${({theme}) => theme.sizes.mobile}{
   flex-flow: column nowrap; 
   border-radius: 1em;
   justify-content:center;
   align-items:center;
   overflow: hidden;
   height: auto;
   padding: 2em 2em;
   text-align:center;
   min-width: 150px;
  }

  ${props => props.ServicesCard && css`
    gap: 1em 1em;
    width:100%;
    background: ${({theme}) => theme.colors.primaryblue};
    
    box-shadow: 0px .5em .5em 0px rgba(0, 0, 0, 0.33), 
                0px 1em 1em 0px rgba(0, 0, 0, 0.22), 
                8px 8px 4px 0px rgba(0, 0, 0, 0.44) inset, 
                -8px -8px 4px 0px rgba(0, 0, 0, 0.44) inset;
  `}
  ${props => props.ResidentialCard && css` 
      background:${({theme}) => theme.colors.body};
      box-shadow: 0em 1em 1em rgba(0,0,0,.22),
                  0em .5em .5em rgba(0,0,0,.33), 
                  0em 0em .5em .5em rgba(0,0,0,.5) inset;
      gap: 1.5em 1em;
      padding:2em;
      justify-content: space-between;
      align-items:flex-start;

    @media ${({theme}) => theme.sizes.desktop}{
      align-items: flex-start;
      justify-content: space-between;
      padding: 2.5em;
    }
    @media ${({theme}) => theme.sizes.largeTablet}{
      align-items: flex-start;
      justify-content: space-between;
      padding: 2.5em;
    }
    @media ${({theme}) => theme.sizes.tablet}{ 
      align-items: flex-start;
      justify-content: space-between;
      text-align:left;
      padding: 2.5em; 
      gap:1em 1em;   
      flex-flow: row wrap;
    }
    @media ${({theme}) => theme.sizes.mobile}{
      padding: 1.5em;
      align-items: center;
      justify-content: center;
      text-align:center;
      ${SubTitle}{
        text-align:center;
        width:100%;
      }
    }
  `} 
  `