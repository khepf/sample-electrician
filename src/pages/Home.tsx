import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Professional Electrical Services in
                <span className="hero-highlight"> Cincinnati, Ohio</span>
              </h1>
              <p className="hero-description">
                Fast, reliable electrical solutions for your home or business. 
                Available 24/7 for emergencies with licensed, experienced electricians.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get Free Quote
                </Link>
                <a href="tel:+15135551234" className="btn btn-secondary">
                  Call Now: (513) 555-1234
                </a>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>Licensed & Insured</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⭐</span>
                  <span>5-Star Reviews</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/hero-electrician.jpg" alt="Professional electrician at work" />
              <div className="hero-badge">
                <span className="badge-text">38+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Expert Electrical Services</h2>
            <p>We handle all your electrical needs with professional expertise and guaranteed satisfaction</p>
          </div>
          <div className="services-grid grid grid-3">
            <div className="service-card card">
              <div className="service-icon">⚡</div>
              <h3>Emergency Repairs</h3>
              <p>24/7 emergency electrical services for power outages, electrical faults, and urgent repairs.</p>
              <Link to="/services#emergency" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card card">
              <div className="service-icon">🔌</div>
              <h3>Wiring & Outlets</h3>
              <p>Professional electrical wiring and outlet installation for all types of electrical needs.</p>
              <Link to="/services#wiring" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card card">
              <div className="service-icon">🏠</div>
              <h3>Panel Upgrades</h3>
              <p>Electrical panel installation, upgrades, and maintenance for safe, reliable power.</p>
              <Link to="/services#panel-upgrade" className="service-link">Learn More →</Link>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Why Choose Acme Electric?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">🏆</div>
                  <div className="benefit-content">
                    <h4>38+ Years Experience</h4>
                    <p>Decades of experience serving the Cincinnati area with professional electrical solutions.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⏰</div>
                  <div className="benefit-content">
                    <h4>24/7 Emergency Service</h4>
                    <p>Available around the clock for emergency electrical issues that can't wait.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-content">
                    <h4>Upfront Pricing</h4>
                    <p>No surprises - we provide clear, honest pricing before any work begins.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-content">
                    <h4>Fully Licensed & Insured</h4>
                    <p>Licensed, bonded, and insured for your complete peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-image">
              <img src="/team-photo.jpg" alt="Acme Electric team" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Serving Cincinnati & Surrounding Areas</h2>
            <p>We proudly serve residential and commercial customers throughout the greater Cincinnati area</p>
          </div>
          <div className="areas-grid grid grid-4">
            <div className="area-item">
              <h4>Cincinnati</h4>
              <p>Downtown, Over-the-Rhine, Mount Adams, Walnut Hills</p>
            </div>
            <div className="area-item">
              <h4>Northern Kentucky</h4>
              <p>Newport, Covington, Fort Thomas, Bellevue</p>
            </div>
            <div className="area-item">
              <h4>East Side</h4>
              <p>Hyde Park, Oakley, Madeira, Indian Hill</p>
            </div>
            <div className="area-item">
              <h4>West Side</h4>
              <p>Westwood, Price Hill, Delhi, Cheviot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta section" style={{ background: 'var(--primary-blue)', color: 'var(--white)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Need Electrical Services? We're Here to Help!
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Get a free estimate today or call for emergency service
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-secondary">
              Get Free Estimate
            </Link>
            <a href="tel:+15135551234" className="btn btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
              Emergency: (513) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
