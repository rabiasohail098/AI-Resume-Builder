// export default function CreativeTemplate({ data = {} }) {
//   // Safely destructure with defaults
//   const {
//     form = {},
//     experience = [],
//     education = [],
//     projects = [],
//     languages = [],
//     certifications = [],
//     references = []
//   } = data;

//   // Form fields with defaults
//   const {
//     fullName = "",
//     email = "",
//     phone = "",
//     linkedin = "",
//     portfolio = "",
//     summary = "",
//     skills = ""
//   } = form;

//   return (
//     <div className="creative-template creative-p-8 creative-bg-gradient creative-font-sans">
//       {/* Header */}
//       <header className="creative-text-center creative-mb-8">
//         <h1 className="creative-text-4xl creative-font-bold creative-bg-clip-text creative-text-transparent creative-name-gradient">
//           {fullName || "Your Name"}
//         </h1>
//         <div className="creative-contact-container creative-text-gray-700 creative-text-sm creative-mt-2">
//           {email && <span>{email}</span>}
//           {phone && <span className="creative-contact-separator">• {phone}</span>}
//           {linkedin && (
//             <span className="creative-contact-separator">• <a href={linkedin} className="creative-link-blue creative-link-underline">LinkedIn</a></span>
//           )}
//         </div>
//       </header>

//       <div className="creative-main-grid">
//         {/* Left Column */}
//         <div className="creative-left-column">
//           {/* Summary */}
//           {summary && (
//             <section className="creative-section-white creative-p-6 creative-rounded-xl creative-shadow-sm">
//               <h2 className="creative-section-header creative-text-purple-600">ABOUT ME</h2>
//               <p className="creative-text-gray-700">{summary}</p>
//             </section>
//           )}

//           {/* Experience - Safe array access */}
//           {experience?.length > 0 && experience[0]?.jobTitle && (
//             <section className="creative-section-white creative-p-6 creative-rounded-xl creative-shadow-sm">
//               <h2 className="creative-section-header creative-text-purple-600 creative-border-bottom">
//                 EXPERIENCE
//               </h2>
//               {experience.map((exp, index) => (
//                 <div key={index} className="creative-mb-6">
//                   <div className="creative-exp-header creative-mb-1">
//                     <div>
//                       <h3 className="creative-exp-title creative-text-gray-700">{exp.jobTitle || "Position"}</h3>
//                       <p className="creative-exp-company creative-text-gray-600">{exp.company || "Company"}</p>
//                     </div>
//                     {exp.duration && (
//                       <span className="creative-exp-duration creative-text-purple-800">
//                         {exp.duration}
//                       </span>
//                     )}
//                   </div>
//                   {exp.responsibilities && (
//                     <ul className="creative-resp-list creative-text-gray-700">
//                       {exp.responsibilities.split('\n').filter(Boolean).map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Projects - Safe array access */}
//           {projects?.length > 0 && projects[0]?.title && (
//             <section className="creative-section-white creative-p-6 creative-rounded-xl creative-shadow-sm">
//               <h2 className="creative-section-header creative-text-purple-600 creative-border-bottom">
//                 PROJECTS
//               </h2>
//               <div className="creative-projects-grid">
//                 {projects.map((project, index) => (
//                   <div key={index} className="creative-project-card creative-hover-shadow">
//                     <div className="creative-project-header">
//                       <h3 className="creative-project-title">{project.title || "Project Title"}</h3>
//                       {project.link && (
//                         <a href={project.link} className="creative-project-link">
//                           View
//                         </a>
//                       )}
//                     </div>
//                     {project.description && (
//                       <p className="creative-project-desc">{project.description}</p>
//                     )}
//                     {project.tech && (
//                       <div className="creative-tech-container">
//                         {project.tech.split(',').map((tech, i) => (
//                           <span key={i} className="creative-tech-tag">
//                             {tech.trim()}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
//         </div>

//         {/* Right Column */}
//         <div className="creative-right-column">
//           {/* Skills */}
//           {skills && (
//             <section className="creative-section-white creative-p-6 creative-rounded-xl creative-shadow-sm">
//               <h2 className="creative-section-header creative-text-purple-600">SKILLS</h2>
//               <div className="creative-skills-container">
//                 {skills.split(',').map((skill, index) => (
//                   <span key={index} className="creative-skill-tag creative-text-purple-800">
//                     {skill.trim()}
//                   </span>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Education - Safe array access */}
//           {education?.length > 0 && education[0]?.degree && (
//             <section className="creative-section-white creative-p-6 creative-rounded-xl creative-shadow-sm">
//               <h2 className="creative-section-header creative-text-purple-600">EDUCATION</h2>
//               {education.map((edu, index) => (
//                 <div key={index} className="creative-mb-4">
//                   <h3 className="creative-edu-title creative-text-gray-700">{edu.degree || "Degree"}</h3>
//                   <p className="creative-edu-institution creative-text-gray-700">{edu.institution || "Institution"}</p>
//                   <div className="creative-edu-footer creative-text-gray-700">
//                     {edu.year && <span>{edu.year}</span>}
//                     {edu.grade && <span>GPA: {edu.grade}</span>}
//                   </div>
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Certifications - Safe array access */}
//           {certifications?.length > 0 && certifications[0]?.name && (
//             <section className="creative-section-white creative-p-6 creative-rounded-xl creative-shadow-sm">
//               <h2 className="creative-section-header creative-text-purple-600">CERTIFICATIONS</h2>
//               <div className="creative-certs-container">
//                 {certifications.map((cert, index) => (
//                   <div key={index}>
//                     <h3 className="creative-cert-title">{cert.name || "Certification"}</h3>
//                     <p className="creative-cert-org creative-text-gray-700">{cert.issuedBy || "Issuing Organization"}</p>
//                     {cert.date && <p className="creative-cert-date creative-text-gray-500">{cert.date}</p>}
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Languages - Safe array access */}
//           {languages?.length > 0 && languages[0]?.name && (
//             <section className="creative-section-white creative-p-6 creative-rounded-xl creative-shadow-sm">
//               <h2 className="creative-section-header creative-text-purple-600">LANGUAGES</h2>
//               <div className="creative-langs-container">
//                 {languages.map((lang, index) => (
//                   <div key={index} className="creative-lang-item creative-text-gray-700">
//                     <span>{lang.name || "Language"}</span>
//                     {lang.level && (
//                       <div className="creative-lang-level">
//                         <div
//                           className="creative-lang-progress creative-bg-purple-600"
//                           style={{
//                             width: `${lang.level === 'Native' ? 100 :
//                                    lang.level === 'Fluent' ? 80 :
//                                    lang.level === 'Intermediate' ? 60 : 40}%`
//                           }}
//                         ></div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }









