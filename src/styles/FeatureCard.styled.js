import styled,{css} from "styled-components";

export const FeatureCard = styled.div`
  display:flex;
  flex-flow: row nowrap;
  justify-content:stretch;
  align-items:center;
  flex: 1 1 425px;
  gap: 1em 2em;
  padding: 3em 4em;
  background-color: ${({theme}) => theme.colors.primaryblue};
  border-radius: 10px;
  box-shadow: 0em .5em .5em 0em rgba(0,0,0,.33),
              0em 1em 2em 0em rgba(0,0,0,.22);
              
  transition: all .5s ease;

  @media ${({theme}) => theme.sizes.tablet}{
    flex-flow: column wrap;
    justify-content:flex-start;
    align-items:flex-start;
    padding: 2em 2em;
  }
  p{
    font-size: 1em;
  }

${props => props.AssuranceCard && css`
  padding:0em 1.5em 0em 0em;
  gap:2em;
  border-radius:.5em;
  overflow: hidden;
  flex-flow: row nowrap;
  
  @media ${({theme}) => theme.sizes.largeDesktop}{
    flex-flow: row nowrap;
    flex: 1 1 250px;
    justify-content:flex-start;
    align-items:center;
    padding: 0 1.5em 0 0 ;
  }
  @media ${({theme}) => theme.sizes.desktop}{
    flex-flow: row nowrap;
    justify-content:flex-start;
    align-items:center;
    padding: 0 1.5em 0 0 ;
    flex: 1 1 250px;
    min-width: 270px;
    max-width: 300px;
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    flex-flow: row nowrap;
    justify-content:flex-start;
    align-items:center;
    padding: 0 1.5em 0 0 ;
    flex: 1 1 300px;
    max-width: 360px;
  }

  @media ${({theme}) => theme.sizes.tablet}{
    flex-flow: row nowrap;
    justify-content:flex-start;
    align-items:center;
    padding: 0 1.5em 0 0;
    flex: 1 1 250px;


  }
  @media ${({theme}) => theme.sizes.mobile}{
    flex-flow: row nowrap;
    justify-content:center;
    align-items:center;
    padding: 0 1.5em 0 0 ;
  }
`}
`