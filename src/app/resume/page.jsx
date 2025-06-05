// // 'use client';
// // import { useState, useEffect } from "react";
// // import html2pdf from "html2pdf.js";
// // import AgentHelper from "@/components/AgentHelper";
// // import { useRouter } from 'next/navigation';


// // export default function ResumeForm() {
// //      const router = useRouter();
// //   const [theme, setTheme] = useState('light');
// //   const [form, setForm] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     linkedin: "",
// //     portfolio: "",
// //     summary: "",
// //     skills: "",
// //   });
    
// //   // Load theme from localStorage on component mount
// //   useEffect(() => {
// //     const savedTheme = localStorage.getItem('resumeTheme') || 'light';
// //     setTheme(savedTheme);
// //     document.documentElement.setAttribute('data-theme', savedTheme);
// //   }, []);

// //   // Toggle theme function
// //   const toggleTheme = () => {
// //     const newTheme = theme === 'light' ? 'dark' : 'light';
// //     setTheme(newTheme);
// //     localStorage.setItem('resumeTheme', newTheme);
// //     document.documentElement.setAttribute('data-theme', newTheme);
// //   };
// //   const [experience, setExperience] = useState([{ jobTitle: "", company: "", duration: "", responsibilities: "" }]);
// //   const [education, setEducation] = useState([{ degree: "", institution: "", year: "", grade: "" }]);
// //   const [certification, setCertification] = useState([{ name: "", issuedBy: "", date: "" }]);
// //   const [projects, setProjects] = useState([{ title: "", description: "", tech: "", link: "" }]);
// //   const [languages, setLanguages] = useState([{ name: "", level: "" }]);
// //   const [references, setReferences] = useState([{ name: "", designation: "", contact: "" }]);
// //   const [activeTab, setActiveTab] = useState("form");
// //   const [selectedTemplate, setSelectedTemplate] = useState("professional");
// //   const [isLoading, setIsLoading] = useState(false);

// //   // Save to localStorage
// //   const saveToLocalStorage = (data: any) => {
// //     try {
// //       const jsonData = JSON.stringify(data);
// //       localStorage.setItem("resumeFormData", jsonData);
// //     } catch (error) {
// //       console.error("Error saving to localStorage", error);
// //     }
// //   };

// //   // Load from localStorage
// //   const loadFromLocalStorage = () => {
// //     try {
// //       const jsonData = localStorage.getItem("resumeFormData");
// //       return jsonData ? JSON.parse(jsonData) : null;
// //     } catch (error) {
// //       console.error("Error loading from localStorage", error);
// //       return null;
// //     }
// //   };

// //   useEffect(() => {
// //     const savedData = loadFromLocalStorage();
// //     if (savedData) {
// //       setForm(savedData.form || form);
// //       setExperience(savedData.experience || experience);
// //       setEducation(savedData.education || education);
// //       setCertification(savedData.certification || certification);
// //       setProjects(savedData.projects || projects);
// //       setLanguages(savedData.languages || languages);
// //       setReferences(savedData.references || references);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     saveToLocalStorage({ form, experience, education, certification, projects, languages, references });
// //   }, [form, experience, education, certification, projects, languages, references]);

// //   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleDownload = () => {
// //     setIsLoading(true);
// //     const element = document.getElementById("resume-content");
// //     if (!element) return;

// //     const filename = `${form.fullName.replace(/\s+/g, '_')}_Resume.pdf`;

// //     const opt = {
// //       margin: 0.5,
// //       filename: filename,
// //       image: { type: "jpeg", quality: 0.98 },
// //       html2canvas: { scale: 2 },
// //       jsPDF: { unit: "in", format: selectedTemplate === "creative" ? "a4" : "letter",
// //                orientation: selectedTemplate === "modern" ? "landscape" : "portrait" },
// //     };

// //     html2pdf().set(opt).from(element).save().finally(() => setIsLoading(false));
// //   };

// //   const handleSubmit = async () => {
// //     setIsLoading(true);
// //     try {
// //       const res = await fetch("/api/submit-resume", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           ...form, experience, education, certification, projects, languages, references
// //         }),
// //       });
// //       alert(res.ok ? "🎉 Resume submitted successfully!" : "❌ Something went wrong.");
// //     } catch (error) {
// //       console.error(error);
// //       alert("❌ Error submitting resume.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const addNewSection = (section: string) => {
// //     switch (section) {
// //       case "experience":
// //         setExperience([...experience, { jobTitle: "", company: "", duration: "", responsibilities: "" }]);
// //         break;
// //       case "education":
// //         setEducation([...education, { degree: "", institution: "", year: "", grade: "" }]);
// //         break;
// //       case "certification":
// //         setCertification([...certification, { name: "", issuedBy: "", date: "" }]);
// //         break;
// //       case "projects":
// //         setProjects([...projects, { title: "", description: "", tech: "", link: "" }]);
// //         break;
// //       case "languages":
// //         setLanguages([...languages, { name: "", level: "" }]);
// //         break;
// //       case "references":
// //         setReferences([...references, { name: "", designation: "", contact: "" }]);
// //         break;
// //     }
// //   };

