import { useState } from "react";
import "./Header.css";
import logo from "../../public/logo.png"; // Replace with your logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // State for handling dropdown toggle
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="RegisterKaro Logo" />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            {/* Our Services Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a href="/services">
                Our Services <FontAwesomeIcon icon={faChevronDown} />
              </a>
              {servicesOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/services/service1">Service 1</a></li>
                  <li><a href="/services/service2">Service 2</a></li>
                  <li><a href="/services/service3">Service 3</a></li>
                </ul>
              )}
            </li>

            {/* Blog Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <a href="/blog">
                Blog <FontAwesomeIcon icon={faChevronDown} />
              </a>
              {blogOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/blog/category1">Category 1</a></li>
                  <li><a href="/blog/category2">Category 2</a></li>
                </ul>
              )}
            </li>

            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </nav>

        {/* Search and Call-to-Action */}
        <div className="cta-section">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <a href="/talk-to-expert" className="cta-button">
            Talk An Expert
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
