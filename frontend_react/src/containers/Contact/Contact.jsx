import { useState, useEffect, useRef } from 'react'
import './Contact.scss'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { client } from '../../client'

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [contactDetails, setContactDetails] = useState([])
  const formRef = useRef()

  useEffect(() => {
    const query = '*[_type == "contact"]'

    client.fetch(query)
      .then(data => setContactDetails(data))

  }, [])
  

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.sendForm('service_7mms43l', 'template_t4518ph', formRef.current, 'LttAF_doS5X32BYJ3')
    .then((result) => {
        console.log(result.text)
        e.target.reset()  
        setLoading(false)
        setMessageSent(true)
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
            <HiPhone />
            <motion.a 
              href="tel:+639060078013" 
              rel="noreferrer"
              whileHover={{scale: 1.075, color: 'hsla(0, 0%, 0%, .5)'}}
            >
              {contactDetails[0]?.phone}
            </motion.a>
          </div>
          <div className="contact__option__details flexCenter">
            <HiMail />
            <motion.a 
              href="mailto:jefflustica2@gmail.com" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{scale: 1.075, color: 'hsla(0, 0%, 0%, .5)'}}
            >
              {contactDetails[0]?.email}
            </motion.a>
          </div>
          <div className="contact__option__details flexCenter">
            <HiLocationMarker /><span>{contactDetails[0]?.address}</span>
          </div>
        </div>

        {messageSent ? (<div className="contact__success">
          <h1 className="contact__success__confirmation">Thank you!</h1>
          <p className='modal__success__message'>Your message has been successfully sent. I will contant you soon.</p>
        </div>
        ) : (
          <form onSubmit={sendEmail} ref={formRef} className='contact__form'>
          <input type="text" name="user_name" className="contact__form__name" placeholder='Name' required />
          <input type="email" name="user_email" className="contact__form__email" placeholder='Email' required />
          <textarea name="message" id="" cols="30" rows="10" className="contact__form__message" placeholder='Message' required></textarea>
          <motion.button
            whileHover={{scale: 1.07, color: 'hsla(0, 0%, 0%, .95)', backgroundColor: 'hsla(0, 0%, 100%, 1)'}} 
            type='submit' 
            className='contact__form__submit'
            disabled={loading ? true : false}
            style={loading && {cursor: 'not-allowed'}}
          >
              {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
        )}
      </div>
    </div>
  )
}

export default Contact