import React from 'react'
import './App.scss'
import { About, Contact, Home, Skills, Timeline, Works } from './containers'
import { Navbar, SideNav } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <SideNav />

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