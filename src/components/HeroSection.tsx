import React from 'react'
import '../styles/HeroSection.css'
import Typewriter from 'typewriter-effect';
import { FileText , Mail, Folder} from 'lucide-react';
import { motion } from 'framer-motion';
const HeroSection:React.FC = () => {
  return (
    <section id='home' className='h-screen text-white'>
    <div className='flex items-center justify-center w-full h-full gap-16'>
    <div className='flex flex-col items-center justify-center gap-5 w-1/2 pt-10'>
    <h1 className='name'>Hi,I'm <span className='highlight'>Thaman Gurung</span></h1>
    <p className='text-2xl text-center'>Aspiring web developer passionate about building engaging web experiences and constantly learning modern technologies.</p>
        <Typewriter
    options={{
        strings: ['Full-Stack Web Developer', 'MERN Stack Developer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75,
        cursor: '|',
        wrapperClassName: 'job highlight',
        cursorClassName: 'cursor',
        
    }}/>
    <div className='flex justify-center items-center text-center gap-10 mt-10'>
        <motion.a
        href='#contact'
         className='btn contact_btn'
         whileHover={{ scale: 1.1,rotate: 1 }}
         ><Mail/><span>Contact Me</span></motion.a>
        <motion.a
        href='#project'
         className='btn project_btn'
         whileHover={{ scale: 1.1,rotate: -1 }}
         ><Folder/><span>View Projects</span></motion.a>
         </div>
    <motion.a
    href='/resume/ThamanGurungCV.pdf'
    download={true}
    className='btn resume-btn'
    whileHover={{ scale: 1.2 }}
     ><FileText/><span>Resume</span></motion.a>
    </div>
     <motion.div
    className="profile-container border_effect"
    animate={{ 
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{
        duration:4,
        repeat: Infinity,
        ease: "linear",
        }}
    style={{
        backgroundSize: "200% 200%",
      }}
    >
    <motion.img src="/profile.png" alt="" className='profile' 
    whileHover={{ scale: 0.98 }}
    exit={{scale:1}}
    />
    </motion.div>
    </div>
    </section>
  )
}

export default HeroSection