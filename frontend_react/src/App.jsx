import React from 'react'
import './App.scss'
import { About, Contact, Home, Skills, Timeline, Works, Footer } from './containers'
import { Navbar, SideNav } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <SideNav />
      <Footer coprClass="desktop-class"/>

      <Home />
      <About />
      <Works />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  )
}

export default App