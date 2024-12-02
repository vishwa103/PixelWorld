import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // React Router hook
import logo from '../assets/logo.svg';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Header = () => {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [navColor, setNavColor] = useState('white'); // Default color for Home page

  useEffect(() => {
    // Update activeLink and navColor based on the current path
    setActiveLink(location.pathname);

    // Set text color based on the page
    if (location.pathname === '/') {
      setNavColor('white'); // Home page
    } else {
      setNavColor('black'); // Other pages
    }
  }, [location]);

  return (
    <Navbar
      bg="transparent"
      className="px-5 py-4 header"
      expand="lg"
      style={{ color: navColor }} // Apply dynamic color
    >
      {/* Logo on the left */}
      <Navbar.Brand
        as={Link}
        to="/"
        className="header-title" style={{ color: navColor }}>
        <img src={logo} alt="Pixel World" />
        <b>Pixel World</b>
      </Navbar.Brand>

      {/* Toggler for mobile view */}
      <Navbar.Toggle
        style={{ color: navColor }}
        aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        {/* Center navigation links */}
        <Nav className="mx-auto">
          <Nav.Link
            className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
            as={Link}
            to="/"
            style={{ color: navColor }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={`nav-link ${activeLink === '/aboutus' ? 'active' : ''}`}
            as={Link}
            to="/aboutus"
            style={{ color: navColor }}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            className={`nav-link ${activeLink === '/products' ? 'active' : ''}`}
            as={Link}
            to="/products"
            style={{ color: navColor }}
          >
            Products
          </Nav.Link>
          <Nav.Link
            className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}
            as={Link}
            to="/projects"
            style={{ color: navColor }}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            className={`nav-link ${activeLink === '/services' ? 'active' : ''}`}
            as={Link}
            to="/services"
            style={{ color: navColor }}
          >
            Services
          </Nav.Link>
          <Nav.Link
            className={`nav-link ${activeLink === '/faq' ? 'active' : ''}`}
            as={Link}
            to="/faq"
            style={{ color: navColor }}
          >
            FAQ
          </Nav.Link>
        </Nav>

        {/* Button on the right */}
        <button
          className="button-one"
          href="#getintouch"
        >
          Get in Touch <IoArrowForwardCircleOutline size={20} />
        </button>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default Header;
