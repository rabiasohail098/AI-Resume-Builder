"use client"

import { useState } from 'react';
import ProfessionalTemplate from './templates/Professional';
import ModernTemplate from './templates/Modern';
import CreativeTemplate from './templates/Creative';
import MinimalTemplate from './templates/Minimal';

const TEMPLATES = {
  professional: {
    name: "Professional",
    component: ProfessionalTemplate,
    description: "Clean corporate style",
    pdfOptions: { format: 'letter', orientation: 'portrait' }
  },
  modern: {
    name: "Modern",
    component: ModernTemplate,
    description: "Contemporary layout", 
    pdfOptions: { format: 'a4', orientation: 'landscape' }
  },
  creative: {
    name: "Creative",
    component: CreativeTemplate,
    description: "For design professionals",
    pdfOptions: { format: 'a4', orientation: 'portrait' }
  },
  minimal: {
    name: "Minimalist",
    component: MinimalTemplate,
    description: "Simple and elegant",
    pdfOptions: { format: 'letter', orientation: 'portrait' }
  }
};

export default function ResumeBuilder({ resumeData }) {
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  
  // Get the component directly from the template object
  const TemplateComponent = TEMPLATES[selectedTemplate].component;

  // Provide default data if not passed
  const data = resumeData || {
    form: {
      fullName: "",
      email: "",
      contact: "",
      linkedin: "",
      portfolio: "",
      skills: "",
      summary:"",
    },
    experience: [],
    education: [],
    certification: [],
    languages: [],
    projects: [],
    
    // ... other sections
  };

  return (
    <div className="container mx-auto p-4">
      {/* Template selector */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Choose a Template</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(TEMPLATES).map(([key, template]) => (
            <div 
              key={key}
              onClick={() => setSelectedTemplate(key)}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedTemplate === key ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'
              }`}
            >
              <h3 className="font-medium">{template.name}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Render the selected template component */}
      <div id="resume-content" className="bg-white shadow-lg">
        <TemplateComponent data={data} />
      </div>
    </div>
  );
}