// //   const removeSection = (section: string, index: number) => {
// //     switch (section) {
// //       case "experience":
// //         setExperience(experience.filter((_, i) => i !== index));
// //         break;
// //       case "education":
// //         setEducation(education.filter((_, i) => i !== index));
// //         break;
// //       case "certification":
// //         setCertification(certification.filter((_, i) => i !== index));
// //         break;
// //       case "projects":
// //         setProjects(projects.filter((_, i) => i !== index));
// //         break;
// //       case "languages":
// //         setLanguages(languages.filter((_, i) => i !== index));
// //         break;
// //       case "references":
// //         setReferences(references.filter((_, i) => i !== index));
// //         break;
// //     }
// //   };

// //   // Resume Templates
// //   const templates = [
// //     { id: "professional", name: "Professional", description: "Clean corporate style" },
// //     { id: "modern", name: "Modern", description: "Contemporary layout" },
// //     { id: "creative", name: "Creative", description: "For design professionals" },
// //     { id: "minimal", name: "Minimalist", description: "Simple and elegant" }
// //   ];

// //   return (
// //         <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-300'}`}>

// //       {/* Header */}
// //       <header className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-600'} text-white p-4 shadow-md`}>
// //         <div className="container mx-auto flex justify-between items-center">
// //           <h1 className="text-2xl font-bold">AI Resume Builder</h1>
// //           <div className="flex items-center space-x-4">
// //             <button
// //               onClick={() => router.push('/')}
// //               className="px-3 py-1 rounded hover:bg-white/10"
// //             >
// //               Home
// //             </button>
// //             <button
// //               onClick={toggleTheme}
// //               className="p-2 rounded-full hover:bg-white/10"
// //               aria-label="Toggle theme"
// //             >
// //               {theme === 'light' ? '🌙' : '☀️'}
// //             </button>
// //           </div>
// //         </div>
// //       </header>


// //         <main className="container mx-auto p-4 md:p-6">
// //         <div className={`rounded-lg shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
// //         {activeTab === "form" ? (
// //           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// //             {/* Template Selection */}
// //             <div className="p-6  border-b">
// //               <h2 className="text-xl text-black font-semibold mb-4">Choose Template</h2>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                 {templates.map(template => (
// //                   <div
// //                     key={template.id}
// //                     onClick={() => setSelectedTemplate(template.id)}
// //                     className={`p-4 border text-gray-600 bg-gray-100 rounded-lg cursor-pointer transition-all ${selectedTemplate === template.id ? "border-gray-700 hover:border-gray-300" : "border-gray-700 hover:border-gray-300"}`}
// //                   >
// //                     <h3 className="font-medium text-gray-700">{template.name}</h3>
// //                     <p className="text-sm text-gray-600">{template.description}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Form Sections */}
// //             <div className="p-6 space-y-8">
// //               {/* Personal Info */}
// //               <section className="space-y-4">
// //                 <h2 className="text-xl font-semibold text-gray-800 flex items-center">
// //                   <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// //                   </svg>
// //                   Personal Information
// //                 </h2>
// //                 <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
// //                   {["fullName", "email", "phone", "linkedin", "portfolio"].map((field) => (
// //                     <div key={field} className="space-y-1">
// //                       <label className="block text-sm font-medium text-gray-700">
// //                         {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
// //                       </label>
// //                       <input
// //                         type={field === "email" ? "email" : "text"}
// //                         name={field}
// //                         value={form[field as keyof typeof form] || ""}
// //                         onChange={handleFormChange}
// //                         className="w-full border-gray-700 hover:border-gray-300 p-2 border  text-gray-600 bg-gray-100 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                       />
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>

