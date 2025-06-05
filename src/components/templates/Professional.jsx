export default function Professional({ data = {} }) {
  const {
    form = {},
    experience = [],
    education = [],
    projects = [],
    languages = [],
    certifications = [],
    references = []
  } = data;

  const {
    fullName = "",
    email = "",
    phone = "",
    linkedin = "",
    portfolio = "",
    summary = "",
    skills = ""
  } = form;

  return (
    <div className="professional-template" data-theme="light">
      <header className="professional-header">
        <div className=" text-5xl gap-3 underline font-bold professional-h1-name">
          <h1>{form.fullName.slice(0,1).toUpperCase()+form.fullName.slice(1).toLowerCase()}</h1>
        
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="mb-1">
                  <h1 className="professional-h1-title text-4xl">{exp.jobTitle || ' '}</h1>
                </div>
              </div>
            ))}
         
        </div>
        <div className="professional-contact-info">
          {email && <span>{email}</span>}
          {phone && <span>• {phone}</span>}
          {linkedin && <span>• <a href={linkedin} className="professional-link">LinkedIn</a></span>}
          {portfolio && <span>• <a href={portfolio} className="professional-link">Portfolio</a></span>}
        </div>
      </header>

      {summary && (
        <section className="professional-section">
          <h2 className="professional-h2">SUMMARY</h2>
          <p className="professional-p">{summary}</p>
        </section>
      )}

      {skills && (
        <section className="professional-section">
          <h2 className="professional-h2">SKILLS</h2>
          <ul className="professional-skills-list">
            {skills.split(',').map((skill, index) => (
              <li key={index} className="professional-skill-item">{skill.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {experience.length > 0 && experience[0].jobTitle && (
        <section className="professional-section">
          <h2 className="professional-h2">EXPERIENCE</h2>
          {experience.map((exp, index) => (
            <div key={index} className="professional-experience-item">
              <div className="professional-flex-between">
                <h3 className="professional-h3">{exp.jobTitle}</h3>
                <span className="professional-date">{exp.duration}</span>
              </div>
              <div className="professional-flex-between professional-company-info">
                <span className="professional-company">{exp.company}</span>
                <span className="professional-location">{exp.location}</span>
              </div>
              <ul className="professional-responsibilities">
                {exp.responsibilities.split('\n').filter(Boolean).map((item, i) => (
                  <li key={i} className="professional-responsibility-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && education[0].degree && (
        <section className="professional-section">
          <h2 className="professional-h2">EDUCATION</h2>
          {education.map((edu, index) => (
            <div key={index} className="professional-education-item">
              <div className="professional-flex-between">
                <h3 className="professional-h3">{edu.degree}</h3>
                <span className="professional-date">{edu.year}</span>
              </div>
              <div className="professional-flex-between">
                <span className="professional-institution">{edu.institution}</span>
                {edu.grade && <span className="professional-grade">GPA: {edu.grade}</span>}
              </div>
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && projects[0].title && (
        <section className="professional-section">
          <h2 className="professional-h2">PROJECTS</h2>
          {projects.map((project, index) => (
            <div key={index} className="professional-project-item">
              <div className="professional-flex-between">
                <h3 className="professional-h3">{project.title}</h3>
                {project.link && (
                  <a href={project.link} className="professional-project-link">View Project</a>
                )}
              </div>
              <p className="professional-project-desc">{project.description}</p>
              {project.tech && (
                <p className="professional-project-tech">Technologies: {project.tech}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {certifications.length > 0 && certifications[0].name && (
        <section className="professional-section professional-print-section">
          <h2 className="professional-h2">CERTIFICATIONS</h2>
          {certifications.map((cert, index) => (
            <div key={index} className="professional-certification-item">
              <div className="professional-flex-between">
                <h3 className="professional-h3">{cert.name}</h3>
                <span className="professional-date">{cert.date}</span>
              </div>
              <p className="professional-cert-issuer">{cert.issuedBy}</p>
            </div>
          ))}
        </section>
      )}

      {languages.length > 0 && languages[0].name && (
        <section className="professional-section professional-print-section">
          <h2 className="professional-h2">LANGUAGES</h2>
          <div className="professional-languages-list">
            {languages.map((lang, index) => (
              <div key={index} className="professional-language-item">
                <span>{lang.name}</span>
                {lang.level && <span className="text-[#30c728]"> ({lang.level})</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {references?.length > 0 && (
        <section className="professional-section professional-print-section">
          <h2 className="professional-h2">REFERENCES</h2>
          <div className="professional-references-grid">
            {references.map((ref, index) => (
              <div key={index} className="professional-reference-item">
                <h3 className="professional-h3">{ref.name || 'Reference Name'}</h3>
                <p className="professional-reference-position">{ref.designation || 'Position'}</p>
                {ref.contact && <p className="professional-reference-contact">{ref.contact}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}