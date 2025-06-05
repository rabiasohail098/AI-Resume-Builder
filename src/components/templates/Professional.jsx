// // components/templates/Professional.jsx
// export default function Professional({ data = {} }) {
//   const {
//     form = {},
//     experience = [],
//     education = [],
//     projects = [],
//     languages = [],
//     certifications = [],
//     references = []
//   } = data;

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
//     <div className="professional-template p-8 max-w-4xl mx-auto font-sans text-gray-800">
//       <header className="text-center mb-8 border-b pb-6">
//         <h1 className="text-3xl font-bold mb-2">{fullName}</h1>
//         <div className="flex justify-center flex-wrap gap-x-4 text-sm">
//           {email && <span>{email}</span>}
//           {phone && <span>• {phone}</span>}
//           {linkedin && <span>• <a href={linkedin} className="text-blue-600">LinkedIn</a></span>}
//           {portfolio && <span>• <a href={portfolio} className="text-blue-600">Portfolio</a></span>}
//         </div>
//       </header>

//       {summary && (
//         <section className="mb-6">
//           <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">PROFESSIONAL SUMMARY</h2>
//           <p className="text-sm">{summary}</p>
//         </section>
//       )}

//       {skills && (
//         <section className="mb-6">
//           <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">SKILLS</h2>
//           <ul className="list-disc list-inside grid grid-cols-2 gap-1 text-sm">
//             {skills.split(',').map((skill, index) => (
//               <li key={index} className="ml-4">{skill.trim()}</li>
//             ))}
//           </ul>
//         </section>
//       )}

//       {experience.length > 0 && experience[0].jobTitle && (
//         <section className="mb-6">
//           <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">PROFESSIONAL EXPERIENCE</h2>
//           {experience.map((exp, index) => (
//             <div key={index} className="mb-4">
//               <div className="flex justify-between">
//                 <h3 className="font-bold">{exp.jobTitle}</h3>
//                 <span className="text-sm italic">{exp.duration}</span>
//               </div>
//               <div className="flex justify-between mb-1">
//                 <span className="italic">{exp.company}</span>
//                 <span className="text-sm">{exp.location}</span>
//               </div>
//               <ul className="list-disc list-inside text-sm ml-4">
//                 {exp.responsibilities.split('\n').filter(Boolean).map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </section>
//       )}

//       {education.length > 0 && education[0].degree && (
//         <section className="mb-6">
//           <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">EDUCATION</h2>
//           {education.map((edu, index) => (
//             <div key={index} className="mb-2">
//               <div className="flex justify-between">
//                 <h3 className="font-bold">{edu.degree}</h3>
//                 <span className="text-sm italic">{edu.year}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>{edu.institution}</span>
//                 {edu.grade && <span className="text-sm">GPA: {edu.grade}</span>}
//               </div>
//             </div>
//           ))}
//         </section>
//       )}

//       {projects.length > 0 && projects[0].title && (
//         <section className="mb-6">
//           <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">PROJECTS</h2>
//           {projects.map((project, index) => (
//             <div key={index} className="mb-3">
//               <div className="flex justify-between">
//                 <h3 className="font-bold">{project.title}</h3>
//                 {project.link && (
//                   <a href={project.link} className="text-sm text-blue-600">View Project</a>
//                 )}
//               </div>
//               <p className="text-sm mb-1">{project.description}</p>
//               {project.tech && (
//                 <p className="text-xs italic">Technologies: {project.tech}</p>
//               )}
//             </div>
//           ))}
//         </section>
//       )}

//       {certifications.length > 0 && certifications[0].name && (
//         <section className="mb-6">
//           <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">CERTIFICATIONS</h2>
//           {certifications.map((cert, index) => (
//             <div key={index} className="mb-2">
//               <div className="flex justify-between">
//                 <h3 className="font-bold">{cert.name}</h3>
//                 <span className="text-sm italic">{cert.date}</span>
//               </div>
//               <p className="text-sm">{cert.issuedBy}</p>
//             </div>
//           ))}
//         </section>
//       )}

//       {languages.length > 0 && languages[0].name && (
//         <section>
//           <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">LANGUAGES</h2>
//           <div className="flex gap-4">
//             {languages.map((lang, index) => (
//               <div key={index}>
//                 <span>{lang.name}</span>
//                 {lang.level && <span className="text-sm italic"> ({lang.level})</span>}
//               </div>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }







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
          <h1>{fullName}</h1>
        
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