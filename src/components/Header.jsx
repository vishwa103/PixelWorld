import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // React Router hook
import logo from '../assets/logo.svg';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Header = () => {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [navColor, setNavColor] = useState('white'); // Default text color for nav
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent'); // Default navbar background color

  useEffect(() => {
    // Update activeLink based on current path
    setActiveLink(location.pathname);

    // Update nav text color and navbar background color based on the page
    if (location.pathname === '/') {
      setNavColor('var(--white-color)');
      setNavBackgroundColor('var(--black-color)'); // Navbar background for Home page
      document.body.style.backgroundColor = 'var(--black-color)'; // Background color for Home page
    } else if (location.pathname === '/aboutus') {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Navbar background for About Us page
      document.body.style.backgroundColor = 'var(--white-color)'; // Background color for About Us page
    } else if (location.pathname === '/products') {
      setNavColor('var(--white-color)');
      setNavBackgroundColor('var(--black-color)'); // Navbar background for Products page
      document.body.style.backgroundColor = 'var(--black-color)'; // Background color for Products page
    } else if (location.pathname === '/projects') {
      setNavColor('var(--white-color)');
      setNavBackgroundColor('var(--black-color)'); // Navbar background for Projects page
      document.body.style.backgroundColor = 'var(--black-color)'; // Background color for Projects page
    } else if (location.pathname === '/services') {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Navbar background for Services page
      document.body.style.backgroundColor = 'var(--white-color)'; // Background color for Services page
    } else if (location.pathname === '/faq') {
      setNavColor('var(--white-color)');
      setNavBackgroundColor('var(--black-color)'); // Navbar background for Projects page
      document.body.style.backgroundColor = 'var(--black-color)'; // Background color for Projects page
    } else {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Default navbar background
      document.body.style.backgroundColor = 'var(--white-color)'; // Default background for unknown pages
    }

    // Cleanup: Reset the background color when the component unmounts or when the page changes
    return () => {
      document.body.style.backgroundColor = ''; // Reset to default when navigating away
    };
  }, [location]);

  return (
    <Navbar
      bg="transparent"
      className="px-5 py-4 header"
      expand="lg"
      style={{ color: navColor, backgroundColor: navBackgroundColor }} // Apply dynamic background color to the navbar
    >
      {/* Logo on the left */}
      <Navbar.Brand
        as={Link}
        to="/"
        className="header-title"
        style={{ color: navColor }}
      >
        <img src={logo} alt="Pixel World" />
        <b>Pixel World</b>
      </Navbar.Brand>

      {/* Toggler for mobile view */}
      <Navbar.Toggle
        style={{ color: navColor }}
        aria-controls="navbar-nav"
      />

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
