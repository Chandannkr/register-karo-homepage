import "./ContactBar.css"; // Import CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const ContactBar = () => {
  return (
    <header className="contact-bar">
      <div className="contact-bar-content">
        {/* Email */}
        <a href="mailto:info@registerkaro.in" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>info@registerkaro.in</span>
        </a>
        <span className="separator">|</span> {/* Separator after email */}

        <a href="tel:+918447746183" className="contact-link">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <span>+91 84477 46183</span>
        </a>
        <span className="separator">|</span> {/* Separator after phone */}
        {/* Social Icons */}
        <div className="social-icons">
          <a href="#" aria-label="Facebook" className="social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" aria-label="Instagram" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" aria-label="Twitter" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" aria-label="Pinterest" className="social-link">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default ContactBar;
