import React from 'react'
import './SideNav.scss'
import { FaFacebook, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'

const SideNav = () => {
  const iconVariants = {
    hover: {
      scale: 1.1, 
      originX: 0,
      color: 'hsla(0, 0%, 0%, .75)',
      boxShadow: '0 4px 6px hsla(0, 0%, 0%, .5)'
    }
  }
  return (
    <div className='nav__links'>
        <motion.a 
          variants={iconVariants}
          whileHover='hover'
          href='{}' 
          download='jeffrey-lustica-resume' 
          className='nav__links__resume'>
          <FaFileDownload />
        </motion.a>
        {[FaFacebook, FaLinkedin, FaGithub].map((NavIcon, i) => (
            <motion.a 
            variants={iconVariants}
            whileHover='hover'
            href='' 
            key={i} 
            className='nav__links__icon'>
              <NavIcon key={i}/>
            </motion.a>         
        ))}
    </div>
  )
}

export default SideNav