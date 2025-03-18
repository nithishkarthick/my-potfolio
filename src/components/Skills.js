import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';

const SkillsSection = styled.section`
  position: relative;
  padding: 60px 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent background for the content */
  text-align: center;
  z-index: 1; /* Ensures the content is above the background video */
`;

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Places the video behind the content */
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

const SkillCard = styled.div`
  padding: 20px;
  background: linear-gradient(45deg, #ff416c, #ff4b2b, #ffd700); /* Multi-color gradient background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(45deg, #007bff, #28a745, #ffc107); /* Gradient changes on hover */
    color: white;
  }

  img {
    max-width: 50px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    color: #333;
  }
`;

const skills = [
  { name: 'Java', img: '/images/java icon.png' },
  { name: 'DevOps', img: '/images/devops icon.png' },
  { name: 'AWS', img: '/images/Aws icon.png' },
  { name: 'Docker', img: '/images/docker logo.png' },
  { name: 'Kubernetes', img: '/images/kubernates icon.png' },
  { name: 'Git', img: '/images/git icon.png' },
  { name: 'Jenkins', img: '/images/jenkins icon.png' },
  { name: 'Terraform', img: '/images/terraform icon.png' },
  { name: 'Linux', img: '/images/linux icon.png' },
  { name: 'Windows', img: '/images/Windows icon.png' },
  { name: 'Html', img: '/images/html icon.png' },
  { name: 'Css', img: '/images/css icon.png' },
  { name: 'JavaScript', img: '/images/js icon.png' },
  { name: 'Mysql', img: '/images/mysql icon.png' },
];

const Skills = () => {
  return (
    <SkillsSection>
      {/* Background Video */}
      <VideoBackground autoPlay loop muted>
        <source src="/images/Skill bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <h2 style={{ color: 'agenda', fontSize: '3rem', marginBottom: '40px' }}>My Skills</h2>

      <SkillsGrid>
        {skills.map((skill, index) => (
          <Zoom key={index}>
            <SkillCard>
              <img src={skill.img} alt={skill.name} />
              <h3>{skill.name}</h3>
            </SkillCard>
          </Zoom>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
