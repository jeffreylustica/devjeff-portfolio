import { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { ImDownload2 } from 'react-icons/im'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)

  const linksVariants = {
    hover: {
      scale: 1.2, 
      color: 'hsla(150,69%,65%,1)',
      originX: 0
    },
    menuBtnHover: {
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
                whileHover={{boxShadow: '0 4px 4px hsla(0, 0%, 0%, .5)'}}
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
                  {[FaFacebookF, FaLinkedinIn, FaGithub].map((NavIcon, i) => (
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
                  whileHover={{scale: 1.05, boxShadow: '0 4px 6px hsla(0, 0%, 0%, .5)'}}
                  href='{}' 
                  download='jeffrey-lustica-resume' 
                  className='navbar__menu__social__resume'>
                <ImDownload2 /> Resume
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