// //               {/* Summary */}
// //               <section className="space-y-4">
// //                 <h2 className="text-xl font-semibold text-gray-800 flex items-center">
// //                   <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
// //                   </svg>
// //                   Professional Summary
// //                 </h2>
// //                 <textarea
// //                   name="summary"
// //                   value={form.summary}
// //                   onChange={handleFormChange}
// //                   className="w-full p-2 border-gray-700  hover:border-gray-300 border text-gray-600 bg-gray-100  rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                   rows={4}
// //                   placeholder="Briefly describe your professional background and skills..."
// //                 />
// //                 <AgentHelper
// //                   field="Professional Summary"
// //                   context={form.summary}
// //                   onResult={(text) => setForm({ ...form, summary: text })}
// //                 />
// //               </section>

// //               {/* Skills */}
// //               <section className="space-y-4">
// //                 <h2 className="text-xl font-semibold text-gray-800 flex items-center">
// //                   <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
// //                   </svg>
// //                   Skills
// //                 </h2>
// //                 <textarea
// //                   name="skills"
// //                   value={form.skills}
// //                   onChange={handleFormChange}
// //                   className="w-full p-2 border border-gray-700 hover:border-gray-300 text-gray-600 bg-gray-100 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                   rows={3}
// //                   placeholder="List your skills separated by commas (e.g., JavaScript, React, Project Management)"
// //                 />
// //                 <AgentHelper
// //                   field="Skills"
// //                   context={form.skills}
// //                   onResult={(text) => setForm({ ...form, skills: text })}
// //                 />
// //               </section>

// //               {/* Experience */}
// //               <section className="space-y-4">
// //                 <div className="flex justify-between items-center">
// //                   <h2 className="text-xl font-semibold text-gray-800 flex items-center">
// //                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// //                     </svg>
// //                     Work Experience
// //                   </h2>
// //                   <button
// //                     onClick={() => addNewSection("experience")}
// //                     className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
// //                   >
// //                     + Add Experience
// //                   </button>
// //                 </div>
                
// //                 {experience.map((exp, index) => (
// //                   <div key={index} className="border rounded-lg p-4 space-y-3">
// //                     <div className="flex justify-between items-center">
// //                       <h3 className="font-medium">Experience #{index + 1}</h3>
// //                       {experience.length > 1 && (
// //                         <button
// //                           onClick={() => removeSection("experience", index)}
// //                           className="text-red-500 hover:text-red-700 text-sm"
// //                         >
// //                           Remove
// //                         </button>
// //                       )}
// //                     </div>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                       {["jobTitle", "company", "duration"].map((key) => (
// //                         <div key={key} className="space-y-1">
// //                           <label className="block text-sm font-medium text-gray-700">
// //                             {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
// //                           </label>
// //                           <input
// //                             type="text"
// //                             value={exp[key as keyof typeof exp] || ""}
// //                             onChange={(e) => {
// //                               const newExp = [...experience];
// //                               newExp[index][key as keyof typeof exp] = e.target.value;
// //                               setExperience(newExp);
// //                             }}
// //                             className="w-full border-gray-700 hover:border-gray-300 p-2 border text-gray-600 bg-gray-100  rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                           />
// //                         </div>
// //                       ))}
// //                     </div>
// //                     <div className="space-y-1">
// //                       <label className="block text-sm font-medium   text-gray-700">Responsibilities</label>
// //                       <textarea
// //                         value={exp.responsibilities}
// //                         onChange={(e) => {
// //                           const newExp = [...experience];
// //                           newExp[index].responsibilities = e.target.value;
// //                           setExperience(newExp);
// //                         }}
// //                         className="w-full p-2 border-gray-700 hover:border-gray-300 border text-gray-600 bg-gray-100 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                         rows={3}
// //                       />
// //                       <AgentHelper
// //                         field="Work Experience"
// //                         context={JSON.stringify(exp)}
// //                         onResult={(text) => {
// //                           const newExp = [...experience];
// //                           newExp[index].responsibilities = text;
// //                           setExperience(newExp);
// //                         }}
// //                       />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </section>
// //                           {/* Education */}
// //                <section className="space-y-4">
// //                 <div className="flex justify-between items-center">
// //                   <h2 className="text-xl font-semibold text-gray-800 flex items-center">
// //                    🎓 Education
// //                   </h2>
// //                   <button
// //                     onClick={() => addNewSection("education")}
// //                     className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
// //                   >
// //                     + Add Education
// //                   </button>
// //                 </div>
                
