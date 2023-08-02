import styled from "styled-components";
import { Link } from "gatsby";
import { SocialsWrapper } from "./SocialLinks.styled";

//Desktop Navigation Styles
export const DesktopNavigationWrapper = styled.nav`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  position:relative;
  z-index:51;

  grid-column: 3/14;
  grid-row: 2/3;
  @media ${({theme}) => theme.sizes.largeTablet}{
    display: none;
  }@media ${({theme}) => theme.sizes.tablet}{
    display:none;
  }@media ${({theme}) => theme.sizes.mobile}{
    display:none;
  }
`
export const NavLinkList = styled.ul`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap: 0em 1em;
`
export const NavLinkItem = styled.li`
  list-style: none;
  
`
export const NavLink = styled(Link)`
 text-decoration: none;
 font-family: ${({theme}) => theme.fonts.mono};
 font-size: ${({theme}) => theme.fontSize.milli};
 font-weight: ${({theme}) => theme.fontweight.bold};
 color: ${({theme}) => theme.colors.white};
 &.logo{

 }
`


//Mobile Navigation Styles
export const MobileNavigationWrapper = styled.nav`
  display:flex;
  justify-content: flex-end;
  align-items:center;
  width: 100%;
  height: 100%;

  @media ${({theme}) => theme.sizes.largeDesktop}{
    display:none;
  }@media ${({theme}) => theme.sizes.desktop}{
    display:none;
  }@media ${({theme}) => theme.sizes.largeTablet}{
    display:flex;
    grid-row: 2/3;
    grid-column: 9/10;
  }@media ${({theme}) => theme.sizes.tablet}{
    grid-column: 7/8;
  }@media ${({theme}) => theme.sizes.mobile}{
    grid-column: 5/6;
  }
`
export const Hamburger = styled.button`
  height: 40px;
  width:40px;
  background:transparent;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center;
  cursor: pointer;
  gap:.25em 0;
  border-radius: .25em;
  background: ${({theme}) => theme.colors.primaryblue};
  box-shadow: 0px 4px 4px rgba(0,0,0,.22),
              0px 2px 2px rgba(0,0,0,.33),
              0px 0px 1px 1px rgba(0,0,0,.33) inset;
  
  div{
    background: ${({theme}) => theme.colors.white};
    width: 60%;
    height: 4px;
    border-radius: .5em;
  }
  div:first-child{
    width:40%;
  }
  div:last-child{
    width:40%;
  }
  
`
export const MobileSlideOut = styled.div`
/*Default styles */
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: .3fr 1fr .3fr;
 justify-content: center;
 align-items:center;
 position: fixed;
 top:0;
 right:0;
 z-index:51;
 height:100%;
 width: 520px;
 background: ${({theme}) => theme.colors.primaryblue};
 overflow: hidden;
 transform: ${({menuOpen}) => (menuOpen ? 'translateX(0) scale(1)' : 'translateX(100%) scale(.1)')};
 transform-origin: right center;
 transition: transform 1s ease-in-out;
  /* Socials Wrapper Import */
    ${SocialsWrapper}{
      position: relative;
      z-index:51;
    }

  
   
  /*Close Styles For Custom Placement*/  
  & .close{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items:center;
      cursor: pointer;
      border:none;
      width: 2.5em;
      height: 2.5em;
      background: ${({theme}) => theme.colors.accentred};
      position: absolute;
      z-index: 52;
      top:0;
      right: 0;
      transform: translate(-2em, 2em);
      border-radius: .2em;
      box-shadow: 0em .125em .125em rgba(0,0,0,.33),
                  0em .25em .25em rgba(0,0,0,.22),
                  .125em .125em .15em rgba(0,0,0,.7) inset,  
                  -.125em -.125em .15em rgba(0,0,0,.7) inset; 
      @media ${({theme}) => theme.sizes.hover}{
        opacity: .7;
        :hover{
          opacity: 1;
        }
      }
      
      :before, :after{
        position: absolute;
        left: 14.835px;
        content: ' ';
        height: 24px;
        width: 4px;
        border-radius: .25em;
        background-color: ${({theme}) => theme.colors.white};
      }
      :before{
       transform: rotate(45deg);
      }
      :after{
        transform: rotate(-45deg);
      }
  }
 @media ${({theme}) => theme.sizes.largeTablet}{
 
  ${SocialsWrapper}{
    grid-row:3/4;
    grid-column:1/2;
    justify-self:center;
    align-self:end;
    gap:2.5em;
    margin-bottom: 12%;
    
    & a{
      svg{
        width: 32px;
        height: 32px;
      }
      box-shadow: 0em .5em .5em  rgba(0,0,0,.33), 0em 1em 1em rgba(0,0,0,.22);
    }
  }
 }@media ${({theme}) => theme.sizes.tablet}{
 
  ${SocialsWrapper}{
    gap:2em;
  }
 }@media ${({theme}) => theme.sizes.mobile}{
    width:100%;
  ${SocialsWrapper}{
    gap:2em;
  }
 }
`
export const MobileNavLinkList = styled(NavLinkList)`
  display: flex;
  flex-flow: column nowrap;
  gap:2em;
  position: relative;
  z-index: 52;
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-column:1/2;
    grid-row: 2/3;
  }@media ${({theme}) => theme.sizes.tablet}{
    
  }@media ${({theme}) => theme.sizes.mobile}{
    
  }
`
export const MobileNavListItem = styled(NavLinkItem)`

`
export const MobileNavLink = styled(NavLink)`
  font-size: ${({theme}) => theme.fontSize.h5};
  text-transform: ${({theme}) => theme.fontCasing.upper};
`