export default function CreativeTemplate({ data = {} }) {
  // Safely destructure with defaults
  const {
    form = {},
    experience = [],
    education = [],
    projects = [],
    languages = [],
    certifications = [],
    references = []
  } = data;

  // Form fields with defaults
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
    <div className="creative-template" data-theme="light">
      <div className="text-3xl gap-3 font-bold creative-text-primary">
        <h1 className="text-5xl underline text-center">{fullName}</h1>
        <div>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="mb-1">
                <h1 className="text-4xl underline text-center">{exp.jobTitle || ' '}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="creative-header">
       
        <div className="creative-contact-container">
          {email && <span className="creative-text-secondary">{email}</span>}
          {phone && <span className="creative-text-secondary">• {phone}</span>}
          {linkedin && (
            <span className="creative-text-secondary">• 
              <a href={linkedin} className="creative-link">LinkedIn</a>
            </span>
          )}
          {portfolio && (
            <span className="creative-text-secondary">• 
              <a href={portfolio} className="creative-link">Portfolio</a>
            </span>
          )}
        </div>
      </header>

      <div className="creative-main-grid">
        {/* Left Column */}
        <div className="creative-left-column">
          
          {/* Summary */}
          {summary && (
            <section className="creative-section">
              <h2 className="creative-h2">Summary</h2>
              <p className="creative-p">{summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience?.length > 0 && experience[0]?.jobTitle && (
            <section className="creative-section">
              <h2 className="creative-h2 creative-border-bottom">EXPERIENCE</h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="creative-exp-header">
                    <div>
                      <h3 className="creative-h3">{exp.jobTitle || "Position"}</h3>
                      <p className="creative-p">{exp.company || "Company"}</p>
                    </div>
                    {exp.duration && (
                      <span className="creative-text-tertiary">
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  {exp.responsibilities && (
                    <ul className="creative-list">
                      {exp.responsibilities.split('\n').filter(Boolean).map((item, i) => (
                        <li key={i} className="creative-list-item">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {projects?.length > 0 && projects[0]?.title && (
            <section className="creative-section">
              <h2 className="creative-h2 creative-border-bottom">PROJECTS</h2>
              <div className="creative-projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="creative-project-card">
                    <div className="creative-project-header">
                      <h3 className="creative-h3">{project.title || "Project Title"}</h3>
                      {project.link && (
                        <a href={project.link} className="creative-link">
                          View
                        </a>
                      )}
                    </div>
                    {project.description && (
                      <p className="creative-p">{project.description}</p>
                    )}
                    {project.tech && (
                      <div className="creative-tags-container">
                        {project.tech.split(',').map((tech, i) => (
                          <span key={i} className="creative-tag">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="creative-right-column">
          {/* Skills */}
          {skills && (
            <section className="creative-section">
              <h2 className="creative-h2">SKILLS</h2>
              <div className="creative-tags-container">
                {skills.split(',').map((skill, index) => (
                  <span key={index} className="creative-tag1">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education?.length > 0 && education[0]?.degree && (
            <section className="creative-section">
              <h2 className="creative-h2">EDUCATION</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="creative-h3">{edu.degree || "Degree"}</h3>
                  <p className="creative-p">{edu.institution || "Institution"}</p>
                  <div className="creative-text-tertiary">
                    {edu.year && <span>{edu.year}</span>}
                    {edu.grade && <span>GPA: {edu.grade}</span>}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications?.length > 0 && certifications[0]?.name && (
            <section className="creative-section">
              <h2 className="creative-h2">CERTIFICATIONS</h2>
              <div className="creative-certs-container">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <h3 className="creative-h3">{cert.name || "Certification"}</h3>
                    <p className="creative-p">{cert.issuedBy || "Issuing Organization"}</p>
                    {cert.date && <p className="creative-text-tertiary">{cert.date}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages?.length > 0 && languages[0]?.name && (
            <section className="creative-section">
              <h2 className="creative-h2">LANGUAGES</h2>
              <div className="creative-langs-container">
                {languages.map((lang, index) => (
                  <div key={index} className="creative-lang-item">
                    <span className="creative-text-secondary">{lang.name || "Language"}</span>
                    {lang.level && (
                      <div className="creative-lang-level">
                        <div 
                          className="creative-lang-progress" 
                          style={{ 
                            width: `${lang.level === 'Native' ? 100 : 
                                   lang.level === 'Fluent' ? 80 : 
                                   lang.level === 'Intermediate' ? 60 : 40}%` 
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}