// //                 {education.map((edu, index) => (
// //                   <div key={index} className="border rounded-lg p-4 space-y-3">
// //                     <div className="flex justify-between items-center">
// //                       <h3 className="font-medium">Education #{index + 1}</h3>
// //                       {education.length > 1 && (
// //                         <button
// //                           onClick={() => removeSection("education", index)}
// //                           className="text-red-500 hover:text-red-700 text-sm"
// //                         >
// //                           Remove
// //                         </button>
// //                       )}
// //                     </div>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                       {["degree", "institution", "year","grade"].map((key) => (
// //                         <div key={key} className="space-y-1">
// //                           <label className="block text-sm font-medium text-gray-700">
// //                             {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
// //                           </label>
// //                           <input
// //                             type="text"
// //                             value={edu[key as keyof typeof edu] || ""}
// //                             onChange={(e) => {
// //                               const newEdu = [...education];
// //                               newEdu[index][key as keyof typeof edu] = e.target.value;
// //                               setEducation(newEdu);
// //                             }}
// //                             className="w-full p-2 border-gray-700 hover:border-gray-300 text-gray-600 bg-gray-100 border rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                           />
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))}
// //                           </section>
                          
                          
// //                             {/* Certification */}
// //               <section className="space-y-4">
// //                 <div className="flex justify-between items-center">
// //                   <h2 className="text-xl font-semibold text-gray-800 flex items-center">
// //                     📜Certification
// //                   </h2>
// //                   <button
// //                     onClick={() => addNewSection("certification")}
// //                     className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
// //                   >
// //                     + Add Certificate
// //                   </button>
// //                 </div>
                
// //                 {certification.map((cer, index) => (
// //                   <div key={index} className="border rounded-lg p-4 space-y-3">
// //                     <div className="flex justify-between items-center">
// //                       <h3 className="font-medium">Certificate #{index + 1}</h3>
// //                       {certification.length > 1 && (
// //                         <button
// //                           onClick={() => removeSection("certification", index)}
// //                           className="text-red-500 hover:text-red-700 text-sm"
// //                         >
// //                           Remove
// //                         </button>
// //                       )}
// //                     </div>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                       {["name", "issuedBy", "data"].map((key) => (
// //                         <div key={key} className="space-y-1">
// //                           <label className="block text-sm font-medium text-gray-700">
// //                             {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
// //                           </label>
// //                           <input
// //                             type="text"
// //                             value={cer[key as keyof typeof cer] || ""}
// //                             onChange={(e) => {
// //                               const newCer = [...certification];
// //                               newCer[index][key as keyof typeof cer] = e.target.value;
// //                               setCertification(newCer);
// //                             }}
// //                             className="w-full border-gray-700 hover:border-gray-300 text-gray-600 bg-gray-100 p-2 border  rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                           />
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))}
// //                           </section>
                          
// //                           {/* Languages */}
// //                           <section className="space-y-4">
// //                               <div className="flex justify-between items-center">
// //                                   <h2 className="text-xl font-semibold text-gray-800 flex items-center">🌐 Languages</h2>
// //                                     <button
// //                                         onClick={() => addNewSection("languages")}
// //                                      className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
// //                                   >
// //                                       + Add Language</button>
                                  
// //                               </div>
// //                               {languages.map((lang, index) => (
// //                                   <div key={index} className="border rounded-lg p-4 space-y-3">
// //                                       <div className="flex justify-between items-center">
// //                                           <h3 className="font-medium">Language #{index + 1}</h3>
// //                                           {languages.length > 1 && (
// //                                               <button
// //                                                   onClick={() => removeSection("languages", index)}
// //                                                   className="text-red-500 hover:text-red-700 text-sm"
// //                                               >
// //                                                   Remove
// //                                               </button>
// //                                           )}
// //                                       </div>
// //                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                                           {["name", "level"].map((key) => (
// //                                               <div key={key} className="space-y-1">
// //                                                   <label className="block text-sm font-medium text-gray-700">
// //                                                       {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
// //                                                   </label>
// //                                                   <input
// //                                                       type="text"
// //                                                       value={lang[key as keyof typeof lang] || ""}
// //                                                       onChange={(e) => {
// //                                                           const newLang = [...languages];
// //                                                           newLang[index][key as keyof typeof lang] = e.target.value;
// //                                                           setLanguages(newLang);
// //                                                       }}
// //                                                       className="w-full p-2 text-gray-600 bg-gray-100 border border-gray-700 hover:border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                                                   />
// //                                               </div>
// //                                           ))}
// //                                   </div>
// //                                   </div>
// //                                 ))}
// //                           </section>
                          
