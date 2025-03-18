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

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between cards */
  justify-content: center; /* Center cards horizontally */
  align-items: center; /* Center cards vertically */
  justify-items: center; /* Center items inside each grid cell */
  max-width: 1200px; /* Optional: you can limit the max width for large screens */
  margin: 0 auto; /* Center the grid container itself */
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
