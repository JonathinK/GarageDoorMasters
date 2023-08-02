import React from 'react'
import { Button,ButtonLink, Headline, Section, SubTitle, TextWrapper } from '../styles'

const PageNotFound = () => {
 return(
  <Section NotFound SectionGrid 
    className="no-padding"
    XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
  >
    <TextWrapper
      XLC="4/12" LC="4/12" MC="2/10" SC="2/8" XSC="2/6"
      TextAlignCenter
      GridAlignCenter
      FlexCenter
    >
      <Headline>
        Oh No!     
      </Headline>
      <SubTitle variant="primary">
        You've found a page that doesn't exist.
      </SubTitle>
      <Button Primary><ButtonLink Primary to="/">Return Home</ButtonLink></Button>
    </TextWrapper>
  </Section>
 )
}
export default PageNotFound