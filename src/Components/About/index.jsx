import { useEffect, useState } from 'react'
import {
  faPython,
  faJava,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { faDatabase, faTerminal } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Hi, I’m Patrick Ngenzi, <span>Security Analyst and Computer Engineering graduate </span> 
           from Mohawk College with over 5 years of experience in IT industry, I worked in <span>network administration, </span> 
           and System support. I specialize in securing systems,<span> optimizing </span> 
           <span>IT infrastructures</span>, and solving complex technical challenges.

          </p>
          <p>
          I am proficient in <span>Python, Java, JavaScript, and C#,</span> with a strong 
          foundation in <span>networking (Cisco Networking, LAN/WAN, and firewalls like Palo Alto and Fortinet). </span>
          
          
          </p>
          <p>
          I also hold certifications such as <span>CompTIA Security+</span> and the Google Cybersecurity Certificate.

          </p>
          <p>
          My mission is to empower organizations with secure, efficient, 
          and innovative technical solutions. Let’s work together!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#306998" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#fb0000" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDatabase} color="#f9f74f " />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faTerminal} color="#000000 " />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
