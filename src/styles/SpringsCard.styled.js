import styled from 'styled-components';

export const SpringCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items:center;
  background:${({theme}) => theme.colors.white};
  border-radius: 2em;
  position:relative;
  box-shadow: 0em 2em 2em -.5em rgba(0,0,0,.32),
              0em 0em .5em .8em rgba(0,0,0,.2) inset;
  overflow: hidden;
  padding:2.5em;
  
  :before{
    content: '';
    position:absolute;
    bottom: 0;
    left:0;
    height: 20%;
    width:100%;
    background: ${({theme}) => theme.colors.primaryblue};
    box-shadow: 0em 0em 1em .8em rgba(0,0,0,0) inset, 
                0em -1em 1em .5em rgba(0,0,0,.3) inset; 
  }

  @media ${({theme}) => theme.sizes.mobile}{
    padding: 1.5em;
    border-radius: .5em;
    box-shadow: 0em .5em 1em rgba(0,0,0.22),
                0em .25em .25em rgba(0,0,0,.33),
                0em 0em .5em .5em rgba(0,0,0,.4) inset; 

    :before{
      height: 15%;
      box-shadow: 0em 0em .5em .5em rgba(0,0,0,0) inset, 
                0em -.5em .5em .5em rgba(0,0,0,.3) inset; 
    }
  }
`