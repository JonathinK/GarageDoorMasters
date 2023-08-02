import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  ContactWrapper,
  TopBar
} from '../styles';
import { SocialLinks } from "../components/social-links";
import { PhoneIcon } from '../styles/Icons.styled'
export const InfoBar = () => {
const data = useStaticQuery(graphql`
  query {
    site{
      siteMetadata {
        phone
      }
    }
  }
`)
const contactNumber = data.site.siteMetadata.phone;
  return(
    <TopBar>
      <ContactWrapper>
        <p>Call | Text Today:</p>   
        <div>
        <PhoneIcon/> 
        <a href='tel:{contactNumber}'>{contactNumber}</a>
        </div>
      </ContactWrapper>
      <SocialLinks/>
    </TopBar>
  )
}