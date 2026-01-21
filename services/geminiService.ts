
import { GoogleGenAI, Type } from "@google/genai";

export async function brainstormTattooIdea(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Brainstorm a unique tattoo concept based on this theme: "${prompt}". Suggest styles, body placement, and symbolism in a dark, edgy, modern Bloodridge aesthetic.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          conceptName: { type: Type.STRING },
          description: { type: Type.STRING },
          styleSuggestion: { type: Type.STRING },
          placement: { type: Type.STRING },
          keyElements: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["conceptName", "description", "styleSuggestion", "placement", "keyElements"]
      }
    }
  });

  return JSON.parse(response.text);
}
