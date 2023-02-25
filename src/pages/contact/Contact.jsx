import React from 'react'
import ContactSocials from '../../components/ContactSocials'
import ContactUs from '../../components/ContactUs'
import Maps from '../../components/Maps'

function Contact() {
  return (
    <div className='contact page-pd' id='contact'>
        <Maps />
        <ContactUs />
        <ContactSocials />
    </div>
  )
}

export default Contact