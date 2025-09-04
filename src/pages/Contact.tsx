import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    emergency: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      emergency: false
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content text-center">
            <h1>Contact Acme Electric</h1>
            <p className="contact-hero-description">
              Ready to solve your electrical problems? Get in touch with Cincinnati's 
              most trusted electrical professionals today.
            </p>
            <div className="emergency-banner">
              <span className="emergency-icon">🚨</span>
              <div>
                <strong>Electrical Emergency?</strong>
                <p>Call us now for immediate 24/7 service</p>
              </div>
              <a href="tel:+15135551234" className="emergency-btn">
                (513) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid grid grid-2">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Get Your Free Estimate</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours with a free estimate.</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(513) 555-0123"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="wiring">Electrical Wiring</option>
                      <option value="panel-upgrade">Panel Upgrade</option>
                      <option value="outlet-installation">Outlet Installation</option>
                      <option value="lighting">Lighting Installation</option>
                      <option value="ceiling-fan">Ceiling Fan Installation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Describe Your Electrical Issue *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your electrical problem in detail..."
                  ></textarea>
                </div>
                
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="emergency"
                      checked={formData.emergency}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    This is an emergency requiring immediate attention
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-info">
                    <h4>Visit Our Office</h4>
                    <p>
                      123 Main Street<br />
                      Cincinnati, OH 45202
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="method-link">
                      Get Directions →
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-info">
                    <h4>Call Us</h4>
                    <p>
                      <a href="tel:+15135551234">(513) 555-1234</a><br />
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-info">
                    <h4>Email Us</h4>
                    <p>
                      <a href="mailto:info@acmeelectric.com">info@acmeelectric.com</a><br />
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Emergency Only</span>
                  </div>
                </div>
                <div className="emergency-notice">
                  <strong>24/7 Emergency Service Available</strong>
                  <p>We're always here when you need us most</p>
                </div>
              </div>

              {/* Service Areas Map */}
              <div className="service-areas-info">
                <h3>Service Areas</h3>
                <div className="areas-list">
                  <div className="area-group">
                    <strong>Cincinnati Metro:</strong>
                    <span>Downtown, Over-the-Rhine, Mount Adams, Walnut Hills, Hyde Park, Oakley</span>
                  </div>
                  <div className="area-group">
                    <strong>Northern Kentucky:</strong>
                    <span>Newport, Covington, Fort Thomas, Bellevue, Highland Heights</span>
                  </div>
                  <div className="area-group">
                    <strong>Southwest Ohio:</strong>
                    <span>Westwood, Price Hill, Delhi, Cheviot, Green Township</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our electrical services</p>
          </div>
          
          <div className="faq-grid grid grid-2">
            <div className="faq-item">
              <h4>Do you offer emergency services?</h4>
              <p>Yes! We provide 24/7 emergency electrical services for urgent situations like power outages, electrical fires, or exposed wiring.</p>
            </div>
            <div className="faq-item">
              <h4>Are you licensed and insured?</h4>
              <p>Absolutely. We are fully licensed, bonded, and insured. Our master electrician license number is EL12345.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide free estimates?</h4>
              <p>Yes, we provide free estimates for all major electrical work. Emergency service calls have a diagnostic fee that's applied to the repair cost.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept cash, checks, and all major credit cards. We also offer financing options for larger projects.</p>
            </div>
            <div className="faq-item">
              <h4>How quickly can you respond to emergencies?</h4>
              <p>For true emergencies, we typically arrive within 1-2 hours. Regular service calls are usually scheduled within 24-48 hours.</p>
            </div>
            <div className="faq-item">
              <h4>Do you guarantee your work?</h4>
              <p>Yes, all our work comes with a guarantee. Parts are covered by manufacturer warranties, and our labor is guaranteed for one year.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
