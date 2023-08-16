import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FooterBottomBar, FooterContainer, FooterLink, FooterText, HoursContainer,  FooterFlex, SvgWrapper, ImageWrapper, TextWrapper, Headline, SubTitle, NavLink } from '../styles';
import { StaticImage } from 'gatsby-plugin-image';
import { SocialLinks } from '../components/social-links';
import FooterSvg from '../svg/assets/main-wave.svg';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          businessLicense
          phone
          title
          author
          businessEmail
          businessHours {
            day
            time
          }
          navigationLinks{
            name
            link
          }
          bbbProof
        }
      }
    }
  `)
  const businessLicense = data.site.siteMetadata.businessLicense;
  const companyName = data.site.siteMetadata.title;
  const contactNumber = data.site.siteMetadata.phone;
  const operationHours = data.site.siteMetadata.businessHours;
  const contactEmail = data.site.siteMetadata.businessEmail;
  const siteAuthor = data.site.siteMetadata.author;
  const footerLinks = data.site.siteMetadata.navigationLinks;
  const bbbLink = data.site.siteMetadata.bbbProof;

  
  return(
    <FooterContainer>
    {/*Svg Container*/}
      <SvgWrapper
      XLC="1/15"
      XLR="1/2"
      LC="1/15"
      LR="1/2"
      MC="1/11"
      MR="1/2"
      SC="1/9"
      SR="1/2"
      XSC="1/7"
      XSR="1/2"
      FooterSvg
      > 
        <FooterSvg/>
      </SvgWrapper>

    {/*Logo Wrapper*/}
      <ImageWrapper
        XLC="7/9"
        XLR='1/2'
        LC="7/9"
        LR="1/2"
        MC="5/7"
        MR="1/2"
        SC="3/7"
        SR="1/2"
        XSC="3/5"
        XSR="1/2"
        FooterLogo
      >
      <NavLink to="/" title='Homepage Link'>
        <StaticImage
          src="../images/Logo.png"
          alt="Garage Door Masters Logo"
          layout="fullWidth"
          quality={70}
          placeholder='blurred'
        />
      </NavLink>
      </ImageWrapper>

    {/*Headline Text Wrapper */}
      <TextWrapper
        XLC="4/12"
        XLR="2/3"
        LC="4/12"
        LR="2/3"
        MC="3/9"
        MR="2/3"
        SC="2/8"
        SR="2/3"
        XSC="2/6"
        XSR="2/3"
        FlexCenter
        TextAlignCenter
      >
        <SocialLinks/>
        <Headline>{companyName}</Headline>
        <SubTitle variant="primary">Install & Repair Garage Doors and Openers</SubTitle>
      </TextWrapper>

    {/*Informational Text Wrapper*/}
      <TextWrapper
        XLC="4/12"
        XLR="3/4"
        LC="4/12"
        LR="3/4"
        MC="2/10"
        MR="3/4"
        SC="2/8"
        SR="3/4"
        XSC="2/6"
        XSR="3/4"
        FlexCenter
        TextAlignCenter
      >
        <FooterText><strong>Fully Licensed & Insured: </strong>{businessLicense}</FooterText>
        <FooterText>Brick, NJ</FooterText>
        <FooterLink href="tel:{contactNumber}">{contactNumber}</FooterLink>
        <FooterLink href="mailto:{contactEmail}">{contactEmail}</FooterLink>
      </TextWrapper>

    {/*Hours Wrapper*/} 
      <TextWrapper
        XLC="2/14"
        XLR="4/5"
        LC="2/14"
        LR="4/5"
        MC="2/10"
        MR="4/5"
        SC="2/8"
        SR="4/5"
        XSC="2/6"
        XSR="4/5"
        GridAlignCenter
        FlexCenter
        TextAlignCenter
      >
        <SubTitle variant="primary">Hours</SubTitle>
        <HoursContainer>
          {operationHours.map(({ day, time }) => (
            <FooterText key={day}><strong>{day}</strong>: {time}</FooterText>
          ))}
        </HoursContainer>
      </TextWrapper>

    {/*BBB and credit card flex*/}
      <FooterFlex PaymentBBBFlex>
        <ImageWrapper BBBImage>
        <FooterLink href={bbbLink}>
          <StaticImage
            src="../images/bbb-rating.png"
            alt='better business bureau rating A+'
            layout="fullWidth"
            placeholder='blurred'
            quality={70}
          />
        </FooterLink>   
        </ImageWrapper>
        <TextWrapper FlexCenter TextAlignCenter>
          <SubTitle variant="primary">We accept cash, check & all major credit cards</SubTitle>
          <ImageWrapper PaymentMethod>
            <StaticImage 
              src="../images/Cards.png"
              quality={70}
              alt=" Credit cards display"
              placeholder='blurred'
              layout="fullWidth"
            />
          </ImageWrapper>
        </TextWrapper>
      </FooterFlex>
    {/*Footer Links*/}
      <FooterFlex FooterLinks>
        {footerLinks.map((component,index) => {
          return (
            <NavLink to={component.link} key={index}>{component.name}</NavLink>
          )
        })}
      </FooterFlex>
    {/*Footer Bottom Container*/}
      <FooterBottomBar>
        <FooterText className="copyrightText">
          © {new Date().getFullYear()} &middot; Garage Door Masters &middot; All Rights Reserved
        </FooterText>
        <FooterText className="designedBy">
          <strong>Designed By: </strong>
          {siteAuthor}
        </FooterText>
      </FooterBottomBar>    
    </FooterContainer>
  )
}
export default Footer