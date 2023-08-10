import styled, { css } from "styled-components";


export const Button = styled.div`
  padding:1em 2em;
  border-radius: .5em;
  border:none;
  overflow:hidden;
  cursor: pointer;
  transition: all 1s ease-in-out;

  ${props => props.primary && css`
    background-color: ${({theme}) => theme.colors.accentred};
    border: 1px solid ${({theme}) => theme.colors.accentred};
    box-shadow: 0em .5em .5em rgba(0,0,0,.33),
                0em 1em 1em rgba(0,0,0,.22);
  `}

  ${props => props.secondary && css`
    background-color: ${({theme}) => theme.colors.primaryblue};
    
    &.submit-text{
      color: ${({theme}) => theme.colors.white};
      font-family: ${({theme}) => theme.fonts.mono};
      text-transform: ${({theme}) => theme.fontCasing.upper};
      font-size: ${({theme}) => theme.fontSize.micro};
      font-weight: ${({theme}) => theme.fontweight.bold};
    }
  `}

  ${props => props.Outline && css` 
    background-color: transparent;
    border: 1px solid white;
    position: relative;
    :before{
          content:'';
          position:absolute;
          z-index:0;
          width: 100%;
          height: 100%;
          left:0;
          top:0;
          background-color: transparent;
          transform: scale(0);
          transform-origin: top left;
          transition: all .25s ease-in-out;
        }
  `}

  ${props => props.FullWidthButton && css`
      flex: 0 1 auto;
      width: 100%;
  `}
  
  @media ${({theme}) => theme.sizes.hover}{
    &.no-animation{
      :hover{
        scale:1;
      }
    }
    :hover{
      ${props => props.primary && css`
        background-color: ${({theme}) => theme.colors.accentredshade};
        box-shadow: 0em 1.5em 1.5em -1em rgba(0,0,0,.45);
        scale:1.1;
      `}

      ${props => props.secondary && css`
        background-color: ${({theme}) => theme.colors.primaryblue_shade};
      `}

      ${props => props.Outline && css` 
        box-shadow: 0em 1.5em 1.5em -1em rgba(0,0,0,.45);
        border: 1px solid ${({theme}) => theme.colors.primaryblue_shade};
        :before{
          content:'';
          position:absolute;
          z-index:1;
          width: 100%;
          height: 100%;
          left:0;
          top:0;
          background-color: ${({theme}) => theme.colors.primaryblue_shade};
          transform:scale(1);
        }
      `}
    }
  }
`  