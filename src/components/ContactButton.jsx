import React from 'react'

function ContactButton(props) {

    const dataForm = props.data

    const handler = (data) => {
        alert(
            `
                Ваше имя "${data.name}"
                Ваш телефон "${data.tel}"
                Ваше сообщение "${data.message}"
            `
        )
    }

  return (
    <div className='contact-button'>
        <button
            className='form-button'
            onClick={e => handler(dataForm)}
        >ОТПРАВИТЬ</button>
    </div>
  )
}

export default ContactButton