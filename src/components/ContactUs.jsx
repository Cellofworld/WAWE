import React from 'react'
import ContactForm from './ContactForm'
import Line from './Line'

function ContactUs() {
  return (
    <div className='contact-us'>
        <div className="title-cont">
            <div className="title-title">ОСТАВИТЬ ЗАЯВКУ</div>
            <Line />
        </div>
          <ContactForm />
    </div>
  )
}

export default ContactUs