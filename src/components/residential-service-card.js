import React from 'react';
import { Button, ButtonLink, ServiceCard, TextWrapper, SubTitle  } from '../styles';
import { TextBlockRender } from './text-block-render';
export const ResidentialServicePageCard = ({ content }) => {

  return(
    <ServiceCard ResidentialCard>
      <TextWrapper ResidentialServiceCardText>
        <SubTitle ServiceCardSub className="red-color">{content.title}</SubTitle>
        <TextBlockRender content={content}/>
      </TextWrapper>
       <Button primary
          className="no-animation"
        >
          <ButtonLink primary to={content.cta.link}>
            {content.cta.text}
          </ButtonLink>
        </Button>
    </ServiceCard>
  )
}