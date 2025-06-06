'use client';
import { useState, useEffect } from "react";
import { generatePdf } from "../utils/generatePdf";
import AgentHelper from "@/components/AgentHelper";
import Professional from "@/components/templates/Professional";
import Modern from "@/components/templates/Modern";
import Creative from "@/components/templates/Creative";
import Minimal from "@/components/templates/Minimal";

const TEMPLATES = {
  professional: {
    name: "Professional",
    component: Professional,
    description: "Clean corporate style",
    pdfOptions: { format: 'letter', orientation: 'portrait' }
  },
  modern: {
    name: "Modern",
    component: Modern,
    description: "Contemporary layout",
    pdfOptions: { format: 'a4', orientation: 'landscape' }
  },
  creative: {
    name: "Creative",
    component: Creative,
    description: "For design professionals",
    pdfOptions: { format: 'a4', orientation: 'portrait' }
  },
  minimal: {
    name: "Minimalist",
    component: Minimal,
    description: "Simple and elegant",
    pdfOptions: { format: 'letter', orientation: 'portrait' }
  }
};

export default function ResumeForm() {
  const [theme, setTheme] = useState('light');
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    summary: "",
    skills: "",
    profileImage: null,
  });
const [experience, setExperience] = useState([{ jobTitle: "", company: "", duration: "", responsibilities: "" }]);
  const [education, setEducation] = useState([{ degree: "", institution: "", year: "", grade: "" }]);
  const [certification, setCertification] = useState([{ name: "", issuedBy: "", date: "" }]);
  const [projects, setProjects] = useState([{ title: "", description: "", tech: "", link: "" }]);
  const [languages, setLanguages] = useState([{ name: "", level: "" }]);
  const [references, setReferences] = useState([{ name: "", designation: "", contact: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("form");
 useEffect(() => {
    const savedTheme = localStorage.getItem('resumeTheme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('resumeTheme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // LocalStorage handling
  const saveToLocalStorage = (data) => {
    try {
      localStorage.setItem("resumeFormData", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  }
};
  const loadFromLocalStorage = () => {
    try {
      const jsonData = localStorage.getItem("resumeFormData");
      return jsonData ? JSON.parse(jsonData) : null;
    } catch (error) {
      console.error("Error loading from localStorage", error);
      return null;
    }
  };

  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      setForm(savedData.form || form);
      setExperience(savedData.experience || experience);
      setEducation(savedData.education || education);
      setCertification(savedData.certification || certification);
      setProjects(savedData.projects || projects);
      setLanguages(savedData.languages || languages);
      setReferences(savedData.references || references);
    }
  }, []);

  useEffect(() => {
   const saveToLocalStorage = (data) => {
  try {
    // Don't save the image if it's a data URL to prevent localStorage overflow
    const dataToSave = {
      ...data,
      form: {
        ...data.form,
        profileImage: data.form.profileImage ? 'saved' : null
      }
    };
    localStorage.setItem("resumeFormData", JSON.stringify(dataToSave));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};
  }, [form, experience, education, certification, projects, languages, references]);

  // Form handlers
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (array, setArray, index, field, value) => {
    const newArray = [...array];
    newArray[index][field] = value;
    setArray(newArray);
  };

  const addNewItem = (array, setArray, defaultItem) => {
    setArray([...array, defaultItem]);
  };

  const removeItem = (array, setArray, index) => {
    if (array.length > 1) {
      setArray(array.filter((_, i) => i !== index));
    }
  };

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      document.body.classList.add('printing-pdf');
      const element = document.getElementById("resume-content");
      if (!element) {
        console.error("Resume content element not found");
        return;
      }
      const currentTemplateOptions = TEMPLATES[selectedTemplate].pdfOptions;
      await generatePdf(element, "resume.pdf", currentTemplateOptions);
    } catch (error) {
      console.error("Error during PDF generation:", error);
    } finally {
      document.body.classList.remove('printing-pdf');
      setIsLoading(false);
    }
  };

  // API Submission
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/submit-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form,
          experience,
          education,
          certification,
          projects,
          languages,
          references
        }),
      });
      alert(res.ok ? "🎉 Resume submitted successfully!" : "❌ Something went wrong.");
    } catch (error) {
      console.error(error);
      alert("❌ Error submitting resume.");
    } finally {
      setIsLoading(false);
    }
  };

  // Current template component
  const CurrentTemplate = TEMPLATES[selectedTemplate].component;
  const resumeData = {
    form,
    experience,
    education,
    certification,
    projects,
    languages,
    references
  };
  return (
    <div className={`resume-form-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {/* Header */}
      <header className={`resume-form-header ${theme === 'dark' ? 'dark-header' : 'light-header'} `}>
        <div className="header-content">
          <h1 className="header-title">AI Resume Builder</h1>
          <div className="header-actions">
            <button
              onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")}
              className="tab-toggle-button"
            >
              {activeTab === "form" ? "Preview" : "Back to Editor"}
            </button>
            {/* Download button should NOT be here */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-button"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      <main className="resume-form-main">
        {activeTab === "form" ? (
          <div className={`form-container ${theme === 'dark' ? 'dark-form' : 'light-form'}`}>
            {/* Template Selection */}
            <div className="template-selection">
              <h2 className="section-title">Choose Template</h2>
              <div className="template-grid">
                {Object.entries(TEMPLATES).map(([key, template]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedTemplate(key)}
                    className={`template-card ${
                      selectedTemplate === key ? 'selected-template' : ''
                    }`}
                  >
                    <h3 className="template-name">{template.name}</h3>
                    <p className="template-description">{template.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Sections */}
            <div className="form-sections">
              {/* Personal Information */}
              <section className="form-section">
                <h2 className="section-title">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                Information
                </h2>
                <div className="form-grid">
                  {["fullName", "email", "phone", "linkedin", "portfolio"].map((field) => (
                    <div key={field} className="form-field">
                      <label className="field-label">
                        {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={form[field] || ""}
                        onChange={handleFormChange}
                        className="form-input"
                      />
                    </div>
                  ))}
                </div>
              </section>
{/* Add this right after your personal information fields */}

              {/* Summary */}
              <section className="form-section">
                <div className="form-field">
  <label className="field-label">Profile Photo</label>
  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="form-input"
  />
  {form.profileImage && (
    <div className="mt-2">
      <img 
        src={form.profileImage} 
        alt="Preview" 
        className="h-20 w-20 rounded-full object-cover"
      />
      <button
        onClick={() => setForm({...form, profileImage: null})}
        className="text-red-500 text-sm mt-1"
      >
        Remove Image
      </button>
    </div>
  )}
</div>
                <h2 className="section-title">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Summary
                </h2>
                <textarea
                  name="summary"
                  value={form.summary}
                  onChange={handleFormChange}
                  className="form-textarea"
                  rows={4}
                />
                <AgentHelper
                  field="Professional Summary"
                  context={form.summary}
                  onResult={(text) => setForm({ ...form, summary: text })}
                />
              </section>

              {/* Skills */}
              <section className="form-section">
                <h2 className="section-title">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Skills
                </h2>
                <textarea
                  name="skills"
                  value={form.skills}
                  onChange={handleFormChange}
                  className="form-textarea"
                  rows={3}
                />
                <AgentHelper
                  field="Skills"
                  context={form.skills}
                  onResult={(text) => setForm({ ...form, skills: text })}
                  />
                
              </section>

              {/* Experience */}
              <section className="form-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Work Experience
                  </h2>
                  <button
                    onClick={() => addNewItem(experience, setExperience, { jobTitle: "", company: "", duration: "", responsibilities: "" })}
                    className="add-button"
                  >
                    + Add Experience
                  </button>
                </div>

                {experience.map((exp, index) => (
                  <div key={index} className="nested-form-container">
                    <div className="nested-form-header">
                      <h3 className="nested-form-title">Experience #{index + 1}</h3>
                      <button
                        onClick={() => removeItem(experience, setExperience, index)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="form-grid">
                      {["jobTitle", "company", "duration"].map((key) => (
                        <div key={key} className="form-field">
                          <label className="block text-sm font-medium">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </label>
                          <input
                            type="text"
                            value={exp[key] || ""}
                            onChange={(e) => handleArrayChange(experience, setExperience, index, key, e.target.value)}
                            className="form-input"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="form-field">
                      <label className="field-label">Responsibilities</label>
                      <textarea
                        value={exp.responsibilities}
                        onChange={(e) => handleArrayChange(experience, setExperience, index, "responsibilities", e.target.value)}
                        className="form-textarea"
                        rows={3}
                      />
                      <AgentHelper
                        field="Work Experience"
                        context={JSON.stringify(exp)}
                        onResult={(text) => handleArrayChange(experience, setExperience, index, "responsibilities", text)}
                      />
                    </div>
                  </div>
                ))}
              </section>

              {/* Education */}
              <section className="form-section">
                <div className="section-header">
                  <h2 className="section-title">
                     <span className="section-icon">🎓</span>
                     Education
                  </h2>
                  <button
                    onClick={() => addNewItem(education, setEducation, { degree: "", institution: "", year: "", grade: "" })}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
                  >
                    + Add Education
                  </button>
                </div>

                {education.map((edu, index) => (
                  <div key={index} className="nested-form-container">
                    <div className="nested-form-header">
                      <h3 className="nested-form-title">Education #{index + 1}</h3>
                      <button
                        onClick={() => removeItem(education, setEducation, index)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="form-grid">
                      {["degree", "institution", "year", "grade"].map((key) => (
                        <div key={key} className="form-field">
                          <label className="form-label">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </label>
                          <input
                            type="text"
                            value={edu[key] || ""}
                            onChange={(e) => handleArrayChange(education, setEducation, index, key, e.target.value)}
                            className="form-input"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              {/* Certification */}
              <section className="form-section">
                <div className="section-header">
                  <h2 className="section-title">
                    📜 Certifications
                  </h2>
                  <button
                    onClick={() => addNewItem(certification, setCertification, { name: "", issuedBy: "", date: "" })}
                    className="add-button"
                  >
                    + Add Certification
                  </button>
                </div>

                {certification.map((cert, index) => (
                  <div key={index} className="nested-form-container">
                    <div className="nested-form-header">
                      <h3 className="nested-form-title">Certification #{index + 1}</h3>
                      <button
                        onClick={() => removeItem(certification, setCertification, index)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="form-grid">
                      {["name", "issuedBy", "date"].map((key) => (
                        <div key={key} className="form-field">
                          <label className="field-label">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </label>
                          <input
                            type="text"
                            value={cert[key] || ""}
                            onChange={(e) => handleArrayChange(certification, setCertification, index, key, e.target.value)}
                            className="form-input"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              {/* Projects */}
              <section className="form-section">
                <div className="section-header">
                  <h2 className="section-title">
                    🏗️ Projects
                  </h2>
                  <button
                    onClick={() => addNewItem(projects, setProjects, { title: "", description: "", tech: "", link: "" })}
                    className="add-button"
                  >
                    + Add Project
                  </button>
                </div>

                {projects.map((project, index) => (
                  <div key={index} className="nested-form-container">
                    <div className="nested-form-header">
                      <h3 className="nested-form-title">Project #{index + 1}</h3>
                      <button
                        onClick={() => removeItem(projects, setProjects, index)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="form-grid">
                      {["title", "tech", "link"].map((key) => (
                        <div key={key} className="form-field">
                          <label className="field-label">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </label>
                          <input
                            type="text"
                            value={project[key] || ""}
                            onChange={(e) => handleArrayChange(projects, setProjects, index, key, e.target.value)}
                            className="form-input"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="form-field">
                      <label className="field-label">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => handleArrayChange(projects, setProjects, index, "description", e.target.value)}
                        className="form-textarea"
                        rows={3}
                      />
                      <AgentHelper
                        field="Project Description"
                        context={JSON.stringify(project)}
                        onResult={(text) => handleArrayChange(experience, setExperience, index, "responsibilities", text)}
                      />
                    </div>
                  </div>
                ))}
              </section>

              {/* Languages */}
              <section className="form-section">
                <div className="section-header">
                  <h2 className="section-title">
                    🌐 Languages
                  </h2>
                  <button
                    onClick={() => addNewItem(languages, setLanguages, { name: "", level: "" })}
                    className="add-button"
                  >
                    + Add Language
                  </button>
                </div>

                {languages.map((lang, index) => (
                  <div key={index} className="nested-form-container">
                    <div className="nested-form-header">
                      <h3 className="nested-form-title">Language #{index + 1}</h3>
                      <button
                        onClick={() => removeItem(languages, setLanguages, index)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="form-grid">
                      {["name", "level"].map((key) => (
                        <div key={key} className="form-field">
                          <label className="field-label">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </label>
                          <input
                            type="text"
                            value={lang[key] || ""}
                            onChange={(e) => handleArrayChange(languages, setLanguages, index, key, e.target.value)}
                            className="form-input"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              {/* References */}
             <section className="form-section">
                <div className="section-header">
                  <h2 className="section-title">
                    👥 Refrences
                  </h2>
                  <button
                    onClick={() => addNewItem(projects, setProjects, { Name : "" , Designation : "" , Contact : "" })}
                    className="add-button"
                  >
                    + Add Refrence
                  </button>
                </div>

                {projects.map((project, index) => (
                  <div key={index} className="nested-form-container">
                    <div className="nested-form-header">
                      <h3 className="nested-form-title">Refrence #{index + 1}</h3>
                      <button
                        onClick={() => removeItem(projects, setProjects, index)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="form-grid">
                      {["Name", "Designation", "Contact"].map((key) => (
                        <div key={key} className="form-field">
                          <label className="field-label">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </label>
                          <input
                            type="text"
                            value={project[key] || ""}
                            onChange={(e) => handleArrayChange(projects, setProjects, index, key, e.target.value)}
                            className="form-input"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
              {/* Action Buttons - FORM tab */}
              <div className="action-buttons">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`submit-button ${isLoading ? 'loading' : ''}`}
                >
                  {isLoading ? "Processing..." : "Save Resume"}
                </button>
             
                <button
                  onClick={() => setActiveTab("preview")}
                  className="preview-button"
                >
                 Preview Resume
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* This block renders when activeTab is "preview" */
          <div className="space-y-6">
            <div className="flex justify-end gap-4">
              {/* >>>>>>> KEEP THE DOWNLOAD BUTTON ONLY HERE <<<<<<< */}
              <button
                onClick={handleDownload}
                disabled={isLoading}
                className={`download-button ${isLoading ? 'loading' : ''}`}
              >
                {isLoading ? "Generating..." : "Download PDF"}
              </button>
              <button
                onClick={() => setActiveTab("form")}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Back to Editor
              </button>
            </div>
            {/* The div with id="resume-content" MUST be present in this block */}
            <div id="resume-content" className={`resume-preview ${theme === 'dark' ? 'dark-preview' : 'light-preview'}`}>
              <CurrentTemplate data={resumeData} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}