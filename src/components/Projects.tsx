import React from 'react'

const Projects:React.FC = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with React, Tailwind CSS, and Framer Motion.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'MERN Blog App',
      description: 'A full-stack blog platform with authentication, CRUD, and MongoDB backend.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      title: 'Firebase Auth UI',
      description: 'Responsive UI for Firebase email/password login with validation.',
      tech: ['React', 'Firebase', 'Tailwind'],
    },
  ];
  return (
    <section id='project' className='h-screen py-20 text-white'>
      <h1 className='section-heading text-4xl'>Featured Projects</h1>
      <div className='flex w-3/4 mx-auto text-center gap-10'>
       {projectList.map((project, idx) => (
        <div key={idx} className='bg-gray-800 p-6 rounded-lg shadow-lg my-6 w-full'>
              <h2 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm text-white px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
        </div>
       ))}
      </div>
    </section>
  )
}

export default Projects