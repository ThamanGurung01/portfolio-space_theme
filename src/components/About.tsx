import { Monitor,Server ,GitBranch,Code, type LucideProps } from 'lucide-react';
import React from 'react'
import {motion} from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiLaravel, SiMongodb, SiMysql, SiFirebase, SiGithub, SiPostman } from 'react-icons/si';
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
        { icon: <SiGithub className='tool-icons' color="#FFFFFF" />, name: 'GitHub' },
        { icon: <SiPostman className='tool-icons' color="#FF6C37" />, name: 'Postman' },
        
      ], },
          ];
  return (
    <section id='about' className='w-full h-screen py-20 text-gray-200'>
      <div className='flex flex-col w-1/2 mx-auto text-center'>
      <h1 className='section-heading text-4xl'>About Me</h1>
      <p className='text-xl text-justify leading-relaxed py-2'>
        I'm a <span className='highlight'>BCA undergraduate student</span> with a passion for building 
        web applications using the MERN stack — <span className='highlight'>MongoDB</span>, 
        <span className='highlight'>Express.js</span>, <span className='highlight'>React</span>, and <span className='highlight'>Node.js</span>. 
         I enjoy coding and creating new things.</p>
      <p className='text-lg text-justify leading-relaxed py-2'>
        I'm always experimenting, learning new tools and improving my skills with every project.
         Whether it's building user dashboards, interactive UIs, or full-stack apps, 
        I enjoy the process of creating and solving problems through code.</p>
      <p className='text-lg text-justify leading-relaxed py-2'>
        I'm currently looking for <span className='highlight'>internship opportunities</span> where I can apply my skills,
        grow in a real-world environment, and contribute to meaningful projects.</p>
      </div>
          <h2 className='section-heading text-2xl mt-10'>Skills & Technologies</h2>
      <div className='mt-10 grid grid-cols-3 gap-10 w-2/3 mx-auto'>
        {skillCard.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 px-4 py-8 text-center rounded-2xl shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 ,ease: "easeInOut"}}
              style={{
                willChange:'transform',
              }}
            >
              <skill.icon className="w-12 h-12 mx-auto mb-4 text-gray-400 transition-colors duration-300 hover:text-white" />
              <h3 className="text-xl font-semibold text-gray-100 mb-3">{skill.title}</h3>
              <ul className="text-white space-y-2 text-sm text-left w-full pl-16">
                {skill.tools.map((tool, i) => (
                <motion.li key={i} className="flex items-center space-x-2 text-lg"
                whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} style={{ willChange: 'transform' }}
                >
                  <span className="w-6 h-6">{tool.icon}</span>
                  <span className='hover:text-white hover:cursor-default'>{tool.name}</span>
                </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
    </section>
  )
}

export default About