// //                           {/* References */}
// //                           <section className="space-y-4">
// //                               <div className="flex justify-between items-center">
// //                                     <h2 className="text-xl text-gray-800 font-semibold flex items-center">👥 References</h2>
// //                                     <button
// //                                         onClick={() => addNewSection("references")}
// //                                         className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
// //                                     >
// //                                         + Add Reference
// //                                   </button>
// //                               </div>
// //                                 {references.map((ref, index) => (
// //                                     <div key={index} className="border rounded-lg p-4 space-y-3">
// //                                         <div className="flex justify-between items-center">
// //                                             <h3 className="font-medium">Reference #{index + 1}</h3>
// //                                             {references.length > 1 && (
// //                                                 <button
// //                                                     onClick={() => removeSection("references", index)}
// //                                                     className="text-red-500 hover:text-red-700 text-sm"
// //                                                 >
// //                                                     Remove
// //                                                 </button>
// //                                             )}
// //                                         </div>
// //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                                             {["name", "designation", "contact"].map((key) => (
// //                                                 <div key={key} className="space-y-1">
// //                                                     <label className="block text-sm font-medium text-gray-700">
// //                                                         {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
// //                                                     </label>
// //                                                     <input
// //                                                         type="text"
// //                                                         value={ref[key as keyof typeof ref] || ""}
// //                                                         onChange={(e) => {
// //                                                             const newRef = [...references];
// //                                                             newRef[index][key as keyof typeof ref] = e.target.value;
// //                                                             setReferences(newRef);
// //                                                         }}
// //                                                         className="w-full border-gray-700 hover:border-gray-300 text-gray-600 bg-gray-100 p-2 border  rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                                                     />
// //                                                 </div>
// //                                             ))}
// //                                         </div>
// //                                     </div>
// //                                 ))}
// //                 </section>

// //               {/* Action Buttons */}
// //               <div className="flex flex-wrap gap-4 pt-6">
// //                 <button
// //                   onClick={handleSubmit}
// //                   disabled={isLoading}
// //                   className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
// //                 >
// //                   {isLoading ? "Processing..." : "Save Resume"}
// //                 </button>
// //                 <button
// //                   onClick={handleDownload}
// //                   disabled={isLoading}
// //                   className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-green-400"
// //                 >
// //                   {isLoading ? "Generating..." : "Download PDF"}
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveTab("preview")}
// //                   className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
// //                 >
// //                   Preview Resume
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// //             <div className="p-4 border-b flex justify-between items-center">
// //               <h2 className="text-xl font-semibold">Resume Preview</h2>
// //               <button
// //                 onClick={() => setActiveTab("form")}
// //                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
// //               >
// //                 Back to Editor
// //               </button>
// //             </div>
            
// //             {/* Resume Preview Content */}
// //             <div id="resume-content" className={`p-6 ${selectedTemplate}-template`}>
// //               {/* Template-specific resume rendering */}
// //               {selectedTemplate === "professional" && (
// //                 <ProfessionalTemplate
// //                   form={form}
// //                   experience={experience}
// //                   education={education}
// //                   projects={projects}
// //                   languages={languages}
// //                 />
// //               )}
// //               {selectedTemplate === "modern" && (
// //                 <ModernTemplate
// //                   form={form}
// //                   experience={experience}
// //                   education={education}
// //                   projects={projects}
// //                 />
// //               )}
// //               {/* Add other templates similarly */}
// //             </div>
            
// //             <div className="p-4 border-t flex justify-end">
// //               <button
// //                 onClick={handleDownload}
// //                 disabled={isLoading}
// //                 className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-green-400"
// //               >
// //                 {isLoading ? "Generating..." : "Download PDF"}
// //               </button>
// //             </div>
// //           </div>
// //                   )}
// //                   </div>
// //       </main>
// //     </div>
// //   );
// // }

// // function ProfessionalTemplate({ form, experience, education, projects, languages }: any) {
// //   return (
// //     <div className="space-y-6">
// //       <header className="text-center border-b pb-4">
// //         <h1 className="text-3xl font-bold">{form.fullName}</h1>
// //         <div className="flex justify-center space-x-4 text-sm mt-2">
// //           {form.email && <span>{form.email}</span>}
// //           {form.phone && <span>• {form.phone}</span>}
// //           {form.linkedin && <span>• <a href={form.linkedin} target="_blank">LinkedIn</a></span>}
// //         </div>
// //       </header>

// //       {form.summary && (
// //         <section>
// //           <h2 className="text-xl font-bold border-b pb-1 mb-2">PROFESSIONAL SUMMARY</h2>
// //           <p className="text-sm">{form.summary}</p>
// //         </section>
// //       )}

// //       {form.skills && (
// //         <section>
// //           <h2 className="text-xl font-bold border-b pb-1 mb-2">SKILLS</h2>
// //           <ul className="list-disc list-inside grid grid-cols-2 gap-1 text-sm">
// //             {form.skills.split(",").map((skill: string, i: number) => (
// //               <li key={i}>{skill.trim()}</li>
// //             ))}
// //           </ul>
// //         </section>
// //       )}

