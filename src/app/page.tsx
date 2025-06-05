'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();
  const [theme, setTheme] = useState('light');

  // Set theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('resumeTheme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('resumeTheme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Resume templates data
  const templates = [
    {
      id: 1,
      name: 'Professional',
      description: 'Clean and formal design for corporate jobs',
      color: 'bg-orange-400'
    },
    {
      id: 2,
      name: 'Modern',
      description: 'Contemporary design with creative elements',
      color: 'bg-pink-500'
    },
    {
      id: 3,
      name: 'Creative',
      description: 'For designers and artistic professionals',
      color: 'bg-green-600'
    },
    {
      id: 4,
      name: 'Minimalist',
      description: 'Simple and elegant with maximum readability',
      color: 'bg-red-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Resume Builder | Created by Rabia Sohail</title>
        <meta name="description" content="Create stunning resumes with our AI-powered builder" />
      </Head>

      <div className="app-container" data-theme={theme}>
        {/* Navigation */}
        <nav className="navbar">
          <div className="logo">ResumeBuilder</div>
          <button 
            onClick={toggleTheme}
            className={`theme-toggle ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">
            Create Your <span className="highlight">Perfect Resume</span> in Minutes
          </h1>
          <p className="hero-subtitle">
            Our AI-powered resume builder helps you craft a professional resume that stands out to employers.
          </p>
          <button
            onClick={() => router.push('/resume')}
            className="cta-button"
          >
            Start Building Now →
          </button>
        </section>

        {/* Templates Section */}
        <section className={`templates-section ${theme === 'dark' ? 'dark-bg' : 'light-bg'}`}>
          <div className="container">
            <h2 className="section-title">Choose a Template</h2>
            <div className="templates-grid">
              {templates.map(template => (
                <div 
                  key={template.id}
                  className={`template-card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}
                  onClick={() => router.push(`/resume?template=${template.id}`)}
                >
                  <div className={`template-color ${template.color}`}>
                    <span className="template-name">{template.name}</span>
                  </div>
                  <div className="template-content">
                    <h3 className="template-title">{template.name}</h3>
                    <p className={`template-description ${theme === 'dark' ? 'dark-text' : 'light-text'}`}>
                      {template.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Why Choose Our Resume Builder</h2>
            <div className="features-grid">
              <div className={`feature-card light-card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Easy to Use</h3>
                <p>Create a professional resume in just 5 minutes with our intuitive builder.</p>
              </div>
              <div className={`feature-card light-card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
                <div className="feature-icon">📜</div>
                <h3 className="feature-title">ATS Friendly</h3>
                <p>Optimized to pass through Applicant Tracking Systems used by employers.</p>
              </div>
              <div className={`feature-card light-card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
                <div className="feature-icon">🎨</div>
                <h3 className="feature-title">Multiple Designs</h3>
                <p>Choose from various professionally designed templates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`footer ${theme === 'dark' ? 'dark-bg' : 'light-bg'}`}>
          <p>
            Made with ❤️ by <span className="footer-highlight">Rabia Sohail</span>
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Professional Resume Builder. All rights reserved.
          </p>
        </footer>
      </div>

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          transition: background-color 0.3s, color 0.3s;
        }

        .app-container[data-theme="dark"] {
          background-color: #111827;
          color: white;
        }

        .app-container[data-theme="light"] {
          background-color: #f9fafb;
          color: #111827;
        }

        /* Navigation styles */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2563eb;
        }

        .theme-toggle {
          padding: 0.5rem;
          border-radius: 9999px;
          cursor: pointer;
          border: none;
          font-size: 1rem;
        }

        .light-theme {
          background-color: #e5e7eb;
          color: #374151;
        }

        .dark-theme {
          background-color: #374151;
          color: #fcd34d;
        }

        /* Hero section styles */
        .hero-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 4rem;
          text-align: center;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .highlight {
          color: #2563eb;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background-color: #2563eb;
          color: white;
          font-weight: bold;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-size: 1.125rem;
          transition: background-color 0.3s;
          border: none;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: #1d4ed8;
        }

        /* Templates section styles */
        .templates-section {
          padding: 4rem 0;
        }

        .dark-bg {
          background-color: #1f2937;
        }

        .light-bg {
          background-color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-title {
          font-size: 1.875rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 3rem;
        }

        .templates-grid {
          display: flex;
          gap: 2rem;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-bottom: 1rem;
        }

        .template-card {
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s;
          cursor: pointer;
          flex: 0 0 260px;
        }

        .template-card:hover {
          transform: scale(1.05);
        }

        .light-card {
          background-color: #e0e0e0;
        }

        .dark-card {
          background-color: #374151;
        }

        .template-color {
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bg-blue-500 {
          background-color: #3b82f6;
        }

        .bg-purple-500 {
          background-color: #a855f7;
        }

        .bg-green-500 {
          background-color: #22c55e;
        }

        .bg-yellow-500 {
          background-color: #eab308;
        }

        .template-name {
          color: white;
          font-size: 1.25rem;
          font-weight: bold;
        }

        .template-content {
          padding: 1.5rem;
        }

        .template-title {
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .dark-text {
          color: #d1d5db;
        }

        .light-text {
          color: #4b5563;
        }

        /* Features section styles */
        .features-section {
          padding: 4rem 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          padding: 1.5rem;
          border-radius: 0.5rem;
        }

        .feature-icon {
          color: #2563eb;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        /* Footer styles */
        .footer {
          padding: 2rem 0;
          text-align: center;
        }

        .footer-highlight {
          font-weight: bold;
          color: #2563eb;
        }

        .footer-copyright {
          margin-top: 0.5rem;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .templates-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .templates-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}