import React from 'react'
import '../styles/HeroSection.css'
import Typewriter from 'typewriter-effect';
import { FileText , Mail, Folder} from 'lucide-react';
import { motion } from 'framer-motion';
const HeroSection:React.FC = () => {
  return (
    <section id='home' className='text-white min-h-screen pt-24 md:pt-44 lg:pt-64'>
    <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full h-full lg:gap-16'>
    <div className='flex flex-col items-center justify-center gap-3 md:gap-5 w-full lg:w-1/2 pt-8'>
    <motion.h1 className='name'
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    ><span className='hidden 2xl:inline-block'>Hi,I'm</span> <span className='highlight'>Thaman Gurung</span></motion.h1>
    <motion.p className='hidden md:inline-block text-xl text-center lg:text-2xl px-4 sm:px-20 md:px-36 lg:px-4 text-gray-300'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeInOut" }}
    >Full Stack Developer with 1 year of professional experience building scalable web applications using Laravel, Next.js, and modern web technologies. Passionate about developing efficient, maintainable solutions and continuously expanding technical expertise.</motion.p>
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    >
    <Typewriter
    options={{
        strings: ['Full-Stack Developer', 'MERN Stack Developer', 'Laravel Developer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75,
        cursor: '|',
        wrapperClassName: 'job',
        cursorClassName: 'cursor',
        
    }}/>
    </motion.div>
    <motion.div className='flex justify-center items-center text-center gap-10 mt-3 md:mt-5 mx-2'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    >
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
         </motion.div>
    <motion.a
    href='/resume/ThamanGurungCV.pdf'
    download={true}
    className='btn resume-btn'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    whileHover={{ scale: 1.2 }}
     ><FileText/><span>Resume</span></motion.a>
    </div>
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    >
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
    <motion.img src="/image.jpg" alt="image" className='profile' 
    whileHover={{ scale: 0.98 }}
    transition={{duration:0.3}}
    exit={{scale:1}}
    />
    </motion.div>
    </motion.div>
    </div>
    </section>
  )
}

export default HeroSection