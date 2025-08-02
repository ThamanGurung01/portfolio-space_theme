import React from 'react'
import '../styles/NavBar.css'
const NavBar:React.FC = () => {
  return (
    <div className='navbar'>
      <a href="#home"><img src="/home_logo.png" alt="Thaman" className='home_logo'/></a>
      <div className='flex gap-6'>
        <a href='#home' className='home'>Home</a>
        <a href='#about' className='about'>About</a>
        <a href='#project' className='project'>Projects</a>
        <a href='#skill' className='skill'>Skills</a>
        <a href='#contact' className='contact'>Contact</a>
      </div>
    </div>
  )
}

export default NavBar