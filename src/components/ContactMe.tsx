import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import CopyToClipboard from './ui/CopyToClipboard'
import { SiGithub,SiLinkedin,SiInstagram,SiFacebook} from 'react-icons/si'
import {motion} from 'framer-motion'
import '../styles/ContactMe.css';
const ContactMe:React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [sending, setSending] = React.useState(false);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if(sending) return;
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      toast.error('Please fill out all fields !');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setSending(true);
    emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID!,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
        form.current!,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY!
      ).then(
        () => {
          toast.success('Message sent successfully!')
          form.current?.reset()
          setSending(false);
        },
        (error) => {
          console.error(error)
          toast.error('Failed to send message. Please try again.')
          setSending(false);
        }
      )
  }
  return (
    <section id='contact' className='min-h-screen w-full py-20 text-white'>
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.h1 className='section-heading text-4xl'
      transition={{ duration: 0.8, ease: "easeInOut" }}
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      whileInView={{ scale:1, opacity: 1,y: 0 }}
      viewport={{once: true, amount:0.2}}
      >Get In Touch</motion.h1>
      <div className='w-full lg:w-3/5 xl:w-1/2 mx-auto text-center flex flex-col items-center'>
      <motion.p className='text-center text-xl w-full'
      transition={{ duration: 0.5, ease: ["easeInOut"] }}
      initial={{ scale: 0.8, opacity: 0, x: 60, y: 30 }}
      whileInView={{ scale:1, opacity: 1,x:0,y: 0 }}
      viewport={{once: true}}
      >Have a question or want to work together?</motion.p>
      <motion.div className='my-4'
          transition={{ duration: 0.7, ease: ["easeInOut"] }}
          initial={{ scale: 0.8, opacity: 0, x: 80 }}
          whileInView={{ scale:1, opacity: 1,x: 0 }}
          viewport={{once: true}}
      >
        <CopyToClipboard/>
        <div className='flex gap-6 text-2xl mt-10'>
          <motion.a href='https://github.com/ThamanGurung01' target='_blank' className='social bg-[#181717] hover:text-[#181717]'
          transition={{ duration: 0.7, ease: ["easeInOut"] }}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          whileInView={{ scale:1, opacity: 1,y: 0 }}
          viewport={{once: true}}
          >
            <SiGithub />
          </motion.a>
          <motion.a href='https://www.linkedin.com/in/thaman-gurung-2a08ab191/' target='_blank' className='social bg-[#0077B5] hover:text-[#0077B5]'
          transition={{ duration: 0.8, ease: ["easeInOut"] }}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          whileInView={{ scale:1, opacity: 1,y: 0 }}
          viewport={{once: true}}
          >
            <SiLinkedin />
          </motion.a>
          <motion.a href='https://www.instagram.com/thaman_g9/' target='_blank' className='social bg-[#E1306C] hover:text-[#E1306C]'
          transition={{ duration: 0.9, ease: ["easeInOut"] }}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          whileInView={{ scale:1, opacity: 1,y: 0 }}
          viewport={{once: true}}
          >
            <SiInstagram />
          </motion.a>
          <motion.a href='https://www.facebook.com/thaman.gurung.513798' target='_blank' className='social bg-[#1877F2] hover:text-[#1877F2]'
          transition={{ duration: 1, ease: ["easeInOut"] }}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          whileInView={{ scale:1, opacity: 1,y: 0 }}
          viewport={{once: true}}
          >
            <SiFacebook />
          </motion.a>
        </div>
      </motion.div>
        <motion.h2 className='section-heading text-2xl mt-3 pt-5'
        transition={{ duration: 0.6, ease: ["easeInOut"] }}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          whileInView={{ scale:1, opacity: 1,y: 0 }}
          viewport={{once: true}}
        > Send me a message</motion.h2>
        <motion.form ref={form} onSubmit={sendEmail} className=" w-full flex flex-col gap-8 text-lg"
          transition={{ duration: 0.6, ease: ["easeInOut"] }}
          initial={{ scale: 0.8, opacity: 0, x: 80 }}
          whileInView={{ scale:1, opacity: 1,x: 0 }}
          viewport={{once: true}}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-3/4 md:w-1/2 mx-auto px-4 py-3 rounded-md  text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-3/4 md:w-1/2 mx-auto px-4 py-3 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="w-3/4 md:w-1/2 mx-auto px-4 py-3 rounded-md text-white border resize-none border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className={`mx-auto contact-btn font-semibold rounded-md transition-colors duration-300 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
            > {sending ? 'Sending...' : 'Send Message'}</button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactMe