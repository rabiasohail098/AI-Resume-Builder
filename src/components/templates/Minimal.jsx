export default function Minimal({ data }) {
  const { form ={}, experience=[], education =[], skills=[], projects=[], languages=[],certificates=[] } = data;

  return (
    <div className="minimal-template">
      <div className="text-5xl text-center underline gap-3 font-bold minimal-h1"> {/* Changed from text-red-600 to hex */}
          <h1 className="text-5xl gap-3 font-bold minimal-h1">{form.fullName.slice(0,1).toUpperCase()+form.fullName.slice(1).toLowerCase()}</h1>
         
        <div>
        {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className=" mb-1">
            <h1 className="text-4xl gap-3 font-bold minimal-h1">{exp.jobTitle || ''}</h1>
          </div>
          </div>
      ))}
          </div>
          </div>
      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex justify-center minimal-p flex-wrap gap-x-4 text-sm ">
          {form.email && <span>{form.email}</span>}
          {form.phone && <span>• {form.phone}</span>}
          {form.linkedin && <span>• <a href={form.linkedin} className="hover:underline">LinkedIn</a></span>}
          {form.portfolio && <span>• <a href={form.portfolio} className="hover:underline">Portfolio</a></span>}
        </div>
      </header>

      {/* Summary */}
      {form.summary && (
        <section className="mb-8">
          <h2 className="text-lg minimal-h2 font-light uppercase tracking-wider border-b border-[#d1d5db] pb-1 mb-4">Introduction</h2> {/* Changed from border-gray-300 */}
                            <h3 className="minimal-h3 font-medium">Summary</h3>
          <p className="text-center italic minimal-p">{form.summary}</p> {/* Changed from text-gray-400 */}
        </section>
      )}

      <div className="space-y-8">
        {/* Experience */}
        {experience.length > 0 && experience[0].jobTitle && (
          <section>
            <h2 className="text-lg font-light minimal-h2 uppercase tracking-wider border-b border-[#d1d5db] pb-1 mb-4">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <h3 className="minimal-h3 font-medium">{exp.jobTitle}</h3>
                  <span className="text-sm minimal-p text-[#9ca3af]">{exp.duration}</span> {/* Changed from text-gray-400 */}
                </div>
                <div className="flex justify-between minimal-p mb-2 text-sm text-[#9ca3af]">
                  <span className="italic">{exp.company}</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="text-sm minimal-p space-y-1">
                  {exp.responsibilities?.split('\n').filter(Boolean).map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education.length > 0 && education[0].degree && (
          <section>
            <h2 className="text-lg minimal-h2 font-light uppercase tracking-wider border-b border-[#d1d5db] pb-1 mb-4">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="minimal-h3 font-medium">{edu.degree}</h3>
                  <span className="minimal-p text-sm ">{edu.year}</span>
                </div>
                <div className="flex justify-between text-sm minimal-p">
                  <span>{edu.institution}</span>
                  {edu.grade && <span>GPA: {edu.grade}</span>}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {form.skills && (
          <section>
            <h2 className="text-lg minimal-h2 font-light uppercase tracking-wider border-b border-[#d1d5db] pb-1 mb-4">Skills</h2>
            <div>
              {form.skills.split(',').map((skill, index) => (
                <span key={index} className="text-sm minimal-p">
                  {skill.trim()}{index < form.skills.split(',').length - 1 ? ',' : ''}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && projects[0].title && (
          <section>
            <h2 className="text-lg font-light minimal-h2 uppercase tracking-wider border-b border-[#d1d5db] pb-1 mb-4">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-medium minimal-h3">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-sm minimal-p hover:underline">View</a>
                  )}
                </div>
                <p className="text-sm minimal-p mb-1">{project.description}</p>
                {project.tech && (
                  <p className="text-xs minimal-h3">Tech: {project.tech}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && languages[0].name && (
          <section>
            <h2 className="text-lg minimal-h2 font-light uppercase tracking-wider border-b border-[#d1d5db] pb-1 mb-4">Languages</h2>
            <div className="flex flex-wrap gap-x-4 text-sm">
              {languages.map((lang, index) => (
                <span key={index} className="minimal-h3">
                  {lang.name}{lang.level && <span className="minimal-p"> ({lang.level})</span>}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Certification */}
        {certificates.length > 0 && certificates[0].name && (
          <section>
            <h2 className="text-lg font-light minimal-h2 uppercase tracking-wider border-b border-[#d1d5db] pb-1 mb-4">Certificates</h2>
            <div className="flex flex-wrap gap-x-4 text-sm">
              {certificates.map((certificate, index) => (
                <span key={index}>
                  {certificate.name}{certificate.issuedBy && <span className="minimal-p"> ({certificate.year})</span>}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}