import React from 'react';
import { Section } from '../styles';
import { graphql } from 'gatsby';
import { Symptoms } from './symptoms';

export const ResidentialBrokenSpringSymptoms = ({ section }) => {
  const SpringSymptoms = section.content.find(component => component.internalName === 'Component: Broken Spring Symptoms');
  return(
    <Section SectionGrid BrokenSpringSymptoms
      XLC="1/15" LC="1/15" MC="1/11" SC="1/8" XSC="1/7"
    >
      <Symptoms
        XLargeCol="3/13"
        XLargeRow="1/2"
        LargeCol="3/13"
        LargeRow="1/2"
        MedCol="2/10"
        MedRow="1/2"
        SmallCol="2/8"
        SmallRow="1/2"
        XSmallCol="2/6"
        XSmallRow="1/2"
        data={SpringSymptoms}
      />
    </Section>
  )
}
export const query = graphql`
  fragment ResidentialSpringSymptoms on ContentfulComponentSection {
    id
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