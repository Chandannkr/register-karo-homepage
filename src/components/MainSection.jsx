import "react";
import "./MainSection.css";
import illustration from "../../public/illustraion.png"; // Replace with your illustration file
// import logo from "../../public/logo.png"; // Replace with your logo file
import targetGraphic from "../../public/rightbottom.png"; // Replace with your target graphic file

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-content">
        {/* Left Side Content */}
        <div className="text-content">
          <div className="rating">
            <span className="star">★ Google Rating</span>
            <span className="stars">★★★★★</span>
          </div>
          <h1>
            Your trusted partner
            <br />
            for compliance business needs
          </h1>
          <p className="description">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, <strong>registrations</strong>,{" "}
            <strong>tax filings</strong>, and other <strong>legal matters</strong>.
          </p>
          <div className="stats">
            <div className="stat-item">
              <strong>4.5+</strong>
              <span>Customer Rating</span>
            </div>
            <div className="stat-item">
              <strong>20,000+</strong>
              <span>Clients</span>
            </div>
            <div className="stat-item">
              <strong>99.8%</strong>
              <span>Financial Stability</span>
            </div>
          </div>
          <div className="cta-buttons">
            <button className="primary-btn">Talk An Expert</button>
            <button className="secondary-btn">See how it works</button>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="illustration">
          <img src={illustration} alt="Illustration" className="illustration-image" />
          <ul className="service-list">
            <li>Annual Compliance</li>
            <li>Payroll Services</li>
            <li>Company Formation</li>
            <li>Annual Compliance</li>
          </ul>
          {/* Target Graphic Image */}
          <img src={targetGraphic} alt="Target Graphic" className="target-graphic" />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
