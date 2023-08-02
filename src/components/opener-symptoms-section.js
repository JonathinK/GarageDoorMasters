import React from 'react';
import { Section } from '../styles';
import { graphql } from 'gatsby';
import { Symptoms } from './symptoms';



export const OpenerSymptomsSection = ({ section }) => {
  //Finds Opener Symptoms Data
  const OpenerSymptoms = section.content.find(component => component.internalName === 'Component: Opener Symptoms & Answers');
  return(
    <Section SymptomsSection
      XLC="1/15" LC="1/15" MC="1/11" SC="1/9" XSC="1/7"
    >
      <Symptoms
        XLargeCol="4/12"
        XLargeRow="1/2"
        LargeCol="4/12"
        LargeRow="1/2"
        MedCol="2/10"
        MedRow="1/2"
        SmallCol="2/8"
        SmallRow="1/2"
        XSmallCol="2/6"
        XSmallRow="1/2"
        data={OpenerSymptoms}
        styleVariant="opener"
      />
    </Section>
  )
}

export const query = graphql`
  fragment SymptomsSection on ContentfulComponentSection {
    contentful_id
    internalName
    content{
        ... on ContentfulComponentSymptoms {
          id
          contentful_id
          internalName
          symptomsHeadline
          symptomAnswerBlock {
            contentful_id
            internalName
            headline
            text {
              raw
            }
          }
        }
    }
  }
`