import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { MARKS } from "@contentful/rich-text-types"
import { Headline, TextBlock } from '../styles';

export const TextBlockRender = ({ content, TextValue }) => {
  const richText = content.text;

  if(!content) {
    return null;
  }
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.UNORDEREDLIST]: text => <ul>{text}</ul>
    },
    renderNode: {
      'heading-5': (node,children) => <Headline>{children}</Headline>
    }
  } 
  return(
      <TextBlock
        variant={TextValue}
      >
        {richText && renderRichText(richText,options)}
      </TextBlock>
  )
}