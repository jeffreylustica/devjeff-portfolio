import React from 'react'
import './About.scss'
import { images } from '../../constants'

const About = () => {
  return (
    <div id='about' className='about flexCenter'>
      <div className="container">
        <h2 className='about__heading'>I Know That Good Design Means Good Business.</h2>
        <div className='about__content'>
          <div className="about__content__left">
            <p className='about__content__left__desc'>Hi! I am Jeffrey Lustica a front-end developer with a passion for building beautiful  and functional web applications. I am a front-end developer with a passion for building beautiful  and functional web applications. I am a front-end developer with a passion for building beautiful  and functional web applications.</p>
            <a className='about__content__left__resume' href='{}' download='jeffrey-lustica-resume'>Download my resume</a>
          </div>
          <div className="about__content__right">
            <img className='about__content__right__avatar' src={images.avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About