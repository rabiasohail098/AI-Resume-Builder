// lib/agent/types.ts
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ModelResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
  error?: string;
}

export interface AgentRequest {
  field: string;
  context: string;
}

export interface AgentResponse {
  suggestion?: string;
  error?: string;
}