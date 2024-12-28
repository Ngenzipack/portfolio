import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_t3qka7n', 'template_s5vdovk', form.current, '_X2DX1xHIfDUgChgO')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Feel free to reach out! I'm a <span>passionate Internet Security</span>  dedicated 
          to protecting systems and data. Whether you need assistance with 
          securing your infrastructure, implementing best practices, or discussing 
          cybersecurity strategies, I'm here to help.
          <br/>  
        </p>
        <p>
        Let's connect!
        </p>

      </div>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            
            <input placeholder="Your Name" type="text" name="name" required />
          </div>
          <div className="form-group">
            
            <input placeholder="Your Email" type="email" name="email" required />
          </div>
          <div className="form-group">
            
            <input placeholder="Subject" type="text" name="subject" required />
          </div>
          <div className="form-group">
            
            <textarea placeholder="Your Message" name="message" required></textarea>
          </div>
          <div className="form-group submit-btn">
            <input type="submit" className="flat-button" value="SEND MESSAGE" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
