import React from 'react';
import { FormWrapper } from '../styles';
export const PageForm = ({XLargeRow, XLargeCol, LargeCol, LargeRow, MedRow, MedCol, SmallRow, SmallCol, XSmallRow, XSmallCol}) => {
  return(
    <FormWrapper
      XLC={XLargeCol} LC={LargeCol} MC={MedCol} SC={SmallCol} XSC={XSmallCol}
      XLR={XLargeRow} LR={LargeRow} MR={MedRow} SR={SmallRow} XSR={XSmallRow}
    >
     <form 
      name="contact-us-form"
      className="contact_us_form"
      method="POST" 
      data-netlify="true" 
      autoComplete="on" 
      data-netlify-honeypot="bot-field"
      >
     <input type='hidden' name="form-name" value="contact-us-form"/>
      <div className="input_wrapper"> 
        <label>
          Full Name*
          <input
            placeholder="Your name..." 
            type="text" 
            name="fullname" 
            autoComplete='on'
            required
          />
        </label>
      </div>
      <div className="input_wrapper"> 
        <label>
          Email*
          <input
            placeholder="Type email here..."
            name="email"
            type="email"
            autoComplete='on'
          />
        </label>
      </div>
      <div className="input_wrapper"> 
        <label>
          Phone*
          <input
            placeholder="Best contact number..."
            name="contact number"
            type="tel"
            autoComplete='on'
            maxLength="14"
            inputMode="numeric"
          />
        </label>
      </div>
      <div className="input_wrapper"> 
        <label>
          Address*
          <input
            placeholder="Your address here..."
            name="home address"
            type='text'
            required
          />
        </label>
      </div>
      <div className="input_wrapper"> 
        <label>
          Tell us about your issue*
          <textarea
            placeholder="Explain your issue with your door in detail here..."
            autoComplete="off"
            autoCorrect="on"
            autoCapitalize="word"
            type="text"
            name="message"
          />
        </label>
      </div>
      <div className="button_wrapper">
        <button 
        secondary
        className="submit-text"
        type="submit"
      >
      Submit
      </button>
      </div>
      
     </form>
    </FormWrapper>
  )
}