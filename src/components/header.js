import React, { useState, useEffect } from 'react';
import { Branding, HeaderContainer, LogoWrapper, NavLink } from '../styles';
import { InfoBar } from './header-info-bar';
import { StaticImage } from 'gatsby-plugin-image';
import { Navigation } from './navigation';

const Header = () => {
  const  [scrolled, setScrolled] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 80 && !scrolled) {
      setScrolled(true);
    } else if (scrollY === 0 && scrolled) {
      setScrolled(false);
    }
  };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return( 
    <HeaderContainer scrolled={scrolled}>
      <InfoBar/>
      <Branding>
      <NavLink to="/" title="Homepage" className="logo">
      <LogoWrapper scrolled={scrolled}>
          <StaticImage 
            src="../images/Logo.webp"
            alt="Garage Door Masters Logo"
            placeholder="blurred"
            quality={50}
            breakpoints={[430,768,1024,1920]}
            formats={['auto','webp']}
            layout='fullWidth'
          />
      </LogoWrapper>
      </NavLink>
      </Branding>
      <Navigation/>
    </HeaderContainer>
  )
} 

export default Header