import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-reveal';

const ExperienceSection = styled.section`
  position: relative;
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.7), rgba(0, 255, 255, 0.7)); /* Gradient background inside the section */
  z-index: 1; /* Keeps the content above the video */
  color: white; /* Ensures the text inside is white */

  /* Media Query for Tablets */
  @media (max-width: 768px) {
    padding: 50px 15px;
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Places the video behind the content */

  /* Make video responsive */
  @media (max-width: 768px) {
    height: auto;
  }
`;

const ExperienceItem = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.6), rgba(0, 255, 255, 0.6), rgba(255, 255, 0, 0.6)); /* Multi-color gradient background */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(77, 71, 71);
  transition: transform 0.3s ease;
  width: 100%; /* Ensure it fills the width on smaller screens */

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.8rem;
    color: #333;

    /* Media Query for Tablets and Mobile */
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    /* Media Query for Mobile */
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #555;

    /* Media Query for Tablets and Mobile */
    @media (max-width: 768px) {
      font-size: 1rem;
    }

    /* Media Query for Mobile */
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  /* Media Query for Tablets and Mobile */
  @media (max-width: 768px) {
    padding: 15px;
    margin: 15px 0;
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    padding: 10px;
    margin: 10px 0;
  }
`;

const Experience = () => {
  return (
    <ExperienceSection>
      {/* Background Video */}
      <VideoBackground autoPlay loop muted>
        <source src="/images/Exp pg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Experience</h2>

      <Slide left>
        <ExperienceItem>
          <h3>Associate Software Engineer</h3>
          <p>Jan 2025 - Present</p>
          <p>Responsible for monitoring system performance and collaborating with engineers.</p>
        </ExperienceItem>

        <ExperienceItem>
          <h3>Java Fullstack Developer Intern</h3>
          <p>June 2024 - December 2024</p>
          <p>Worked on Java-based applications, integrating cloud services and optimizing performance.</p>
        </ExperienceItem>
      </Slide>
    </ExperienceSection>
  );
};

export default Experience;
