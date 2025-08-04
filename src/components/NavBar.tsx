import React from 'react'
import { motion, easeInOut } from 'framer-motion';
import {Menu, X} from 'lucide-react';
import '../styles/NavBar.css'
const NavBar:React.FC = () => {
const navAnimation = {
    initial:{y: -100, opacity: 0},
    animate:{y: 0, opacity: 1},
    transition:{duration: 0.6, ease: easeInOut},
    exit:{y: -100, opacity: 0},
}
  const [toggleHamburger, setToggleHamburger] = React.useState(false);

  const handleToggle = () => {
    setToggleHamburger(!toggleHamburger);
  };
  console.log(toggleHamburger);
  return (
    <motion.div className='navbar'
      initial={navAnimation.initial}
      animate={navAnimation.animate}
      transition={{duration:0.3, ease: easeInOut}}
      exit={navAnimation.exit}
    >
      <div className='flex justify-between items-center w-full md:w-auto'>
        <motion.a href="/"
      initial={navAnimation.initial}
      animate={navAnimation.animate}
      transition={navAnimation.transition}
      exit={navAnimation.exit}
      ><img src="/home_logo2.png" alt="Thaman" className='home_logo'/></motion.a>
      <div className='hamburger' onClick={handleToggle}>
        {toggleHamburger?<X className='text-white'/>:<Menu className='text-white'/>}
      </div>
      </div>
      <div className={`text-base flex md:flex-row gap-4 md:gap-10 w-full md:w-auto ${toggleHamburger ? 'flex-col px-8 py-4':'hidden md:flex'}`}>
      <motion.a href='#home' className='home'
      initial={navAnimation.initial}
      animate={navAnimation.animate}
      transition={navAnimation.transition}
      exit={navAnimation.exit}
        >Home</motion.a>
        <motion.a href='#about' className='about'
      initial={navAnimation.initial}
      animate={navAnimation.animate}
      transition={{duration:0.7, ease: easeInOut}}
      exit={navAnimation.exit}>About</motion.a>
        <motion.a href='#project' className='project'
      initial={navAnimation.initial}
      animate={navAnimation.animate}
      transition={{duration:0.8, ease: easeInOut}}
      exit={navAnimation.exit}
        >Projects</motion.a>
        <motion.a href='#contact' className='contact'
      initial={navAnimation.initial}
      animate={navAnimation.animate}
      transition={{duration:0.9, ease: easeInOut}}
      exit={navAnimation.exit}
        >Contact</motion.a>
      </div>
    </motion.div>
  )
}

export default NavBar