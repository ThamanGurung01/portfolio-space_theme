import React from 'react'

const About:React.FC = () => {
  const skillCard: Array<{ title: string, tools: string[] }> = [
            { title: "Frontend Development", tools: ["React", "Next.js", "Tailwind CSS", "TypeScript","Framer-motion","Blade"] },
            { title: "Backend Development", tools: ["Node.js", "Express.js","Laravel","MongoDB", "MySQL", "Firebase"] },
            { title: "Tools & Version Control", tools: ["Git", "GitHub", "postman"] },
          ];
  return (
    <section id='about' className='w-full h-screen py-20 backdrop-blur-md bg-gray-900/30 text-gray-200'>
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
      <div className='mt-10 grid grid-cols-3 gap-6 w-2/3 mx-auto'>
          {skillCard.map((skill, idx) => (
            <div key={idx} className='bg-gray-800 p-6 text-center rounded-2xl shadow-md hover:shadow-lg transition-all'>
              <h3 className='text-xl font-semibold text-gray-100 mb-3'>{skill.title}</h3>
              <ul className='text-gray-300 space-y-1 text-sm'>
                {skill.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </section>
  )
}

export default About