// //       {experience.length > 0 && experience[0].jobTitle && (
// //         <section>
// //           <h2 className="text-xl font-bold border-b pb-1 mb-2">PROFESSIONAL EXPERIENCE</h2>
// //           {experience.map((exp: any, i: number) => (
// //             <div key={i} className="mb-4">
// //               <h3 className="font-bold">{exp.jobTitle}</h3>
// //               <div className="flex justify-between text-sm">
// //                 <span className="italic">{exp.company}</span>
// //                 <span>{exp.duration}</span>
// //               </div>
// //               <ul className="list-disc list-inside mt-1 text-sm">
// //                 {exp.responsibilities.split("\n").map((item: string, j: number) => (
// //                   <li key={j}>{item}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </section>
// //       )}

// //       {/* Similar sections for Education, Projects, etc. */}
// //     </div>
// //   );
// // }

// // function ModernTemplate({ form, experience, education, projects }: any) {
// //   return (
// //     <div className="grid grid-cols-5 gap-6">
// //       <div className="col-span-2 bg-gray-100 p-6">
// //         {/* Left sidebar content */}
// //       </div>
// //       <div className="col-span-3 p-6">
// //         {/* Main content */}
// //       </div>
// //     </div>
// //   );
// // }







// app/resume/page.jsx
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
                {/* >>>>>>> REMOVE THIS BUTTON FROM HERE <<<<<<< */}
                {/*
                <button
                  onClick={handleDownload}
                  disabled={isLoading}
                  className={`download-button ${isLoading ? 'loading' : ''}`}
                >
                  {isLoading ? "Generating..." : "Download PDF"}
                </button>
                */}
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





// 'use client';
// import { useState, useEffect } from "react";
// import { generatePdf } from "../utils/generatePdf";
// import AgentHelper from "@/components/AgentHelper";
// import Professional from "@/components/templates/Professional";
// import Modern from "@/components/templates/Modern";
// import Creative from "@/components/templates/Creative";
// import Minimal from "@/components/templates/Minimal";

// const TEMPLATES = {
//   professional: {
//     name: "Professional",
//     component: Professional,
//     description: "Clean corporate style",
//     pdfOptions: { format: 'letter', orientation: 'portrait' }
//   },
//   modern: {
//     name: "Modern",
//     component: Modern,
//     description: "Contemporary layout",
//     pdfOptions: { format: 'a4', orientation: 'landscape' }
//   },
//   creative: {
//     name: "Creative",
//     component: Creative,
//     description: "For design professionals",
//     pdfOptions: { format: 'a4', orientation: 'portrait' }
//   },
//   minimal: {
//     name: "Minimalist",
//     component: Minimal,
//     description: "Simple and elegant",
//     pdfOptions: { format: 'letter', orientation: 'portrait' }
//   }
// };

// export default function ResumeForm() {
//   const [theme, setTheme] = useState('light');
//   const [selectedTemplate, setSelectedTemplate] = useState('professional');
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     linkedin: "",
//     portfolio: "",
//     summary: "",
//     skills: "",
//   });
  
//   const [experience, setExperience] = useState([{ jobTitle: "", company: "", duration: "", responsibilities: "" }]);
//   const [education, setEducation] = useState([{ degree: "", institution: "", year: "", grade: "" }]);
//   const [certification, setCertification] = useState([{ name: "", issuedBy: "", date: "" }]);
//   const [projects, setProjects] = useState([{ title: "", description: "", tech: "", link: "" }]);
//   const [languages, setLanguages] = useState([{ name: "", level: "" }]);
//   const [references, setReferences] = useState([{ name: "", designation: "", contact: "" }]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [activeTab, setActiveTab] = useState("form");

