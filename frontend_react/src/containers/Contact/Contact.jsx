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
        <motion.div 
          className="contact__option flexCenter"
          whileInView={{y: [-100, 0], opacity: [0, 1], transition: {duration: .3, delay: .3}}}
        >
          <div className="contact__option__details flexCenter">
            <HiPhone />
            <motion.a 
              href="tel:+639060078013" 
              rel="noreferrer"
              whileHover={{color: 'hsla(165, 80%, 43%, .95)'}}
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
              whileHover={{color: 'hsla(165, 80%, 43%, .95)'}}
            >
              {contactDetails[0]?.email}
            </motion.a>
          </div>
          <div className="contact__option__details flexCenter">
            <HiLocationMarker /><span>{contactDetails[0]?.address}</span>
          </div>
        </motion.div>

        {messageSent ? (
          <div className="contact__success">
            <h1 className="contact__success__confirmation">Thank you!</h1>
            <p className='modal__success__message'>Your message has been successfully sent. I will contant you soon.</p>
          </div>
        ) : (
          <motion.form 
            onSubmit={sendEmail} 
            ref={formRef} 
            className='contact__form'
            whileInView={{opacity: [0, 1], x:[100, 0], transition: {delay: .5}}}
          >
          <input type="text" name="user_name" className="contact__form__name" placeholder='Name' required />
          <input type="email" name="user_email" className="contact__form__email" placeholder='Email' required />
          <textarea name="message" id="" cols="30" rows="10" className="contact__form__message" placeholder='Message' required></textarea>
          <motion.button
            whileHover={{scale: 1.05, color: 'hsla(0, 0%, 100%, .95)', backgroundColor: 'hsla(165, 80%, 43%, .75)', boxShadow: '0 4px 4px hsla(0, 0%, 0%, .5)'}} 
            whileInView={{opacity: [0, 1], transition: {delay: .6, duration: .5}}}
            type='submit' 
            className='contact__form__submit'
            disabled={loading ? true : false}
            style={loading && {cursor: 'not-allowed'}}
          >
              {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
        )}
      </div>
    </div>
  )
}

export default Contact