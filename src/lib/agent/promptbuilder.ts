export function promptbuilder(field: string, context: string): string {
    return `
  You are an AI helpful assistant helping a user fill out a professional resume.Your
  task is to provide a suggestion for the field "${field}" based on the context provided and generate a
  well-written and relevant answer for the following resume field: -Field ${field}.
  Context: ${context ? `Additional context or notes from the user: ${context}\n` : ""}
  Be concise professioal, and helpful. Output only the answer text - no explanations or additional text.`.trim()
}