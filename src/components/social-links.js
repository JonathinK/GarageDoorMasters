import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SocialsWrapper, FacebookIcon, GoogleIcon, SocialLink, NetworkIcon } from '../styles';

export const SocialLinks = () => {
  const data = useStaticQuery(graphql`
   query{
    site{
      siteMetadata {
        socialLinks {
          name
          url
        }
      }
    }
   }
  `)
  const socialLinks = data.site.siteMetadata.socialLinks;
  const getIconComponent = (name) => {
      switch (name) {
        case 'facebook':
          return <FacebookIcon/>;
        case 'google':
          return <GoogleIcon/>;
        case 'networkx':
          return <NetworkIcon/>
        default:
          return null;
      }
    };
  return(
    <SocialsWrapper>
      {socialLinks.map((link) => (
        <SocialLink 
          href={link.url} 
          title={link.name} 
          key={link.name}>
          {getIconComponent(link.name)}
        </SocialLink>
      ))}
    </SocialsWrapper>
  )
}