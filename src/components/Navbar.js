import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px 20px;  // Increased padding for larger navbar size
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Media query for smaller screens (tablet and mobile) */
  @media (max-width: 768px) {
    padding: 10px 15px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 10px 10px; /* Further adjust padding for mobile */
  }
`;

const Logo = styled.img`
  height: 50px;  // Increased logo size for balance
  margin-right: 20px;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    height: 40px;  /* Smaller logo size for tablet */
  }

  @media (max-width: 480px) {
    height: 30px;  /* Even smaller logo for mobile */
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  flex-grow: 1;
  padding: 0;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'block' : 'none')}; /* Toggle display of nav items */
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;  // Decreased gap between items
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;

    /* Media query for smaller screens */
    @media (max-width: 768px) {
      font-size: 16px; /* Adjust font size for tablet */
    }

    @media (max-width: 480px) {
      font-size: 14px; /* Adjust font size for mobile */
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;

  /* Hamburger lines */
  div {
    width: 100%;
    height: 4px;
    background-color: white;
  }

  /* Media query for smaller screens (tablet and mobile) */
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      {/* Logo Section */}
      <Link to="/">
        <Logo src="/images/name logo.png" alt="Logo" />
      </Link>

      {/* Hamburger Menu for mobile */}
      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      {/* Nav Items */}
      <NavItems isOpen={isOpen}>
        <NavItem><Link to="/">About Me</Link></NavItem>
        <NavItem><Link to="/skills">Skills</Link></NavItem>
        <NavItem><Link to="/experience">Experience</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
        <NavItem><Link to="/achievements">Achievements</Link></NavItem>
        <NavItem><Link to="/certificates">Certificates</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
