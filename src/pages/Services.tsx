import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for service sections
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const services = [
    {
      id: 'emergency',
      icon: '⚡',
      title: 'Emergency Electrical Repairs',
      description: 'Available 24/7 for urgent electrical emergencies that can\'t wait.',
      features: [
        'Power outage repairs',
        'Electrical fault diagnosis',
        'Circuit breaker issues',
        'Electrical fire safety',
        'Storm damage repairs',
        'Electrical safety inspections'
      ],
      pricing: 'Emergency service fees apply after hours'
    },
    {
      id: 'wiring',
      icon: '�',
      title: 'Electrical Wiring & Outlets',
      description: 'Professional electrical wiring services for all types of installations.',
      features: [
        'New outlet installation',
        'GFCI outlet upgrades',
        'USB outlet installation',
        'Home rewiring',
        'Code compliance updates',
        'Smart outlet installation'
      ],
      pricing: 'Starting at $125'
    },
    {
      id: 'panel-upgrade',
      icon: '🏠',
      title: 'Electrical Panel Services',
      description: 'Complete electrical panel installation, repair, and upgrade services.',
      features: [
        'Panel upgrades',
        'Circuit breaker replacement',
        'Sub-panel installation',
        'Load calculations',
        'Code compliance upgrades',
        'Emergency panel repairs'
      ],
      pricing: 'Installation starting at $1,800'
    },
    {
      id: 'lighting',
      icon: '�',
      title: 'Lighting Installation',
      description: 'Expert lighting installation and repair for indoor and outdoor applications.',
      features: [
        'Recessed lighting',
        'Chandelier installation',
        'Track lighting',
        'Outdoor lighting',
        'Landscape lighting',
        'LED conversions'
      ],
      pricing: 'Free estimates for lighting projects'
    },
    {
      id: 'ceiling-fans',
      icon: '🌪️',
      title: 'Ceiling Fan Installation',
      description: 'Professional ceiling fan installation and repair services.',
      features: [
        'Ceiling fan installation',
        'Fan motor repair',
        'Remote control setup',
        'Balance adjustments',
        'Light kit installation',
        'Smart fan installation'
      ],
      pricing: 'Installation starting at $150'
    },
    {
      id: 'commercial',
      icon: '🏢',
      title: 'Commercial Electrical',
      description: 'Professional commercial electrical services for businesses.',
      features: [
        'Commercial wiring',
        'Lighting systems',
        'Electrical maintenance',
        'Code compliance',
        'Energy efficiency upgrades',
        '24/7 commercial support'
      ],
      pricing: 'Custom quotes for commercial work'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content text-center">
            <h1>Professional Electrical Services</h1>
            <p className="services-hero-description">
              Comprehensive electrical solutions for your home or business. 
              Licensed professionals with 38+ years of experience serving Cincinnati.
            </p>
            <div className="services-hero-features">
              <div className="hero-feature">
                <span className="hero-feature-icon">⚡</span>
                <span>24/7 Emergency Service</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">💰</span>
                <span>Upfront Pricing</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">🛡️</span>
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="service-detail-card card">
                <div className="service-detail-header">
                  <div className="service-detail-icon">{service.icon}</div>
                  <div>
                    <h2 className="service-detail-title">{service.title}</h2>
                    <p className="service-detail-description">{service.description}</p>
                  </div>
                </div>
                
                <div className="service-detail-content">
                  <div className="service-features">
                    <h4>What We Do:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-pricing">
                    <div className="pricing-badge">
                      <strong>{service.pricing}</strong>
                    </div>
                    <div className="service-actions">
                      <a href="tel:+15135551234" className="btn btn-primary">
                        Call Now
                      </a>
                      <a href="/contact" className="btn btn-outline">
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-process section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Service Process</h2>
            <p>We make getting professional electrical service easy and stress-free</p>
          </div>
          
          <div className="process-steps grid grid-4">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Call or Book Online</h3>
              <p>Contact us by phone or through our website. We're available 24/7 for emergencies.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Schedule Service</h3>
              <p>We'll schedule a convenient time that works for you, often same-day service available.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Professional Diagnosis</h3>
              <p>Our licensed electrician will assess the problem and provide upfront pricing.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Quality Work</h3>
              <p>We complete the job efficiently using quality parts and guarantee our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-cta section" style={{ background: 'var(--secondary-orange)', color: 'var(--white)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Electrical Emergency? We're Here 24/7!
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Don't let an electrical emergency put you in danger. Call now for immediate assistance.
          </p>
          <a href="tel:+15135551234" className="btn btn-primary" style={{ fontSize: '1.25rem' }}>
            Emergency Hotline: (513) 555-1234
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
