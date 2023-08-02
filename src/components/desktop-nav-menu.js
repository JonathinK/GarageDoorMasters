import React from 'react';
import { DesktopNavigationWrapper, NavLink, NavLinkItem, NavLinkList } from '../styles';
import { Location } from '@reach/router';

export const DesktopNav = ({ data }) => {
  const NavLinks = data.site.siteMetadata.navigationLinks;
  return(
    <DesktopNavigationWrapper>
    <NavLinkList>
      <Location>
        {({ location }) => {
          return (
            <>
              {NavLinks.map((links) => (
                <NavLinkItem key={links.name}>
                  <NavLink
                    to={links.link}
                    activeClassName="active" // Add the "active" class when the pathname matches
                    partiallyActive={links.link !== '/'} // For the homepage, use partiallyActive
                  >
                    {links.name}
                  </NavLink>
                </NavLinkItem>
              ))}
            </>
          );
        }}
      </Location>
    </NavLinkList>
  </DesktopNavigationWrapper>
  );
}