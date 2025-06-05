// lib/agent/types.ts
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ModelChoice {
  message: {
    content: string;
  };
}

export interface ModelResponse {
  choices: ModelChoice[];
  error?: {
    message: string;
  };
}

export interface AgentRequest {
  field: string;
  context: string;
}

export interface AgentResponse {
  suggestion?: string;
  error?: string;
}
// Remove ModelError interface