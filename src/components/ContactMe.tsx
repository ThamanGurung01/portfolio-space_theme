import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import CopyToClipboard from './ui/CopyToClipboard'
import { SiGithub,SiLinkedin,SiInstagram,SiFacebook} from 'react-icons/si'
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
    <section id='contact' className='h-screen w-full py-20 text-white'>
      <ToastContainer position="top-right" autoClose={3000} />
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
        <form ref={form} onSubmit={sendEmail} className=" w-full flex flex-col gap-8 text-lg">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-1/2 mx-auto px-4 py-3 rounded-md  text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-1/2 mx-auto px-4 py-3 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="w-1/2 mx-auto px-4 py-3 rounded-md text-white border resize-none border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className={`w-3/12 mx-auto contact-btn font-semibold py-3 px-6 rounded-md transition-colors duration-300 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
            > {sending ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe