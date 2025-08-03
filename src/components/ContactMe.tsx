import React from 'react'
import CopyToClipboard from './CopyToClipboard'
import { SiGithub,SiLinkedin,SiInstagram,SiFacebook} from 'react-icons/si'
import '../styles/ContactMe.css';
const ContactMe:React.FC = () => {
  return (
    <section id='contact' className='h-screen w-full py-20 text-white'>
      <h1 className='section-heading text-4xl'>Get In Touch</h1>
      <div className='w-1/2 mx-auto text-center flex flex-col items-center'>
      <p className='text-center text-xl'>Have a question or want to work together?</p>
      <div className='my-4'>
        <CopyToClipboard/>
        <div className='flex gap-6 text-2xl mt-10'>
          <a href='https://github.com/ThamanGurung01' target='_blank' className='social bg-[#181717] hover:text-[#181717]'>
            <SiGithub />
          </a>
          <a href='https://www.linkedin.com/in/thaman-gurung-2a08ab191/' target='_blank' className='social bg-[#0077B5] hover:text-[#0077B5]'>
            <SiLinkedin />
          </a>
          <a href='https://www.instagram.com/thaman_g9/' target='_blank' className='social bg-[#E1306C] hover:text-[#E1306C]'>
            <SiInstagram />
          </a>
          <a href='https://www.facebook.com/thaman.gurung.513798' target='_blank' className='social bg-[#1877F2] hover:text-[#1877F2]'>
            <SiFacebook />
          </a>
        </div>
      </div>
        <h2 className='section-heading text-2xl mt-3 pt-5'> Send me a message</h2>
        <form className=" w-full flex flex-col gap-8 text-lg">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-1/2 mx-auto px-4 py-3 rounded-md  text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-1/2 mx-auto px-4 py-3 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            required
            className="w-1/2 mx-auto px-4 py-3 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            className="w-3/12 mx-auto contact-btn font-semibold py-3 px-6 rounded-md transition-colors duration-300" 
            > Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default ContactMe