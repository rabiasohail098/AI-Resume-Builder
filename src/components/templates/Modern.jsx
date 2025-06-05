// export default function Modern({ data = {} }) {
//   // Provide default empty objects/arrays for all possible fields
//   const {
//     form = {},
//     experience = [],
//     education = [],
//     skills = [],
//     projects = [],
//     languages = [],
//     certifications = []
//   } = data;

//   return (
//     <div className="modern-template min-h-screen grid grid-cols-1 md:grid-cols-4 bg-gray-50">
//       {/* Left Sidebar */}
//       <div className="md:col-span-1 bg-cyan-text-cyan-400 text-white p-6">
//         <header className="mb-8">
//           <h1 className="text-2xl font-bold mb-2">{form.fullName || 'Your Name'}</h1>
//           <p className="text-sm opacity-80">
//             {(form.summary?.split('.')[0] || 'Professional summary')}.
//           </p>
//         </header>

//         {/* Contact */}
//         <section className="mb-6">
//           <h2 className="text-lg font-bold mb-2 border-b border-cyan-text-cyan-400 pb-1">CONTACT</h2>
//           <ul className="space-y-2 text-sm">
//             {form.email && <li>{form.email}</li>}
//             {form.phone && <li>{form.phone}</li>}
//             {form.linkedin && (
//               <li>
//                 <a href={form.linkedin} className="hover:underline">
//                   LinkedIn
//                 </a>
//               </li>
//             )}
//             {form.portfolio && (
//               <li>
//                 <a href={form.portfolio} className="hover:underline">
//                   Portfolio
//                 </a>
//               </li>
//             )}
//           </ul>
//         </section>

//         {/* Skills */}
//         {skills.length > 0 && (
//           <section className="mb-6">
//             <h2 className="text-lg font-bold mb-2 border-b border-cyan-text-cyan-400 pb-1">SKILLS</h2>
//             <ul className="space-y-1 text-sm">
//               {skills.map((skill, index) => (
//                 <li key={index} className="flex items-center">
//                   <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
//                   {skill.trim()}
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}

//         {/* Languages */}
//         {languages.length > 0 && (
//           <section>
//             <h2 className="text-lg font-bold mb-2 border-b border-cyan-text-cyan-400 pb-1">LANGUAGES</h2>
//             <ul className="space-y-1 text-sm">
//               {languages.map((lang, index) => (
//                 <li key={index}>
//                   {lang.name}
//                   {lang.level && <span className="opacity-80"> ({lang.level})</span>}
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="md:col-span-3 p-6">
//         {/* Experience */}
//         {experience.length > 0 && (
//           <section className="mb-8">
//             <h2 className="text-xl font-bold mb-4 text-cyan-400 border-b border-cyan-text-cyan-400 pb-1">
//               EXPERIENCE
//             </h2>
//             {experience.map((exp, index) => (
//               <div key={index} className="mb-6">
//                 <div className="flex justify-between mb-1">
//                   <h3 className="font-bold text-gray-700 ">{exp.jobTitle || 'Job Title'}</h3>
//                   <span className="text-sm text-cyan-400">{exp.duration || 'Duration'}</span>
//                 </div>
//                 <div className="flex text-gray-700 justify-between mb-2">
//                   <span className="italic">{exp.company || 'Company'}</span>
//                   <span className="text-sm">{exp.location || 'Location'}</span>
//                 </div>
//                 {exp.responsibilities && (
//                   <ul className="list-disc text-gray-700 list-inside text-sm ml-2 space-y-1">
//                     {exp.responsibilities
//                       .split('\n')
//                       .filter(Boolean)
//                       .map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </section>
//         )}

//         {/* Education */}
//         {education.length > 0 && (
//           <section className="mb-8">
//             <h2 className="text-xl font-bold mb-4 text-cyan-400 border-b border-cyan-text-cyan-400 pb-1">
//               EDUCATION
//             </h2>
//             {education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <div className="flex text-gray-700 justify-between">
//                   <h3 className="font-bold">{edu.degree || 'Degree'}</h3>
//                   <span className="text-sm text-cyan-400">{edu.year || 'Year'}</span>
//                 </div>
//                 <div className="flex text-gray-700 justify-between">
//                   <span>{edu.institution || 'Institution'}</span>
//                   {edu.grade && <span className="text-sm text-gray-700">GPA: {edu.grade}</span>}
//                 </div>
//               </div>
//             ))}
//           </section>
//         )}

//         {/* Projects */}
//         {projects.length > 0 && (
//           <section className="mb-8">
//             <h2 className="text-xl font-bold mb-4 text-cyan-400 border-b border-cyan-text-cyan-400 pb-1">
//               PROJECTS
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="border border-cyan-text-cyan-400 rounded p-3 bg-white shadow-sm"
//                 >
//                   <div className="flex text-gray-700 justify-between mb-1">
//                     <h3 className="font-bold">{project.title || 'Project Title'}</h3>
//                     {project.link && (
//                       <a href={project.link} className="text-xs text-cyan-400">
//                         View
//                       </a>
//                     )}
//                   </div>
//                   <p className="text-sm text-gray-700 mb-1">
//                     {project.description || 'Project description'}
//                   </p>
//                   {project.tech && (
//                     <p className="text-xs text-cyan-400">Tech: {project.tech}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Certifications */}
//         {certifications.length > 0 && (
//           <section>
//             <h2 className="text-xl font-bold mb-4 text-cyan-400 border-b border-cyan-text-cyan-400 pb-1">
//               CERTIFICATIONS
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {certifications.map((cert, index) => (
//                 <div
//                   key={index}
//                   className="border border-cyan-text-cyan-400 rounded p-3 bg-white shadow-sm"
//                 >
//                   <h3 className="font-bold">{cert.name || 'Certification Name'}</h3>
//                   <p className="text-sm">{cert.issuedBy || 'Issued by'}</p>
//                   {cert.date && <p className="text-xs text-cyan-400">{cert.date}</p>}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }






export default function Modern({ data = {}, imageUrl }) {
const {
form = {},
experience = [],
education = [],
skills = [],
projects = [],
languages = [],
certifications = []
} = data;

return (
<div className="modern-template" data-theme="light">
<div className="text-center text-3xl gap-3 font-bold modern-text-accent">
<h1 className="text-5xl underline">{form.fullName}</h1>
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

      {/* Skills */}
      {skills && (
        <section className="modern-mb-6">
          <h2 className="modern-h2-sidebar modern-border-bottom">SKILLS</h2>
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
        </section>
      )}

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
    </div>

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
    </div>
  </div>

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
