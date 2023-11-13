import React from 'react';
import { FormWrapper, Button } from '../styles';
export const PageForm = ({XLargeRow, XLargeCol, LargeCol, LargeRow, MedRow, MedCol, SmallRow, SmallCol, XSmallRow, XSmallCol}) => {
  return(
    <FormWrapper
      XLC={XLargeCol} LC={LargeCol} MC={MedCol} SC={SmallCol} XSC={XSmallCol}
      XLR={XLargeRow} LR={LargeRow} MR={MedRow} SR={SmallRow} XSR={XSmallRow}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      autoComplete='on'
    >
      <input type="hidden" name="form-name" value="contact"/>
      <label>
        <input placeholder='Full Name' type="text" required/>
      </label>
      <label>
        <input placeholder='Email' type="email"/>
      </label>
      <label>
        <input placeholder='Phone' type="tel" required/>
      </label>
      <label>
        <input placeholder='Address, Town, City, Zip Code' type="text" required/>
      </label>
      <textarea placeholder='Please type your concerns or service needed.'/>
      <Button className='submit-text' secondary type="submit"> Submit</Button>
    </FormWrapper>
  )
}