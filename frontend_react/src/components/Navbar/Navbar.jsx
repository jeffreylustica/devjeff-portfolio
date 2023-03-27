import { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { FaFacebook, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)

  const linksVariants = {
    hover: {
      scale: 1.2, 
      color: 'hsla(101, 46%, 65%, .95)',
      originX: 0
    },
    menuBtnHover: {
      boxShadow: '0 8px 8px hsla(0, 0%, 0%, .5)', 
      scale: 1.1
    }
  }

  return (
    <nav className='navbar'>

      <img src={images.logo} alt="" className='navbar__logo'/>
      <ul className='navbar__list'>
        {['home', 'about', 'works', 'skills', 'timeline', 'contact'].map(link => (
          <li key={link} className='navbar__item'>
              <motion.a 
                whileHover={{boxShadow: '0 8px 8px hsla(0, 0%, 0%, .25)', color: 'hsla(0, 0%, 0%, .75)'}}
                href={`#${link}`}>
                    {link}
              </motion.a>
          </li>
        ))}
      </ul>

      <div className={`navbar__menu flexCenter ${menuToggle && 'overlay'}`}>
        <motion.span
          variants={linksVariants}
          whileHover='menuBtnHover'
        >
          <HiMenuAlt3 className='navbar__menu__icon open flexCenter' onClick={() => setMenuToggle(true)} />
        </motion.span>

        <AnimatePresence>
          {menuToggle && (
            <motion.nav 
              key="menu-nav"
              className='navbar__menu__side-nav'
              initial={{x: 320}}
              whileInView={{ x: 0}}
              transition={{ duration: 0.5, ease: 'easeInOut'}} 
              exit={{ x: 320}}
            >
              <HiX className='navbar__menu__icon close flexCenter' onClick={() => setMenuToggle(false)} />
              <ul className='navbar__menu__list'>
                {['home', 'about', 'works', 'skills', 'timeline', 'contact'].map(link => (
                  <li key={link} className='navbar__menu__item'>
                    <motion.a 
                      variants={linksVariants}
                      whileHover='hover'
                      href={`#${link}`} 
                      onClick={() => setMenuToggle(false)}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>

              <div className='navbar__menu__social'>
                <div className='navbar__menu__social__list'>
                  {[FaFacebook, FaLinkedin, FaGithub].map((NavIcon, i) => (
                      <motion.a
                        variants={linksVariants}
                        whileHover='hover'
                        href='' 
                        key={i} 
                        className='navbar__menu__social__link'><NavIcon key={i}/>
                      </motion.a>         
                  ))}
                </div>
                <motion.a 
                  whileHover={{scale: 1.1, boxShadow: '0 4px 6px hsla(0, 0%, 0%, .5)'}}
                  href='{}' 
                  download='jeffrey-lustica-resume' 
                  className='navbar__menu__social__resume'>
                <FaFileDownload /> Resume
                </motion.a>
              </div>

            </motion.nav>
          )}
        </AnimatePresence>
        
      </div>

    </nav>
  )
}

export default Navbar