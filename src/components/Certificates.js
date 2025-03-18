import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';

// Styled Components for Layout
const CertificatesSection = styled.section`
  position: relative;
  padding: 60px 20px;
  background-color: rgba(244, 244, 244, 0.8); /* Semi-transparent background */
  text-align: center;
  z-index: 1; /* Ensure content is above the video */
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Keep the video behind the content */
`;

const CertificatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const CertificateCard = styled.div`
  background: linear-gradient(45deg, #ff7e5f, #feb47b); /* Multi-color gradient background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 350px;
  width: 100%;
  transition: transform 0.3s ease, background 0.5s ease; /* Added background transition */

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(45deg, #6a11cb, #2575fc); /* Change gradient on hover */
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: white; /* Ensure text is visible against gradient background */
  }

  p {
    font-size: 16px;
    color: white; /* Ensure text is visible against gradient background */
  }

  a {
    display: inline-block;
    margin-top: 15px;
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Certificates = () => {
  return (
    <CertificatesSection>
      {/* Background Video */}
      <VideoBackground autoPlay loop muted>
        <source src="/images/certificate pg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '40px' }}>My Certificates</h2>

      <CertificatesContainer>
        {/* DevOps Certificate */}
        <Zoom>
          <CertificateCard>
            <img src="/images/jspider.jpg" alt="DevOps Certificate" />
            <h3>AWS with DevOps Certificate</h3>
            <p>Earned an AWS with DevOps certification from Jspider Training institution, showcasing expertise in CI/CD, Docker, Kubernetes, and cloud automation.</p>
            <a href="https://drive.google.com/file/d/1wadk-5PJ0WsLaxPpguW1iD3t1zgBv4dd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </CertificateCard>
        </Zoom>

        {/* Java Fullstack Certificate */}
        <Zoom>
          <CertificateCard>
            <img src="/images/jspider.jpg" alt="Java Fullstack Certificate" />
            <h3>Java Fullstack Certificate</h3>
            <p>Completed a full-stack Java development program from jspider training institution, covering Java, Spring Boot, and front-end technologies.</p>
            <a href="https://drive.google.com/file/d/1x0ChkphiLnvLyr0elDOHG-RGkvlWgajP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </CertificateCard>
        </Zoom>

        {/* AWS Lambda Certificate */}
        <Zoom>
          <CertificateCard>
            <img src="/images/udemy.jpg" alt="AWS Lambda Certificate" />
            <h3>AWS Lambda Certificate</h3>
            <p>Completed the AWS Lambda certification from Udemy, gaining hands-on experience with serverless architecture and AWS cloud services.</p>
            <a href="https://drive.google.com/file/d/1XPiNqJX2exXfRbJIue5iDO5BeLn-TwVb/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </CertificateCard>
        </Zoom>
      </CertificatesContainer>
    </CertificatesSection>
  );
};

export default Certificates;
