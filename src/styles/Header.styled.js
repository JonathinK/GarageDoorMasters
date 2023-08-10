import styled from "styled-components";
import { SocialsWrapper } from "./SocialLinks.styled";



//Header Container 
export const HeaderContainer = styled.header`
  display:grid;
  grid-template-columns: inherit;
  grid-template-rows: 48px 96px;
  gap: .5em 2em;
  background: transparent;
  position: fixed;
  z-index: 50;
  width:100%;

  @media ${({theme}) => theme.sizes.largeTablet}{
    gap: .5em 1.5em;
    grid-template-rows: 48px 80px;
  }@media ${({theme}) => theme.sizes.tablet}{
    gap: .5em 1em;
    grid-template-rows: 48px 64px;
  }
  }@media ${({theme}) => theme.sizes.mobile}{
    gap: .5em .5em;
    grid-template-rows: 48px 40px;
    background: ${({theme}) => theme.colors.primaryblue};
    position: fixed;
    width: 100%;
    top:0;
    left: 0;
    grid-column: 1/7;
  }
  } 

  :before{
    position:absolute;
    height: 100%;
    width: 100%;
    content: '';
    background: ${({theme}) => theme.colors.primaryblue};
    transform: ${({scrolled}) => (scrolled ? 'scaleY(1)':'scaleY(0)')};
    transform-origin: top;
    transition: transform .5s ease;
  } 
  
`
//Top bar that houses contact number and socials
//These will change when the mobile device is the device being used
export const TopBar = styled.div`
  grid-column: 2/14;
  grid-row: 1/2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items:center;

  width: 100%;
  position:relative;

  :before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.colors.primaryblue};
    transform: translateX(-50%) scaleX(4);
  }
  ${SocialsWrapper}{
    position: relative;
    z-index: 50;
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-column: 2/10;
  }@media ${({theme}) => theme.sizes.tablet}{
    grid-column: 2/8;
    justify-content: center;
    ${SocialsWrapper}{
      display: none;
    }
  }@media ${({theme}) => theme.sizes.mobile}{
    grid-column: 2/6;
    overflow:hidden;
  }
`
export const MobileMenuBar = styled(TopBar)`

`
//Contact wrapper
export const ContactWrapper = styled.div`
  position: relative;

  display:flex;
  flex-flow:row nowrap;
  justify-content: center;
  align-items:center;
  gap: 0 .5em;
  font-family: ${({theme}) => theme.fonts.mono};
  color: ${({theme}) => theme.colors.white};

  & div{
    display: inherit;
    flex-flow:inherit;
    justify-content:inherit;
    align-items:inherit;
    gap: inherit;  
    background: ${({theme}) => theme.colors.primaryblue_shade};
    padding: .5em;
    border-radius:.5em;
    box-shadow: 0em .1em .5em -.05em rgba(0,0,0,.2);
    transition: all .5s ease-in-out;
    :hover{
      background: ${({theme}) => theme.colors.accentred};
    }
  }
  a{
    text-decoration:none;
    color: ${({theme}) => theme.colors.white};
    font-size: clamp(.8em, 3.5vw, 1em);
  }
`
export const Branding = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  justify-self: center;
  align-self:flex-start;
`
//Logo and Company Name go here
export const LogoWrapper = styled.div`
  width: 96px;
  
  @media ${({theme}) => theme.sizes.desktop}{
    width: 96px;
  }@media ${({theme}) => theme.sizes.largeTablet}{
    width: 80px;
  }@media ${({theme}) => theme.sizes.tablet}{
    width: 64px;
  }@media ${({theme}) => theme.sizes.mobile}{
    width: 40px;
  }
`
