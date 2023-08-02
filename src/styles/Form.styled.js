import styled from 'styled-components';

export const FormWrapper = styled.form` 
  background: ${({theme}) => theme.colors.white};
  position: relative;
  z-index:3;
  margin: 3em 0;
  padding: 3em;
  border-radius: 1em;
  box-shadow: 0em 1em 2.5em .5em rgba(0,0,0,.32), 0 0 1em rgba(0,0,0,.25) inset;
  overflow:hidden;
  display:flex;
  flex-flow: column nowrap;
  gap:2em;
  height:auto;
  justify-self:stretch;
  align-self:stretch;

  label{
    display:flex;
    flex-flow: column nowrap;
    gap:.5em;

    input{
      font-size: 1em;
      padding: 1em 1em;
      border-radius: 1em;
      border: 2px solid black;
      ::placeholder{
        font-size: ${({theme}) => theme.fontSize.micro};
        transition: all .5s ease;
      }
      :focus::placeholder{
        color: black;
        font-size: ${({theme}) => theme.fontSize.milli};  
      }    
    }
  }
  textarea{
    padding:1em;
    resize: none;
    overflow-y: auto;
    border: 2px solid black;
    border-radius: 1em;
    width:auto;
    flex: 1 0 10em;
    font-size: ${({theme}) => theme.fontSize.micro};
    ::placeholder{
      transition: all .5s ease;
    }
    :focus::placeholder{
      color: black;
      font-size: ${({theme}) => theme.fontSize.milli};
      transition: all .5s ease;
    }
  }

  /* Breakpoint Grid Position Prop Handling */
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
    padding: 1.5em;
  }
  `