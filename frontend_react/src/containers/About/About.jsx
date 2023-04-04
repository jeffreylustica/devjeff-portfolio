import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about__content container">
        <h1 className='about__heading'>Hey!</h1>
        <div className="about__right">
          <h1 className='about__right__intro'>I'M JEFFREY</h1>
          <p className='about__right__desc'> I am front-end developer with a passion for building beautiful  and functional web applications. I am a front-end developer with a passion for building beautiful  and functional web applications. I am a front-end developer with a passion for building beautiful  and functional web applications. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium inventore magni accusamus saepe suscipit maxime, harum quos tempore ipsam a, dolorum consequatur qui. Quisquam obcaecati quos deserunt perferendis voluptatibus?</p>
          <motion.a 
            className='about__right__resume' 
            href='{}' 
            download='jeffrey-lustica-resume'
            whileHover={{scale: 1.07, color: 'hsla(0, 0%, 0%, .95)', backgroundColor: 'hsla(0, 0%, 100%, .95)'}} 
          >
              Download my resume
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default About