//   // Theme handling
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('resumeTheme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('resumeTheme', newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//   };

//   // LocalStorage handling
//   const saveToLocalStorage = (data) => {
//     try {
//       localStorage.setItem("resumeFormData", JSON.stringify(data));
//     } catch (error) {
//       console.error("Error saving to localStorage", error);
//     }
//   };

//   const loadFromLocalStorage = () => {
//     try {
//       const jsonData = localStorage.getItem("resumeFormData");
//       return jsonData ? JSON.parse(jsonData) : null;
//     } catch (error) {
//       console.error("Error loading from localStorage", error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const savedData = loadFromLocalStorage();
//     if (savedData) {
//       setForm(savedData.form || form);
//       setExperience(savedData.experience || experience);
//       setEducation(savedData.education || education);
//       setCertification(savedData.certification || certification);
//       setProjects(savedData.projects || projects);
//       setLanguages(savedData.languages || languages);
//       setReferences(savedData.references || references);
//     }
//   }, []);

//   useEffect(() => {
//     saveToLocalStorage({
//       form,
//       experience,
//       education,
//       certification,
//       projects,
//       languages,
//       references,
//     });
//   }, [form, experience, education, certification, projects, languages, references]);

//   // Form handlers
//   const handleFormChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleArrayChange = (array, setArray, index, field, value) => {
//     const newArray = [...array];
//     newArray[index][field] = value;
//     setArray(newArray);
//   };

//   const addNewItem = (array, setArray, defaultItem) => {
//     setArray([...array, defaultItem]);
//   };

//   const removeItem = (array, setArray, index) => {
//     if (array.length > 1) {
//       setArray(array.filter((_, i) => i !== index));
//     }
//   };

//   const handleDownload = async () => {
//     setIsLoading(true);
//     try {
//       document.body.classList.add('printing-pdf');
//       const element = document.getElementById("resume-content");
//       if (!element) {
//         console.error("Resume content element not found");
//         return;
//       }
//       const currentTemplateOptions = TEMPLATES[selectedTemplate].pdfOptions;
//       await generatePdf(element, "resume.pdf", currentTemplateOptions);
//     } catch (error) {
//       console.error("Error during PDF generation:", error);
//     } finally {
//       document.body.classList.remove('printing-pdf');
//       setIsLoading(false);
//     }
//   };

//   // API Submission
//   const handleSubmit = async () => {
//     setIsLoading(true);
//     try {
//       const res = await fetch("/api/submit-resume", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           form,
//           experience,
//           education,
//           certification,
//           projects,
//           languages,
//           references
//         }),
//       });
//       alert(res.ok ? "🎉 Resume submitted successfully!" : "❌ Something went wrong.");
//     } catch (error) {
//       console.error(error);
//       alert("❌ Error submitting resume.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Current template component
//   const CurrentTemplate = TEMPLATES[selectedTemplate].component;
//   const resumeData = {
//     form,
//     experience,
//     education,
//     certification,
//     projects,
//     languages,
//     references
//   };

//   return (
//     <div className={`resume-form-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
//       {/* Header */}
//       <header className={`resume-form-header ${theme === 'dark' ? 'dark-header' : 'light-header'}`}>
//         <div className="header-content">
//           <h1 className="header-title">AI Resume Builder</h1>
//           <div className="header-actions">
//             <button
//               onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")}
//               className="tab-toggle-button"
//             >
//               {activeTab === "form" ? "Preview" : "Back to Editor"}
//             </button>
//             <button
//               onClick={toggleTheme}
//               className="theme-toggle-button"
//               aria-label="Toggle theme"
//             >
//               {theme === 'light' ? '🌙' : '☀️'}
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="resume-form-main">
//         {activeTab === "form" ? (
//           <div className={`form-container ${theme === 'dark' ? 'dark-form' : 'light-form'}`}>
//             {/* Template Selection */}
//             <div className="template-selection">
//               <h2 className="section-title">Choose Template</h2>
//               <div className="template-grid">
//                 {Object.entries(TEMPLATES).map(([key, template]) => (
//                   <div
//                     key={key}
//                     onClick={() => setSelectedTemplate(key)}
//                     className={`template-card ${selectedTemplate === key ? 'selected-template' : ''}`}
//                   >
//                     <h3 className="template-name">{template.name}</h3>
//                     <p className="template-description">{template.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Form Sections */}
//             <div className="form-sections">
//               {/* Personal Information */}
//               <section className="form-section">
//                 <h2 className="section-title">
//                   <span className="section-icon">👤</span>
//                   Personal Information
//                 </h2>
//                 <div className="form-grid">
//                   {["fullName", "email", "phone", "linkedin", "portfolio"].map((field) => (
//                     <div key={field} className="form-field">
//                       <label className="field-label">
//                         {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                       </label>
//                       <input
//                         type={field === "email" ? "email" : "text"}
//                         name={field}
//                         value={form[field] || ""}
//                         onChange={handleFormChange}
//                         className="form-input"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* Summary */}
//               <section className="form-section">
//                 <h2 className="section-title">
//                   <span className="section-icon">📝</span>
//                   Professional Summary
//                 </h2>
//                 <textarea
//                   name="summary"
//                   value={form.summary}
//                   onChange={handleFormChange}
//                   className="form-textarea"
//                   rows={4}
//                 />
//                 <AgentHelper
//                   field="Professional Summary"
//                   context={form.summary}
//                   onResult={(text) => setForm({ ...form, summary: text })}
//                 />
//               </section>

//               {/* Skills */}
//               <section className="form-section">
//                 <h2 className="section-title">
//                   <span className="section-icon">🛠️</span>
//                   Skills
//                 </h2>
//                 <textarea
//                   name="skills"
//                   value={form.skills}
//                   onChange={handleFormChange}
//                   className="form-textarea"
//                   rows={3}
//                 />
//                 <AgentHelper
//                   field="Skills"
//                   context={form.skills}
//                   onResult={(text) => setForm({ ...form, skills: text })}
//                 />
//               </section>

//               {/* Experience */}
//               <section className="form-section">
//                 <div className="section-header">
//                   <h2 className="section-title">
//                     <span className="section-icon">💼</span>
//                     Work Experience
//                   </h2>
//                   <button
//                     onClick={() => addNewItem(experience, setExperience, { jobTitle: "", company: "", duration: "", responsibilities: "" })}
//                     className="add-button"
//                   >
//                     + Add Experience
//                   </button>
//                 </div>

//                 {experience.map((exp, index) => (
//                   <div key={index} className="nested-form-container">
//                     <div className="nested-form-header">
//                       <h3 className="nested-form-title">Experience #{index + 1}</h3>
//                       <button
//                         onClick={() => removeItem(experience, setExperience, index)}
//                         className="remove-button"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                     <div className="form-grid">
//                       {["jobTitle", "company", "duration"].map((key) => (
//                         <div key={key} className="form-field">
//                           <label className="field-label">
//                             {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                           </label>
//                           <input
//                             type="text"
//                             value={exp[key] || ""}
//                             onChange={(e) => handleArrayChange(experience, setExperience, index, key, e.target.value)}
//                             className="form-input"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                     <div className="form-field">
//                       <label className="field-label">Responsibilities</label>
//                       <textarea
//                         value={exp.responsibilities}
//                         onChange={(e) => handleArrayChange(experience, setExperience, index, "responsibilities", e.target.value)}
//                         className="form-textarea"
//                         rows={3}
//                       />
//                       <AgentHelper
//                         field="Work Experience"
//                         context={JSON.stringify(exp)}
//                         onResult={(text) => handleArrayChange(experience, setExperience, index, "responsibilities", text)}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </section>

//               {/* Education */}
//               <section className="form-section">
//                 <div className="section-header">
//                   <h2 className="section-title">
//                     <span className="section-icon">🎓</span>
//                     Education
//                   </h2>
//                   <button
//                     onClick={() => addNewItem(education, setEducation, { degree: "", institution: "", year: "", grade: "" })}
//                     className="add-button"
//                   >
//                     + Add Education
//                   </button>
//                 </div>

//                 {education.map((edu, index) => (
//                   <div key={index} className="nested-form-container">
//                     <div className="nested-form-header">
//                   b   <h3 className="nested-form-title">Education #{index + 1}</h3>
//                       <button
//                         onClick={() => removeItem(education, setEducation, index)}
//                         className="remove-button"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                     <div className="form-grid">
//                       {["degree", "institution", "year", "grade"].map((key) => (
//                         <div key={key} className="form-field">
//                           <label className="field-label">
//                             {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                           </label>
//                           <input
//                             type="text"
//                             value={edu[key] || ""}
//                             onChange={(e) => handleArrayChange(education, setEducation, index, key, e.target.value)}
//                             className="form-input"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </section>

//               {/* Action Buttons */}
//               <div className="action-buttons">
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isLoading}
//                   className={`submit-button ${isLoading ? 'loading' : ''}`}
//                 >
//                   {isLoading ? "Processing..." : "Save Resume"}
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("preview")}
//                   className="preview-button"
//                 >
//                   Preview Resume
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* Preview Tab */
//           <div className="preview-container">
//             <div className="preview-actions">
//               <button
//                 onClick={handleDownload}
//                 disabled={isLoading}
//                 className={`download-button ${isLoading ? 'loading' : ''}`}
//               >
//                 {isLoading ? "Generating..." : "Download PDF"}
//               </button>
//               <button
//                 onClick={() => setActiveTab("form")}
//                 className="edit-button"
//               >
//                 Back to Editor
//               </button>
//             </div>
            
//             {/* Resume Preview Content */}
//             <div id="resume-content" className={`resume-preview ${theme === 'dark' ? 'dark-preview' : 'light-preview'}`}>
//               <CurrentTemplate data={resumeData} />
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }