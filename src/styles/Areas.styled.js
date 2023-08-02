import styled from "styled-components";

export const ListWrapper = styled.ul`
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2em 1em;
`

export const ListItem = styled.li`
  font-family: ${({theme}) => theme.fonts.mono};
  font-size: ${({theme}) => theme.fontSize.milli};
  background:${({theme}) => theme.colors.white};
  box-shadow: 0em 1em 1em -.5em rgba(0,0,0,.3);
  text-align:center;
  list-style:none;
  padding: 1em 2em;
  flex: 1 1 auto;
  border-radius: .5em;
 
`