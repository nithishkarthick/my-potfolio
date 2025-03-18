import React from 'react';
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
`;

const Logo = styled.img`
  height: 50px;  // Increased logo size for balance
  margin-right: 20px;
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  flex-grow: 1;
  padding: 0;
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
  }
`;

const Navbar = () => {
  return (
    <Nav>
      {/* Logo Section */}
      <Link to="/">
        <Logo src="/images/name logo.png" alt="Logo" />
      </Link>
      
      {/* Nav Items */}
      <NavItems>
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
