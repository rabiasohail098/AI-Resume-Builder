"use client";
import { useState,useEffect } from "react";

type AgentHelperProps = {
    field: string;
    context?: string;
    onResult?: (text: string) => void;
}

export default function AgentHelper({ field, context = "", onResult }: AgentHelperProps) {
    const [loading, setLoading] = useState(false);
    const [suggestion, setSuggestion] = useState("");

    const handleGetSuggestion = async () => {
        setLoading(true);
        setSuggestion("");
        try {
            const response = await fetch("/api/agent", {
                method: "POST",
                headers: {
                    "Content-Type": " application/json"
                },
                body: JSON.stringify({ field, context })
            })
            const data = await response.json();
            if (data?.suggestion) {
                setSuggestion(data.suggestion);
                onResult?.(data.suggestion);
                }else {
                setSuggestion("✖️ No suggestion available");
            }
        } catch (error) {
            console.error("Error fetching suggestion:", error);
            setSuggestion("✖️ Something went wrong while fetching suggestion");
        }
        setLoading(false);
    };
      const [theme, setTheme] = useState('light')
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
    return (
        <div className="mt-2">
            <button
                onClick={handleGetSuggestion}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                disabled={loading}
            >{loading ? "Thinking..." : "💡 Suggest Answer"}
            </button>
            {suggestion && (
                <div className={`${theme === "dark" ? 'form-textarea' :''}`}>
                    {suggestion}
                </div>
            )}
                </div>
    )
        }