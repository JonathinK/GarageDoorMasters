import styled from 'styled-components';

export const Video = styled.div`
  width:100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  border: none;
  border-radius: 1em;
  box-shadow: 0em 1em 1em -.5em rgba(0,0,0,.32);
  

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
`;

export const Iframe = styled.iframe`
  position: absolute;
  border: none;
  border-radius: 1em;
  box-shadow: 0em 1em 1em -.5em rgba(0,0,0,.32);
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  width: 100%;
  height: 100%;
`;