import styled from "styled-components";

//Socials wrapper
export const SocialsWrapper = styled.div`
 width: fit-content;
 display: flex;
 flex-flow: row nowrap;
 justify-content: center;
 align-items: center;
 gap: .5em;

`
export const SocialLink = styled.a`
 text-decoration: none;
 padding:.5em;
 background: ${({theme}) => theme.colors.primaryblue_shade}; border-radius: .5em;
 
 :hover{
  background: ${({theme}) => theme.colors.primaryblue_shade};
  box-shadow: 0em .1em .4em rgba(0,0,0,.22);
  
 }
`
