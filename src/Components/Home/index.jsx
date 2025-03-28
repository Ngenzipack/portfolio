import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ','P', 'a', 't', 'r', 'i', 'c', 'k']
  const jobArray = [
    'S',
    'e',
    'c',
    'u',
    'r',
    'i',
    't',
    'y', 
    ' ',
    'A',
    'n',
    'a',
    'l',
    'y',
    's',
    't',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <div className="container home-page">
        

        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Security Analyst / DevSecOps / Cybersecurity | ON-CANADA</h2> 
          <h2>Education: COMPUTER ENGINEERING - Mohawk College</h2>
           
        </div>
        <div class="home-experience">
            

            <p>
              Experienced in securing systems, <span>automating security processes, </span> 
              and <span> protecting digital assets, </span>   
            </p>
            <p>
            I specialize in<span> DevSecOps </span>practices, 
            <span> identity and access management,</span> and<span> system hardening.</span>
            </p>

            <p>
              Explore how my expertise can help fortify your organization's 
              technology and data <span> against evolving threats. </span> 
            </p>

            <p>
            Skilled in <span>Python, Java, JavaScript, and C#, ...</span>  with a passion for <span> problem-solving.</span> 
            </p>
            
            <p>

            </p>
            <p>
              <br/>
              Beyond tech, I enjoy Piano, I play Chess & Soccer!
              Play Chess? <a href='https://link.chess.com/play/5x6NtV' target="_blank" rel="noreferrer" class="chess-link">Challenge Me</a>
            </p>
        </div>
        <div class="cert-image">
        <a href="https://www.certmetrics.com/comptia/public/verification.aspx?code=Q2EEWW5W175LVDWW" target="_blank" rel="noreferrer">
            <img src="src/assets/images/Compt.png"/>
        </a> 

          <a><image src=''/></a>
        </div>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>

        <a href="src/assets/Files/Resume_Patrick.pdf" download className="download-button">

          <span>DOWNLOAD CV</span>
        </a>
      </div>
    </>
  )
}

export default Home
