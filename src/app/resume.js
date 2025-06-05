// pages/resume.js
import ResumeBuilder from '../components/ResumeBuilder';

export default function ResumePage() {
  // Get your resume data from state, context, or API
  const resumeData = {
    form: {
      fullName: "John Doe",
      email: "john@example.com",
      // ... other form fields
    },
    experience: [
      {
        jobTitle: "Software Engineer",
        company: "Tech Corp",
        // ... other experience fields
      }
    ],
    // ... other sections
  };

  return (
    <div>
      <ResumeBuilder resumeData={resumeData} />
    </div>
  );
}