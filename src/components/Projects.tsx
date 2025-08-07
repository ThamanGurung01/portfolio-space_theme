import React from 'react'
import { motion } from 'framer-motion'
import {SiGithub} from 'react-icons/si';
import {SquareArrowOutUpRight } from 'lucide-react';
import '../styles/Projects.css';
const Projects: React.FC = () => {
  const projectList = [
    {
      image: "/project_image/blood_bank_management_system.png",
      title: 'Blood Bank Management System',
      description: 'The Blood Bank Management System streamlines blood donation, requests, and inventory management for donors and banks. It uses Haversine, Cosine Similarity, and weighted scoring algorithms to enhance the system.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
      code:'https://github.com/ThamanGurung01/blood-bank-management-system',
      demo:'https://blood-bank-management-system-eosin.vercel.app/',
    },
    {
      image: "/project_image/IncomeExpenseTracker.png",
      title: 'Income Expense Tracker',
      description: 'A web application that helps users track their income and expenses, providing insights into their financial health.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'TypeScript'],
      code:'https://github.com/ThamanGurung01/Income-Expense-Tracker',
      demo:'https://income-expense-tracker-ruddy.vercel.app/',
    },
    {
      image: "/project_image/no_image.jpg",
      title: 'Blogger',
      description: 'A blog platform that allows users to create, read, update, and delete posts, providing a seamless experience for both content creators and readers.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Quill'],
      code:'https://github.com/ThamanGurung01/Blogger',
      demo:'https://blogger-tau-six.vercel.app/',
    },
  ];

  return (
    <section id='project' className='min-h-screen py-20 text-white'>
      <motion.h1 className='section-heading text-4xl'
      transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ scale: 0.8, opacity: 0, y: 50}}
      whileInView={{ scale: 1, opacity: 1, y: 0}}
      viewport={{once: true}}
      >Featured Projects</motion.h1>
      <motion.div className='flex w-2/3 mx-auto text-center gap-14 mt-32 flex-wrap justify-center'
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      whileInView={{ scale:1, opacity: 1,y: 0 }}
      viewport={{once: true}}
      >
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            className='pb-6 shadow-lg my-6 flex flex-col items-center w-96 text-start relative rounded-2xl overflow-hidden border-b-4 border-gray-700'
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ willChange: 'transform' }}
          >
            <div className="relative w-full group">
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-56 rounded-md object-cover'
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-6 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.code && (
                <motion.a
                  href={project.code}
                  target='_blank'
                  className="projects-btn bg-white text-black hover:bg-gray-200 active:bg-gray-200"
                  whileHover={{ scale: 1.1 }}>
                <SiGithub className='tool-icons' color="#000" />
                  <span>Code</span>
                </motion.a>
              )}
              { project.demo && (
                <motion.a
                  href={project.demo}
                  target='_blank'
                  className="projects-btn items-center bg-gray-900 text-white hover:bg-black active:bg-black"
                  whileHover={{ scale: 1.1 }}>
                  <SquareArrowOutUpRight size={17}/>
                  <span>Demo</span>
                </motion.a>
              )}
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-4 mb-2 px-3">{project.title}</h2>
            <p className="text-gray-300 mb-4 ml-2 hover:text-white px-3">{project.description}</p>

            <div className="flex flex-wrap gap-3 px-3">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="bg-gray-700 text-sm text-white px-3 py-1 rounded-full cursor-default font-bold"
                  whileHover={{
                    scale: 1.1,
                    rotate: -2,
                    backgroundColor: 'white',
                    color: 'black'
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
