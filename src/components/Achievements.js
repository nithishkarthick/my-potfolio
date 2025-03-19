import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';

// Styled Components for Layout
const AchievementsSection = styled.section`
  position: relative;
  padding: 60px 20px;
  background-color: rgba(249, 249, 249, 0.8); /* Semi-transparent background */
  text-align: center;
  z-index: 1; /* Ensure content is above the video */

  /* Media Query for Tablets and Smaller */
  @media (max-width: 768px) {
    padding: 50px 15px; /* Adjust padding for smaller screens */
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    padding: 30px 10px; /* Less padding for mobile */
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Keep the video behind the content */

  /* Media Query for Tablet and smaller */
  @media (max-width: 768px) {
    object-fit: contain; /* Adjust the video fit for smaller screens */
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between cards */
  justify-content: center; /* Center cards horizontally */
  align-items: center; /* Center cards vertically */
  justify-items: center; /* Center items inside each grid cell */
  max-width: 1200px; /* Optional: you can limit the max width for large screens */
  margin: 0 auto; /* Center the grid container itself */

  /* Media Query for Tablets and smaller */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust grid layout for tablets */
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Stack items vertically on mobile */
    gap: 15px; /* Reduced gap for mobile */
  }
`;

const AchievementCard = styled.div`
  background: linear-gradient(45deg, rgb(225, 32, 77), rgb(88, 151, 172), rgb(199, 17, 240)); /* Multi-color gradient background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, background 0.5s ease; /* Added background transition */

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(45deg, rgb(30, 19, 239), rgb(6, 84, 24), rgb(148, 113, 6)); /* Change gradient on hover */
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

  /* Media Query for Tablets and smaller */
  @media (max-width: 768px) {
    padding: 15px; /* Adjust padding for tablets */
    h3 {
      font-size: 18px; /* Slightly smaller title on tablets */
    }
    p {
      font-size: 14px; /* Adjust paragraph font size for tablets */
    }
  }

  /* Media Query for Mobile */
  @media (max-width: 480px) {
    padding: 12px; /* Adjust padding for mobile */
    h3 {
      font-size: 16px; /* Smaller heading for mobile */
    }
    p {
      font-size: 13px; /* Adjust paragraph font size for mobile */
    }
  }
`;

const Achievements = () => {
  return (
    <AchievementsSection>
      {/* Background Video */}
      <VideoBackground autoPlay loop muted>
        <source src="/images/Acheievement pg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '40px' }}>My Achievements</h2>

      <AchievementsGrid>
        {/* CM Trophy Cricket Tournament Achievement */}
        <Zoom>
          <AchievementCard>
            <img src="/images/CM trophy.jpg" alt="CM Trophy Cricket Tournament" />
            <h3>CM Trophy Cricket Tournament</h3>
            <p>Won the CM Trophy in the prestigious District level cricket tournament. It was an amazing experience representing my college and bringing home the trophy.</p>
          </AchievementCard>
        </Zoom>

        {/* Anna University Cricket Tournament Achievement */}
        <Zoom>
          <AchievementCard>
            <img src="/images/Zonal match.jpg" alt="Anna University Cricket Tournament" />
            <h3>Anna University Cricket Tournament</h3>
            <p>Secured Third place in the Anna University Cricket Tournament, where we competed with several colleges. It was a great learning experience.</p>
          </AchievementCard>
        </Zoom>
      </AchievementsGrid>
    </AchievementsSection>
  );
};

export default Achievements;
