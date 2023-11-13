import styled from 'styled-components';

export const FormWrapper = styled.div` 
  background: ${({theme}) => theme.colors.white};
  position: relative;
  z-index:3;
  margin: 3em 0;
  padding: 2em;
  border-radius: 1em;
  box-shadow: 0em 1em 2.5em .5em rgba(0,0,0,.32), 0 0 1em rgba(0,0,0,.25) inset;
  overflow:hidden;
  
 & .contact_us_form{
    display:flex;
    flex-flow: column nowrap;
    gap:2em;
    height:auto;
    justify-self:stretch;
    align-self:stretch;
  }
  .input_wrapper{

  }

  label{
    display:flex;
    flex-flow: column nowrap;
    gap:.5em;
    font-size: ${({theme}) => theme.fontSize.milli};
    font-family: ${({theme}) => theme.fonts.mono};
    input{
      font-size: 1em;
      padding: 1em 1em;
      border-radius: 1em;
      border: none;
      background-color: rgba(247,247,247,.6);
      font-family:${({theme}) => theme.fonts.body};
      
      ::placeholder{
        font-size: ${({theme}) => theme.fontSize.micro};
        font-weight:${({theme}) => theme.fontweight.regular};
        transition: all .5s ease;
      }
      :focus::placeholder{
        font-size: ${({theme}) => theme.fontSize.micro};
      }    
    }
  }
  textarea{
    padding:1em;
    resize: none;
    overflow-y: auto;
    border-radius: 1em;
    border: none;
    width:auto;
    flex: 1 0 10em;
    background-color: rgba(247,247,247, .6);
    ::placeholder{
      transition: all .5s ease;
      font-size: ${({theme}) => theme.fontSize.micro};
      font-family: ${({theme}) => theme.fonts.body};
    }
    :focus::placeholder{
      color: black;
      transition: all .5s ease;
    }
  }
  .button_wrapper{
    button{
      width: 100%;
      padding: 1em 0em;
      border: none;
      border-radius: .5em;
      overflow:hidden;
      cursor: pointer;
      transition: all 1s ease-in-out;
      color: ${({theme}) => theme.colors.white};
      font-family: ${({theme}) => theme.fonts.mono};
      text-transform: ${({theme}) => theme.fontCasing.upper};
      font-size: ${({theme}) => theme.fontSize.micro};
      font-weight: ${({theme}) => theme.fontweight.bold};
      text-align:center;
      position: relative;
      background-color: ${({theme}) => theme.colors.primaryblue};
      @media ${({theme}) => theme.sizes.hover}{
        :hover{
          box-shadow: 0em 1.5em 1.5em -1em rgba(0,0,0,.45);
          background-color: ${({theme}) => theme.colors.primaryblue_shade};
        }
      }
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