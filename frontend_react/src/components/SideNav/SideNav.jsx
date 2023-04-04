import React from 'react'
import './SideNav.scss'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { ImDownload2 } from 'react-icons/im'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const SideNav = () => {
  const iconVariants = {
    hover: {
      scale: 1.1, 
      originX: 0,
      color: 'hsla(0, 0%, 0%, .75)',
      backgroundColor: 'hsla(0, 0%, 100%, 1)'
    }
  }
  return (
    <div className='nav__links'>
        <motion.a 
          whileHover={{scale: 1.1, originX: 0}}
          href='{}' 
          download='jeffrey-lustica-resume' 
          className='nav__links__resume'
          data-tooltip-id='resume-tooltip'
          data-tooltip-content='Resume'
        >
          <Tooltip 
            id='resume-tooltip'
          />
          <ImDownload2 />
        </motion.a>
        {[{socialIcon:FaFacebookF, socialLink: 'https://www.facebook.com/jeffrey.lustica.9'},
          {socialIcon:FaLinkedinIn, socialLink: 'https://www.linkedin.com/in/jeffrey-lustica-8178b5229'}, {socialIcon:FaGithub, socialLink: 'https://github.com/jeffreylustica'}].map((Nav, i) => (
            <motion.a 
            variants={iconVariants}
            whileHover='hover'
            href={Nav.socialLink} 
            target="_blank"  
            rel="noreferrer"
            key={i} 
            className='nav__links__icon'>
              <Nav.socialIcon key={i}/>
            </motion.a>         
        ))}
    </div>
  )
}

export default SideNav