import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

function App() {
  return (
    <div className='pt-6 md:pt-20 pb-20 md:pb-0 bg-[#FFFBE6]'>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}

export default App
