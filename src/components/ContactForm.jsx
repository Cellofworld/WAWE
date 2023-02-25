import React, { useState } from 'react'
import ContactButton from './ContactButton'
import ContactQues from './ContactQues'

function ContactForm() {

    const initialState = {
        name: '',
        tel: '',
        message: '',
    }
    const [dataForm, setDataForm] = useState(initialState)

   const updateNameForm = (e) => {
    setDataForm({
        ...dataForm,
        name: e.target.value
    })
   }

   const updateTelForm = (e) => {
    setDataForm({
        ...dataForm,
        tel: e.target.value
    })
   }

   const updateMessageForm = (e) => {
    setDataForm({
        ...dataForm,
        message: e.target.value
    })
   }

  return (
    <div className='contact-form'>
        <form>
            <label>Имя</label>
                <input
                    className='contact-name'
                    type='text'
                    name='name'
                    onChange={e => updateNameForm(e)}
                />
            <label>Телефон</label>
            <input
                className='contact-tel'
                type='tel'
                name='tel'
                onChange={e => updateTelForm(e)}

            />
            <label>Оставьте сообщение, и мы свяжемся с Вами в ближайшее время</label>
            <textarea
                className='contact-message'
                type='text'
                name='message'
                onChange={e => updateMessageForm(e)}

            />
            <ContactButton data={dataForm} />
        </form>
        <ContactQues />
    </div>
  )
}

export default ContactForm