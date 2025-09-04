import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo-placeholder.png" alt="Acme Electric Logo" className="footer-logo-image" />
              <div>
                <h3 className="footer-title">Acme Electric</h3>
                <p className="footer-subtitle">Professional Electrical Services</p>
              </div>
            </div>
            <p className="footer-description">
              Serving Cincinnati and surrounding areas with reliable, professional electrical services since 1985. 
              Licensed, bonded, and insured for your peace of mind.
            </p>
            <div className="footer-certifications">
              <span className="certification">Licensed & Bonded</span>
              <span className="certification">24/7 Emergency Service</span>
              <span className="certification">Fully Insured</span>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-list">
              <li><Link to="/services#emergency">Emergency Repairs</Link></li>
              <li><Link to="/services#wiring">Electrical Wiring</Link></li>
              <li><Link to="/services#panel-upgrade">Panel Upgrades</Link></li>
              <li><Link to="/services#outlet-installation">Outlet Installation</Link></li>
              <li><Link to="/services#lighting">Lighting Installation</Link></li>
              <li><Link to="/services#ceiling-fans">Ceiling Fan Installation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address:</strong><br />
                  123 Main Street<br />
                  Cincinnati, OH 45202
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+15135551234">(513) 555-1234</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:info@acmeelectric.com">info@acmeelectric.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="footer-section">
            <h4 className="footer-heading">Business Hours</h4>
            <div className="hours">
              <div className="hours-item">
                <span className="day">Monday - Friday:</span>
                <span className="time">7:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday:</span>
                <span className="time">8:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday:</span>
                <span className="time">Emergency Only</span>
              </div>
              <div className="emergency-hours">
                <strong>24/7 Emergency Service Available</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Acme Electric. All rights reserved.
            </p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
