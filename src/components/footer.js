import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FooterBottomBar, FooterContainer, FooterInfoContainer, FooterLink, FooterText, FooterTitle, HoursContainer, PaymentsContainer, FooterFlex } from '../styles';
import { StaticImage } from 'gatsby-plugin-image';
import { ContentfulIcon, GatsbyIcon } from '../styles/Icons.styled';
import { SocialLinks } from '../components/social-links';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          businessLicense
          phone
          businessHours {
            day
            time
          }
          title
        }
      }
    }
  `)
  const businessLicense = data.site.siteMetadata.businessLicense;
  const companyName = data.site.siteMetadata.title;
  const contactNumber = data.site.siteMetadata.phone;
  const operationHours = data.site.siteMetadata.businessHours;

  
  return(
    <FooterContainer>
    <FooterFlex MainFooterFlex>
      <FooterInfoContainer>
        <div className="logo-wrapper">
          <StaticImage
            src="../images/Logo.png"
            layout="fullWidth"
            placeholder='blurred'
            alt='Logo'
            quality={70}
          />
        </div>
      <FooterFlex InfoFlex> 
        <FooterTitle>{companyName}</FooterTitle>
        <FooterText>Fully Licensed & Insured</FooterText>
        <FooterText>{businessLicense}</FooterText>
        <FooterText>BRICK, NJ</FooterText> 
        <FooterLink href='tel:{contactNumber}'>{contactNumber}</FooterLink> 
        <SocialLinks/>
      </FooterFlex>   
     </FooterInfoContainer>
     <HoursContainer>
      <FooterTitle>Hours</FooterTitle>
      {operationHours.map(({ day, time }) => (
        <FooterText key={day}>{day}: {time}</FooterText>
      ))}
     </HoursContainer>
     <PaymentsContainer>
        <FooterText>We accept cash, check and all major credit cards</FooterText>
        <div>
        <StaticImage 
          src="../images/Cards.png"
          quality={70}
          alt=" Credit cards display"
          placeholder='blurred'
          layout="fullWidth"
        />
      </div>
     </PaymentsContainer>
    </FooterFlex>
    <FooterBottomBar>
      <FooterFlex PoweredByFlex>
      <FooterTitle>Powered By:</FooterTitle>
      <GatsbyIcon/>
      <FooterText>Gatsby</FooterText> 
      <hr/>
      <ContentfulIcon/>
      <FooterText>Contentful</FooterText>
      </FooterFlex>
      <FooterFlex CopyrightFlex>
      <FooterText>
        © {new Date().getFullYear()} &middot; Garage Door Masters &middot; All Rights Reserved
      </FooterText>
      </FooterFlex>
      <FooterFlex DesignedByFlex>
        <FooterTitle>
          Designed by:
        </FooterTitle>
        <FooterText>
          Diamond Digital Services
        </FooterText>
      </FooterFlex>
    </FooterBottomBar>
    </FooterContainer>
  )
}
export default Footer