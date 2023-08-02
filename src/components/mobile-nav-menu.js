import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Hamburger, ImageWrapper, MobileNavLink, MobileNavLinkList, MobileNavListItem, MobileNavigationWrapper, MobileSlideOut, SvgWrapper } from '../styles';
import { SocialLinks } from './social-links';
import NavWave from '../svg/assets/main-wave.svg'; 
import { StaticImage } from 'gatsby-plugin-image';
import { useRef } from 'react';


export const MobileNav = ({data}) => {
  //Gets Links
  const MobileNavLinks = data.site.siteMetadata.navigationLinks;
  //State Management
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  //Handles Menu Toggle
  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  }
  const menuToggleClose = () => {
    setMenuOpen(false);
  }
  
//Handles the noScroll event on the body when the menu is open and closed
  useLayoutEffect(() => {
    const handleToggleNoScroll = () => {
      const body = document.body;
      if (menuOpen) {
        body.style.overflowY = 'hidden';
        body.style.position = 'fixed';
        body.style.width = '100%';
      } else {
        body.style.overflowY = 'auto';
        body.style.position = 'relative';
      }
    };

    handleToggleNoScroll();

    // Clean up the effect to restore original body styles when the component unmounts
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.position = 'relative';
    };
  }, [menuOpen]);

//Handles the menu closing on route change when a user clicks a navigation link
//Also handles the menu closing on page resizing
  useEffect(() => {
    // Close the menu when a link is clicked
    const handleLinkClick = (event) => {
      // Check if the clicked element is a link inside the menu
      if (menuRef.current && menuRef.current.contains(event.target) && event.target.tagName === 'A') {
        setMenuOpen(false);
      }
    };

    // Close the menu when the page is resized
    const handleResize = () => {
      setMenuOpen(false);
    };

    // Add event listeners to handle link clicks and page resize
    document.addEventListener('click', handleLinkClick);
    window.addEventListener('resize', handleResize);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <MobileNavigationWrapper ref={menuRef}>
     <Hamburger onClick={menuToggle}>
        <div/>
        <div/>
        <div/>
     </Hamburger>
     <MobileSlideOut menuOpen={menuOpen}>
     <ImageWrapper
      NavigationMenuLogo
      MC="1/2"
      MR="1/3"
     >
      <StaticImage
        src="../images/Logo.png"
        alt='Garage Door Masters Logo'
        layout="fullWidth"
        quality={90}
        className= "image-scale"
      />
     </ImageWrapper>
     <SvgWrapper
      navigationSvg
      MC="1/2"
      MR="1/2" 
    >
      <NavWave/>
     </SvgWrapper>
     <SvgWrapper
      navigationSvg
      MC="1/2"
      MR="3/4"
      className='flipped'
     >
      <NavWave/>
     </SvgWrapper>
     <button 
      className="close"
      aria-hidden="true" 
      onClick={menuToggleClose}
      > 
     </button>
     <SocialLinks/>
      <MobileNavLinkList>
        {MobileNavLinks.map((link,index) => {
          return (
            <MobileNavListItem key={index}>
              <MobileNavLink to={link.link}>
                {link.name}
              </MobileNavLink>
            </MobileNavListItem>
          )
        })}
     </MobileNavLinkList>
     </MobileSlideOut>
     
    </MobileNavigationWrapper>
  )
}