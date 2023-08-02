import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { DesktopNav } from './desktop-nav-menu';
import { MobileNav } from './mobile-nav-menu';

export const Navigation = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          navigationLinks{
            name
            link
          }
          phone
        }
      }
    }
  `)
  
  return(
   <>
    <DesktopNav data={data}/>
    <MobileNav data={data}  />
   </>
  )
}