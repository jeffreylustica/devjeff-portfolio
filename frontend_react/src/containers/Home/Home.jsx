import React from 'react'
import './Home.scss'
import { SlArrowDown } from 'react-icons/sl'
import { images } from './../../constants'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div id='home' className='home'>
      <div className='home__content container'>

        <div className='home__left'>
          <h1 className='home__left__primary'>Offers a seamless and engaging user experience.</h1>
          <p className='home__left__secondary'>I build a structured, easy-to-use, and well-planned web application that will boost your site visitor engagement.</p>
          <a href='#about' className='home__left__btn-more'>
            <motion.span 
              className='btn-scroll'
              whileHover={{scale: 1.1}}
            >
            </motion.span>
          </a>
          {/* <span>More</span> */}
        </div>

        <div className="home__right">
          {
            [images.react, images.sass, images.redux, images.javascript, images.typescript, images.framerMotion, images.materialUi, images.sanity, images.git].map((logo, i) => (
              <div key={i} className='home__right__logo-container'>
                <img src={logo} alt="logo" className='home__right__img'/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home