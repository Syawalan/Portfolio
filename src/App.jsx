import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-[#FFFBE6]'>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
