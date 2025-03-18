import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';

// Styled Components
const ProjectsSection = styled.section`
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 60px 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background for readability */
  text-align: center;
  z-index: 1; /* Keep the content above the video */
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;  
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Keeps the video behind the content */
`;

const ProjectCard = styled.div`
  padding: 20px;
  background: linear-gradient(45deg,rgba(235, 205, 14, 0.93),rgb(11, 238, 22),rgb(228, 94, 161)); /* Multi-color gradient background */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background 0.3s ease; /* Added background transition on hover */
  text-align: center;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(45deg, #007bff, #28a745, #ffc107); /* Change gradient on hover */
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
  align-items: stretch;
`;

const projects = [
  {
    name: 'Deployment Project',
    img: '/images/Deployment project.png',
    description: 'Deploy a Node.js app on AWS using Docker & Kubernetes.',
    link: 'https://github.com/nithishkarthick/ownWing.git',
  },
  {
    name: 'Node Js web Application',
    img: '/images/wep app.png',
    description: 'Implementing github action for automated deployment and testing.',
    link: 'https://github.com/nithishkarthick/Nodejs_deployment.git',
  },
  {
    name: 'React Portfolio',
    img: '/images/name logo.png',
    description: 'A personal portfolio built with React.js and styled-components.',
    link: 'https://yourprojectlink.com/react-portfolio',
  },
  {
    name: 'Music App Deployment',
    img: '/images/Music logo.png',
    description: 'Deploying a web application using jenkins pipeline and Apache tomcat server On AWS.',
    link: 'https://github.com/nithishkarthick/Deployment_MyPlayer.git',
  },
];

const Projects = () => {
  return (
    <ProjectsSection>
      {/* Background Video */}
      <VideoBackground autoPlay loop muted>
        <source src="/images/project pg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <h2 style={{ fontSize: '3rem', color: '#FFF', marginBottom: '40px' }}>My Projects</h2>

      <ProjectGrid>
        {projects.map((project, index) => (
          <Zoom key={index}>
            <ProjectCard>
              <img src={project.img} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </ProjectCard>
          </Zoom>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
