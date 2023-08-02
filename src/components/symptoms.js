import React from 'react';
import { Headline, SubTitle, SymptomsWrapper, TextWrapper } from '../styles';
import { TextBlockRender } from './text-block-render';

export const Symptoms = ({ data,styleVariant, XLargeRow, XLargeCol, LargeCol, LargeRow, MedRow, MedCol, SmallRow, SmallCol, XSmallRow, XSmallCol }) => {
  const SymptomAnswerBlock = data.symptomAnswerBlock;
  return(
    <>
      <SymptomsWrapper
        XLC={XLargeCol} LC={LargeCol} MC={MedCol} SC={SmallCol} XSC={XSmallCol}
        XLR={XLargeRow} LR={LargeRow} MR={MedRow} SR={SmallRow} XSR={XSmallRow}
        styledVariant={styleVariant}
      >
        <Headline HeadlineRed
          variant={styleVariant}
        >
          {data.symptomsHeadline}
        </Headline>
        {SymptomAnswerBlock.map((block) => {
          return(
            <TextWrapper SymptomsBlock key={block.contentful_id}>
              <SubTitle SymptomSub variant={styleVariant}>{block.headline}</SubTitle>
              <TextBlockRender content={block} TextValue={styleVariant}/>
            </TextWrapper>
          )
        })}
      </SymptomsWrapper>
    </>
  )
}