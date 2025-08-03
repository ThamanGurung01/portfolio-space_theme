import React from 'react'
import { motion } from 'framer-motion'

const Projects: React.FC = () => {
  const projectList = [
    {
      image: "/project_image/blood_bank_management_system.png",
      title: 'Blood Bank Management System',
      description: 'The Blood Bank Management System streamlines blood donation, requests, and inventory management for donors and banks. It uses Haversine, Cosine Similarity, and weighted scoring algorithms to enhance the system.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    },
    {
      image: "/project_image/no_image.jpg",
      title: 'Blogger',
      description: 'A blog platform that allows users to create, read, update, and delete posts, providing a seamless experience for both content creators and readers.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Quill'],
    },
    {
      image: "/project_image/no_image.jpg",
      title: 'Income Expense Tracker',
      description: 'A web application that helps users track their income and expenses, providing insights into their financial health.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'TypeScript'],
    },
  ];

  return (
    <section id='project' className='h-screen py-20 text-white'>
      <h1 className='section-heading text-4xl'>Featured Projects</h1>
      <div className='flex w-2/3 mx-auto text-center gap-10 mt-32 flex-wrap justify-center'>
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            className='group bg-gray-900 pb-6 rounded-lg shadow-lg my-6 flex flex-col items-center w-96 text-start relative overflow-hidden'
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ willChange: 'transform' }}
          >
            {/* Image + Overlay Buttons */}
            <div className="relative w-full">
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-56 rounded-md object-cover'
              />
              {/* Buttons shown on hover */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href="#"
                  className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200"
                  whileHover={{ scale: 1.1 }}
                >
                  Code
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200"
                  whileHover={{ scale: 1.1 }}
                >
                  Demo
                </motion.a>
              </div>
            </div>

            {/* Title and Description */}
            <h2 className="text-2xl font-semibold text-white mt-4 mb-2 px-3">{project.title}</h2>
            <p className="text-gray-400 mb-4 ml-2 hover:text-white px-3">{project.description}</p>

            {/* Tech Stack */}
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
      </div>
    </section>
  )
}

export default Projects
