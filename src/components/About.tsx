import { Monitor,Server ,GitBranch,Code, type LucideProps } from 'lucide-react';
import React from 'react'
import {motion} from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiLaravel, SiMongodb, SiMysql, SiFirebase, SiPostman } from 'react-icons/si';
import '../styles/About.css';
type SkillCardType = {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  tools: Array<{
    icon: React.ReactNode;
    name: string;
  }>;
};
const About:React.FC = () => {
  const skillCard: SkillCardType[] = [
            {icon:Monitor, title: "Frontend Development", tools: [
        { icon: <FaReact className='tool-icons' color="#61DAFB" />, name: 'React' },
        { icon: <SiNextdotjs className='tool-icons' color="#FFFFFF" />, name: 'Next.js' },
        { icon: <SiTailwindcss className='tool-icons' color="#38B2AC" />, name: 'Tailwind CSS' },
        { icon: <SiFramer className='tool-icons' color="#0055FF" />, name: 'Framer Motion' },
        { icon: <Code color="#FF2D20" />, name: 'Blade' },
      ], },
            {icon:Server, title: "Backend Development", tools: [
        { icon: <FaNodeJs className='tool-icons' color="#339933" />, name: 'Node.js' },
        { icon: <SiExpress className='tool-icons' color="#FFFFFF" />, name: 'Express.js' },
        { icon: <SiLaravel className='tool-icons' color="#FF2D20" />, name: 'Laravel' },
        { icon: <SiMongodb className='tool-icons' color="#47A248" />, name: 'MongoDB' },
        { icon: <SiMysql className='text-2xl' color="#FFFFFF" />, name: 'MySQL' },
        { icon: <SiFirebase className='tool-icons' color="#FFCA28" />, name: 'Firebase' },
      ], },
            {icon:GitBranch, title: "Tools & Version Control", tools: [
        { icon: <SiTypescript className='tool-icons' color="#3178C6" />, name: 'TypeScript' },
        { icon: <FaGitAlt className='tool-icons' color="#F05032" />, name: 'Git' },
        { icon: <SiPostman className='tool-icons' color="#FF6C37" />, name: 'Postman' },
        
      ], },];

  return (
    <section id='about' className='w-full min-h-screen py-20 text-gray-200'>
      <div className='flex flex-col w-full px-5 sm:px-20 lg:w-1/2 mx-auto text-center'>
      <motion.h1 className='section-heading text-4xl'
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      whileInView={{ scale:1, opacity: 1,y: 0 }}
      viewport={{once: true}}
      >About Me</motion.h1>
      <motion.p className='text-xl text-start leading-relaxed py-2'
      transition={{ duration: 0.5, ease: ["easeInOut"] }}
      initial={{scale: 0.8, opacity: 0, y: 50 }}
      whileInView={{ scale:1, opacity: 1,y: 0  }}
      viewport={{once: true}}
      >
        I'm a <span className='highlight'>BCA undergraduate student</span> with a passion for building 
        web applications using the MERN stack — <span className='highlight'>MongoDB</span>, 
        <span className='highlight'>Express.js</span>, <span className='highlight'>React</span>, and <span className='highlight'>Node.js</span>. 
         I enjoy coding and the process of creating and solving problems through code.</motion.p>
      <motion.p className='text-xl text-start leading-relaxed py-2'
      transition={{ duration: 0.7, ease: "easeInOut" }}
      initial={{scale: 0.8, opacity: 0, y: 50 }}
      whileInView={{ scale:1, opacity: 1,y: 0  }}
      viewport={{once: true}}
      >
        I'm currently looking for <span className='highlight'>internship opportunities</span> where I can apply my skills,
        grow in a real-world environment, and contribute to meaningful projects.</motion.p>
      </div>
          <motion.h2 className='section-heading text-2xl mt-5'
          transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{scale: 0.8, opacity: 0, y: 50 }}
      whileInView={{ scale:1, opacity: 1,y: 0  }}
          viewport={{once: true}}
          >Skills & Technologies</motion.h2>
      <motion.div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-4/5  xl:w-7/12 mx-auto'
      transition={{ duration: 0.7, ease: "easeInOut" }}
      whileInView={{ scale:[0.8, 1], opacity: [0, 1],y: [50, 0] }}
      viewport={{once: true}}
      >
        {skillCard.map((skill, idx) => (
            <motion.div
              key={idx}
              className=" px-4 py-8 text-center rounded-2xl shadow-md hover:shadow-lg transition-all border-b-4 border-r-4 border-gray-400"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 ,ease: "easeInOut"}}
              style={{
                willChange:'transform',
              }}
            >
              <skill.icon className="w-12 h-12 mx-auto mb-4 text-gray-400 transition-colors duration-300 hover:text-white" />
              <h3 className="text-xl font-semibold text-gray-100 mb-3">{skill.title}</h3>
              <ul className="text-white space-y-2 text-sm text-left w-full">
                {skill.tools.map((tool, i) => (
                <motion.li key={i} className="flex items-center space-x-2 text-lg text-gray-300 hover:text-white justify-center"
                whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} style={{ willChange: 'transform' }}
                >
                  <span className="w-6 h-6">{tool.icon}</span>
                  <span className=' hover:cursor-default'>{tool.name}</span>
                </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
    </section>
  )
}

export default About