import { useState, useEffect, useRef } from 'react'
import './Contact.scss'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import emailjs from '@emailjs/browser'
import { urlFor, client } from '../../client'

const Contact = () => {
  const [contactDetails, setContactDetails] = useState([])
  const formRef = useRef()

  useEffect(() => {
    const query = '*[_type == "contact"]'

    client.fetch(query)
      .then(data => setContactDetails(data))

  }, [])
  

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_7mms43l', 'template_t4518ph', formRef.current, 'LttAF_doS5X32BYJ3')
    .then((result) => {
        console.log(result.text)
        e.target.reset()  
    }, (error) => {
        console.log(error.text)
    })

  }
  
  return (
    <div id='contact' className='contact'>
      <div className="container">
        <h2 className="contact__heading">Let's connect</h2>
        <p className='contact__intro'>Just send me a message on the form below and I will get back to you as soon as I can.</p>
        <div className="contact__option flexCenter">
          <div className="contact__option__details flexCenter">
            <HiPhone /><span>{contactDetails[0]?.phone}</span>
          </div>
          <div className="contact__option__details flexCenter">
            <HiMail /><span>{contactDetails[0]?.email}</span>
          </div>
          <div className="contact__option__details flexCenter">
            <HiLocationMarker /><span>{contactDetails[0]?.address}</span>
          </div>
        </div>
        <form onSubmit={sendEmail} ref={formRef} className='contact__form'>
          <input type="text" name="user_name" className="contact__form__name" placeholder='Name' required />
          <input type="email" name="user_email" className="contact__form__email" placeholder='Email' required />
          <textarea name="message" id="" cols="30" rows="10" className="contact__form__message" placeholder='Message' required></textarea>
          <button type='submit' className='contact__form__submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact