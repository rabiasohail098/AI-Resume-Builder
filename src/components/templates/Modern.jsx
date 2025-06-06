"use client"
import { useState } from "react";

export default function Modern({ data = {}, imageUrl }) {
  const [showSkills, setShowSkills] = useState(true); 

  const toggleSkills = () => {
    setShowSkills(!showSkills); // Set showSkills to its opposite value
  };

  const {
    form = {},
    experience = [],
    education = [],
    // You have 'skills' here, but you're using 'form.skills' later.
    // It's generally better to be consistent. Let's stick with form.skills
    // if that's where your skill data truly resides in the 'data' prop.
    // skills = [], 
    projects = [],
    languages = [],
    certifications = []
  } = data;

  return (
    <div className="modern-template" data-theme="light">
      <div className="text-center text-3xl gap-3 font-bold modern-text-accent">
        <h1 className="text-5xl underline">{form.fullName.slice(0,1).toUpperCase()+form.fullName.slice(1).toLowerCase()}</h1>
        <div>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="mb-1">
                <h1 className="text-4xl underline">{exp.jobTitle || ' '}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="modern-container">
        {/* Left Sidebar */}
        <div className="modern-sidebar">
          {/* Profile Image */}
          {/* Add this at the top of the sidebar */}
          {data.form.profileImage && (
            <div className="modern-profile-img-container mb-4">
              <img 
                src={data.form.profileImage}
                alt="Profile"
                className="modern-profile-img"
              />
            </div>
          )}
          <header className="modern-mb-8">
            <h2 className="modern-h2-sidebar">SUMMARY</h2>
            <p className="modern-p-secondary">
              {(form.summary?.split('.')[0] || 'Professional summary')}.
            </p>
          </header>

          {/* Contact */}
          <section className="modern-mb-6">
            <h2 className="modern-h2-sidebar modern-border-bottom">CONTACT</h2>
            <ul className="modern-list">
              {form.fullName && <li className="modern-list-item">Name: {form.fullName}</li>}
              {form.email && <li className="modern-list-item">Email: {form.email}</li>}
              {form.phone && <li className="modern-list-item">Phone: {form.phone}</li>}
              {form.linkedin && (
                <li className="modern-list-item">
                  LinkedIn:{" "}
                  <a href={form.linkedin} className="modern-link">
                    LinkedIn
                  </a>
                </li>
              )}
              {form.portfolio && (
                <li className="modern-list-item">
                  Portfolio: {" "}
                  <a href={form.portfolio} className="modern-link">
                    Portfolio
                  </a>
                </li>
              )}
            </ul>
          </section>

          {/* Languages */}
          {languages.length > 0 && (
            <section>
              <h2 className="modern-h2-sidebar modern-border-bottom">LANGUAGES</h2>
              <ul className="modern-list">
                {languages.map((lang, index) => (
                  <li key={index} className="modern-list-item">
                    {lang.name}
                    {lang.level && <span className="modern-text-tertiary"> ({lang.level})</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}

       

        </div> {/* End of Left Sidebar */}

        {/* Main Content */}
        <div className="modern-main">

          {/* Experience */}
          {experience.length > 0 && (
            <section className="modern-mb-8">
              <h2 className="modern-h2-main">EXPERIENCE</h2>
              {experience.map((exp, index) => (
                <div key={index} className="modern-mb-6">
                  <div className="modern-flex-between modern-mb-1">
                    <h3 className="modern-h3">{exp.jobTitle || 'Job Title'}</h3>
                    <span className="modern-text-accent modern-text-sm">{exp.duration || 'Duration'}</span>
                  </div>
                  <div className="modern-flex-between modern-mb-2">
                    <span className="modern-text-secondary modern-italic">{exp.company || 'Company'}</span>
                    <span className="modern-text-sm">{exp.location || 'Location'}</span>
                  </div>
                  {exp.responsibilities && (
                    <ul className="modern-ul">
                      {exp.responsibilities
                        .split('\n')
                        .filter(Boolean)
                        .map((item, i) => (
                          <li key={i} className="modern-li">{item}</li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section className="modern-mb-8">
              <h2 className="modern-h2-main">EDUCATION</h2>
              {education.map((edu, index) => (
                <div key={index} className="modern-mb-4">
                  <div className="modern-flex-between">
                    <h3 className="modern-h3">{edu.degree || 'Degree'}</h3>
                    <span className="modern-text-accent modern-text-sm">{edu.year || 'Year'}</span>
                  </div>
                  <div className="modern-flex-between">
                    <span className="modern-text-secondary">{edu.institution || 'Institution'}</span>
                    {edu.grade && <span className="modern-text-sm">GPA: {edu.grade}</span>}
                  </div>
                </div>
              ))}
            </section>
          )}
   {/* Skills Section - Moved to Sidebar and conditionally rendered */}
          {form.skills && ( // Check if skills data exists
            <section className="modern-mb-6">
              <h2 className="modern-h2-main modern-border-bottom">SKILLS</h2>
              <button 
                onClick={toggleSkills}
                className="px-3 py-1 bg-[#3b82f6] text-white rounded-md hover:bg-[#2563eb] transition-colors mb-4" // Added some styling for better visibility
              >
                {showSkills ? 'Hide Skills' : 'Show Skills'}
              </button>
              {/* Conditional rendering of skills list */}
              {showSkills && (
                <ul className="modern-list">
                  {form.skills.split('\n').map((skillLine, index) => {
                    const [category, ...skills] = skillLine.split(':');
                    const skillItems = skills.length > 0 ? skills.join(':').split(',').map(s => s.trim()) : [];

                    return (
                      <div key={index} className="modern-mb-2">
                        {category.trim() && <h3 className="modern-h3-sidebar">{category.trim()}</h3>}
                        <ul className="modern-sublist">
                          {skillItems.map((skill, skillIndex) => (
                            skill.trim() && (
                              <li key={skillIndex} className="modern-sublist-item">
                                <span className="modern-bullet"></span>
                                {skill.trim()}
                              </li>
                            )
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </ul>
              )}
            </section>
          )}
          {/* Projects */}
          {projects.length > 0 && (
            <section className="modern-mb-8">
              <h2 className="modern-h2-main">PROJECTS</h2>
              <div className="">
                {projects.map((project, index) => (
                  <div key={index} className="modern-mb-4">
                    <div className="modern-flex-between modern-mb-1">
                      <h3 className="modern-h3">{project.title || 'Project Title'}</h3>
                      {project.link && (
                        <a href={project.link} className="modern-link modern-text-sm">
                          View
                        </a>
                      )}
                    </div>
                    <p className="modern-p modern-text-sm modern-mb-1">
                      {project.description || 'Project description'}
                    </p>
                    {project.tech && (
                      <ul className="modern-ul">
                        {project.tech.split('\n').map((item, i) => (
                          <li key={i} className="modern-li">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className="modern-h2-main">CERTIFICATIONS</h2>
              <div className="modern-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="modern-cert-card">
                    <h3 className="modern-h3">{cert.name || 'Certification Name'}</h3>
                    <p className="modern-p modern-text-sm">{cert.issuedBy || 'Issued by'}</p>
                    {cert.date && <p className="modern-text-accent modern-text-xs">{cert.date}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div> {/* End of Main Content */}
      </div> {/* End of modern-container */}

      <style jsx>{`
        .modern-profile-image-container {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1rem;
          border: 3px solid #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .modern-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}