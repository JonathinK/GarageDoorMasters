import React from 'react'
import { LayoutContainer } from '../styles/LayoutContainer.styled'
import { Footer } from './footer'
import { Header } from './header'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
      <LayoutContainer>{children}</LayoutContainer>
    <Footer/>
    </>
  )
}
export default Layout