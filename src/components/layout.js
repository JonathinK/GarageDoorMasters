import React from 'react';
import { LayoutContainer } from "../styles";
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return(
    <LayoutContainer>
      <Header/>
      {children}
      <Footer/>
    </LayoutContainer>
  )
}
export default Layout;