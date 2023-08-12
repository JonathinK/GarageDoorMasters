import styled from 'styled-components';

export const SymptomsWrapper = styled.div` 
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items:center;
  background: ${({theme}) => theme.colors.body};
  gap: 1.5em 0;
  padding: 1.5em 1.5em;
  border-radius: 1em;
  border: none;
  position: relative;

  ${({styledVariant}) => {
      switch (styledVariant) {
        case 'no-background':
          return`
          background: transparent;
          border: 4px solid white;
          `;
          case 'opener':
          return`
          `;
        default:
          return'';
      }
    }}
    @media ${({theme}) => theme.sizes.mobile}{
      ${({styledVariant}) => {
      switch (styledVariant) {
        case 'no-background':
          return`
          background: transparent;
          border: 4px solid white;
          `;
          case 'opener':
          return`
            padding:0;
          `;
        default:
          return'';
      }
    }}
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
  }
`