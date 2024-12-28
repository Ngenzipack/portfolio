import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// ProjectCard component
const ProjectCard = ({ title, description, link, imageSrc }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="project-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  )
}

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  // Projects Data (Modify this with your actual project info)
  const projects = [
    {
      title: 'Python',
      description: 'Developing Nmap Scanner, Port Scanner, Banner Glabber, Proper Data handling, Probability Calculator, Budget ...',
      link: 'https://replit.com/@Ngenzipack',
      imageSrc: 'src/assets/images/python.jpg'
    },
    {
      title: 'Github',
      description: 'Javascipt WebPage, Arithmetic format, Polygony Area Calculator, Azure AD Project /Entra ID',
      link: 'https://github.com/Ngenzipack',
      imageSrc: 'src/assets/images/github.jpg'
    },
    {
      title: 'FreeCodeCamp',
      description: 'JavaScript Libraries, React JS, BootStrap ...',
      link: 'https://www.freecodecamp.org/ngenzi',
      imageSrc: 'src/assets/images/freecodecamp.jpg'
    },
    {
      title: 'Code Pen',
      description: 'Web Responsive Projects, in HTML, CSS, and JavaScript',
      link: 'https://codepen.io/ngenzipack',
      imageSrc: 'src/assets/images/Codepen.gif'
    }
  ]

  return (
    <div className="projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
      </div>

      {/* Projects Section */}

      <div className="projects-section">
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
