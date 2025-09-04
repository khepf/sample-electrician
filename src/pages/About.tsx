import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Mike Johnson',
      role: 'Owner & Master Electrician',
      experience: '38 years',
      image: '/team-mike.jpg',
      bio: 'Mike founded Acme Electric in 1985 and has been serving Cincinnati families ever since.'
    },
    {
      name: 'Sarah Davis',
      role: 'Lead Electrician',
      experience: '15 years',
      image: '/team-sarah.jpg',
      bio: 'Sarah specializes in complex electrical repairs and emergency services with extensive training.'
    },
    {
      name: 'Tom Wilson',
      role: 'Service Electrician',
      experience: '10 years',
      image: '/team-tom.jpg',
      bio: 'Tom handles residential installations and routine electrical maintenance with precision.'
    },
    {
      name: 'Lisa Cheney',
      role: 'Customer Service Manager',
      experience: '8 years',
      image: '/team-lisa.jpg',
      bio: 'Lisa ensures every customer receives exceptional service from first call to completion.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content grid grid-2">
            <div>
              <h1>About Acme Electric</h1>
              <p className="about-hero-description">
                For over 38 years, Acme Electric has been Cincinnati's trusted partner for 
                professional electrical services. We're a family-owned business committed to 
                providing reliable, honest, and expert electrical solutions.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">38+</div>
                  <div className="stat-label">Years in Business</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Emergency Service</div>
                </div>
              </div>
            </div>
            <div className="about-hero-image">
              <img src="/about-hero.jpg" alt="Acme Electric building" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section">
        <div className="container">
          <div className="grid grid-2">
            <div className="story-image">
              <img src="/story-image.jpg" alt="Mike Johnson working on electrical in 1985" />
            </div>
            <div className="story-content">
              <h2>Our Story</h2>
              <div className="story-text">
                <p>
                  Acme Electric began in 1985 when Mike Johnson, a journeyman electrician with a 
                  passion for quality work, decided to start his own electrical company. Armed 
                  with just a truck, basic tools, and an unwavering commitment to customer 
                  satisfaction, Mike set out to serve the Cincinnati community.
                </p>
                <p>
                  What started as a one-man operation has grown into a full-service electrical 
                  company with a team of licensed professionals. Despite our growth, we've 
                  never lost sight of our core values: honest work, fair pricing, and 
                  treating every customer like family.
                </p>
                <p>
                  Today, we're proud to be Cincinnati's most trusted electrical service, 
                  handling everything from simple repairs to complex commercial installations. 
                  Our reputation has been built one satisfied customer at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-values section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Mission & Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid grid grid-3">
            <div className="value-card card">
              <div className="value-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide reliable, professional electrical services that exceed our 
                customers' expectations while building lasting relationships based on 
                trust and quality workmanship.
              </p>
            </div>
            <div className="value-card card">
              <div className="value-icon">💎</div>
              <h3>Quality First</h3>
              <p>
                We never compromise on quality. From the parts we use to the techniques 
                we employ, everything is done to the highest standards to ensure 
                long-lasting results.
              </p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🤝</div>
              <h3>Honest Service</h3>
              <p>
                We believe in transparent, upfront pricing with no hidden fees. 
                We'll always explain what needs to be done and why, so you can 
                make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet Our Expert Team</h2>
            <p>Licensed professionals dedicated to solving your electrical problems</p>
          </div>
          
          <div className="team-grid grid grid-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-experience">{member.experience} experience</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Licensed & Certified</h2>
            <p>Our qualifications and certifications ensure quality service</p>
          </div>
          
          <div className="certifications-grid grid grid-4">
            <div className="cert-item">
              <div className="cert-icon">🏆</div>
              <h4>Master Electrician Licensed</h4>
              <p>Ohio State License #EL12345</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🛡️</div>
              <h4>Fully Insured</h4>
              <p>General Liability & Worker's Comp</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">⭐</div>
              <h4>BBB A+ Rating</h4>
              <p>Better Business Bureau Accredited</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🎖️</div>
              <h4>OSHA Certified</h4>
              <p>Safety Training Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta section" style={{ background: 'var(--primary-blue)', color: 'var(--white)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Experience the Acme Electric Difference
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Join thousands of satisfied customers who trust us with their electrical needs
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-secondary">
              Get Your Free Estimate
            </a>
            <a href="tel:+15135551234" className="btn btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
              Call: (513) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
