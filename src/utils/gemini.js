import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_KEY;
const ai = new GoogleGenerativeAI(apiKey);

const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

export default model;
