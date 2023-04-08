import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'

const About = () => {

  const inViewVariants = {
    showX: {x: [-100, 0], opacity: [0, 1], transition:{delay: .2, duration: .5}},
    showY: {y: [-100, 0], opacity: [0, 1], transition:{delay: .3, duration: .5}},
    show: {opacity: [0, 1], transition: {delay: .7, duration: .5}}
  }

  return (
    <div id='about' className='about'>
      <div className="about__content container">
        <motion.h1 
          className='about__heading'
          variants={inViewVariants}
          whileInView='showX'
        >
          Hey!
        </motion.h1>
        <div className="about__right">
          <motion.h1 
            className='about__right__intro'
            variants={inViewVariants}
            whileInView='showY'
          >
              I'M JEFFREY
          </motion.h1>
          <motion.p 
            className='about__right__desc'
            variants={inViewVariants}
            whileInView='showY'
          > 
            I am front-end developer with a passion for building beautiful  and functional web applications. I am a front-end developer with a passion for building beautiful  and functional web applications. I am a front-end developer with a passion for building beautiful  and functional web applications. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium inventore magni accusamus saepe suscipit maxime, harum quos tempore ipsam a, dolorum consequatur qui. Quisquam obcaecati quos deserunt perferendis voluptatibus?
          </motion.p>
          <motion.a 
            className='about__right__resume' 
            href='{}' 
            download='jeffrey-lustica-resume'
            variants={inViewVariants}
            whileInView='show'
            whileHover={{scale: 1.05, color: 'hsla(0, 0%, 100%, .95)', backgroundColor: 'hsla(165, 80%, 43%, .75)', boxShadow: '0 4px 4px hsla(0, 0%, 0%, .5)'}} 
          >
              Download my resume
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default About