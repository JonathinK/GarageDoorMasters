import React from 'react';
import { CustomerServiceIcon, ExperienceIcon, FeatureCard, FriendlyIcon, HighQualityIcon,PromptTimingIcon,FamilyOwnedIcon, TextWrapper, SubTitle } from '../styles';
import { TextBlockRender } from './text-block-render';

export const WhyChooseFeature = ({ data, isHomepage }) => {
  const getIcon = () => {
    switch(data.title) {
      case 'Experience':
        return <ExperienceIcon/>;
      case 'Customer Service':
        return <CustomerServiceIcon/>;
      case 'Friendly & Professional':
        return <FriendlyIcon/>;
      case 'High quality parts':
        return <HighQualityIcon/>;
      case 'Prompt Timing':
        return <PromptTimingIcon/>;
      case 'Family Owned & Operated':
        return <FamilyOwnedIcon/>;
      default:
        return null;
    }
  }
  return(
    <FeatureCard
      className={isHomepage ? '':'card-color-change'}
    >
      <div>{getIcon(data.title)}</div>
      <TextWrapper FeatureCard>
        <SubTitle FeatureCardTitle>{data.title}</SubTitle>
        <TextBlockRender content={data} TextValue="primary"/>
      </TextWrapper>
    </FeatureCard>
  )
}