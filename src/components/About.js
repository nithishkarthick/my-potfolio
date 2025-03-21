import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

// Styled Components for Layout
const AboutSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  color: white;
  flex-direction: column; /* Stacking for smaller devices */

  /* Media Query for Tablets and Smaller */
  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    padding: 10px 5px; /* Less padding for mobile */
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  /* Media Query for Tablets and Smaller */
  @media (max-width: 768px) {
    object-fit: contain; /* Adjust video fit */
  }
`;

const AboutContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;

  /* Media Query for Tablets and Smaller */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically */
  }
`;

const AboutImage = styled.div`
  flex: 0 0 300px; /* Set initial size */
  margin-right: 40px;
  
  img {
    border-radius: 50%;
    width: 100%;
    max-width: 300px; /* Increase max width for bigger images */
  }

  /* Media Query for Mobile devices */
  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 20px; /* Space between image and text */
    flex: 0 0 200px; /* Smaller image size for mobile */
  }
`;

const AboutText = styled.div`
  flex: 1;
  max-width: 600px;
  color: #fff;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  /* Media Query for Tablets and Smaller */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem; /* Slightly smaller title on tablet */
    }

    p {
      font-size: 1rem; /* Adjust paragraph font size for tablets */
    }
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem; /* Smaller heading on mobile */
    }

    p {
      font-size: 0.9rem; /* Adjust paragraph font size */
    }
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  /* Media Query for Tablet and Smaller */
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 25px;
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  bottom: 50px;
  left: 300px;
  display: flex;
  justify-content: flex-start;

  a {
    font-size: 2rem;
    margin: 0 15px;
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }

  /* Media Query for Tablets and Smaller */
  @media (max-width: 768px) {
    left: 50px;
    bottom: 40px; /* Adjust bottom for tablet */
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    bottom: 30px; /* Adjust bottom spacing for mobile */
    left: 20px; /* Move social icons closer on mobile */
  }
`;

const About = () => {
  return (
    <AboutSection>
      {/* Background Video */}
      <VideoBackground autoPlay loop muted>
        <source src="/images/coour shadding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <Fade bottom>
        <AboutContentWrapper>
          {/* Profile Image */}
          <AboutImage>
            <img src="/images/IMG_20241224_193255_magic.jpeg" alt="Profile" />
          </AboutImage>

          {/* About Text */}
          <AboutText>
            <h1>Hi, I am Nithish Kumar</h1>
            <p>
              I am a passionate DevOps Engineer & Java Developer, with a strong foundation in backend
              development and systems automation. My journey began with a fascination for technology and
              problem-solving, leading me to explore programming languages and infrastructure management.
            </p>
            <p>
              Over the years, I have gained hands-on experience in building scalable and reliable systems
              using tools like Docker, Kubernetes, AWS, Jenkins, and Terraform. In addition, I have developed
              several Java-based applications, focusing on building high-quality, maintainable software.
            </p>
            <p>
              I’m always excited to work on projects that challenge my skills and allow me to learn new things.
              I thrive in environments that encourage innovation, collaboration, and continuous improvement.
            </p>

            {/* Resume Button */}
            <ResumeButton href="https://drive.google.com/file/d/1j4jL0-VcX4MdZ7f1OWmTJzyryl66xLA7/view?usp=drive_link" target="_blank">
              View My Resume
            </ResumeButton>
          </AboutText>
        </AboutContentWrapper>
      </Fade>

      {/* Social Media Links */}
      <SocialLinks>
        <a href="https://www.linkedin.com/in/nithish-kumar-7b8194316" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/nithishkarthick" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://wa.me/9025451501" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </SocialLinks>
    </AboutSection>
  );
};

export default About;
