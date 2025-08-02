import React from 'react'
import '../styles/HeroSection.css'
import Typewriter from 'typewriter-effect';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
const HeroSection:React.FC = () => {
    const [isResumeHovered, setIsResumeHovered] = React.useState(false);
  return (
    <section className='text-white h-screen'>
    <div className='flex items-center justify-center w-full h-full gap-24'>
    <div className='flex flex-col items-center justify-center gap-5 w-1/2'>
    <h1 className='name'>Hi, I'm <span className='highlight'>Thaman Gurung</span></h1>
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
    <motion.div
    className={`resume-container ${isResumeHovered?"hover_effect":""}`}
    animate={  
    isResumeHovered
    ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
    : {}}
    transition={{
        duration:4,
        repeat: Infinity,
        ease: "linear",
        }}
    style={{
        backgroundSize: "200% 200%",
      }}
    >
 <button
    className='btn resume-btn'
    onMouseEnter={() => setIsResumeHovered(true)}
    onMouseLeave={() => setIsResumeHovered(false)}
     ><FileText/><span>Resume</span></button>
    </motion.div>
   
    <div className='flex justify-center items-center text-center gap-10'><button className='btn'>Contact Me</button><button className='btn'> View Projects</button></div>
    </div>
     <motion.div
    className="profile-container hover_effect"
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
    <img src="/profile.png" alt="" className='profile' />
    </motion.div>
    </div>
    </section>
  )
}

export default HeroSection