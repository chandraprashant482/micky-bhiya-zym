import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily inside handler
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Fitness Coach Assistant API Endpoint
app.post("/api/ai-coach", async (req, res) => {
  try {
    const { goal, fitnessLevel, branch, userQuery } = req.body;

    const prompt = `You are the official AI Elite Coach for "Lagoon Fitness Gym", India's premier 24x7 luxury gym with branches in Janakpuri and Malviya Nagar, Delhi.
You specialize in customizing workout plans, nutrition advice, and class recommendations available at Lagoon Fitness Gym (such as Matrix Resistance Training, Functional Turf, Zumba, Bhangra Fitness, Bollytwist, Power Yoga, Core Pilates, and Steam Bath Recovery).

User Details:
- Fitness Goal: ${goal || "General Fitness & Fat Loss"}
- Fitness Level: ${fitnessLevel || "Intermediate"}
- Preferred Branch: ${branch || "Janakpuri"}
- Specific Question: ${userQuery || "Recommend a weekly routine and post-workout recovery routine."}

Provide a high-energy, encouraging, highly detailed response structured with:
1. 🏋️ Custom Workout Routine (including Matrix machines & group classes)
2. 🥗 Macro Nutrition & Protein Cafe Suggestions
3. 🧘 Recovery Protocol (Steam bath & shower tips)
4. 🔥 Motivation & Next Steps

Keep your tone inspiring, professional, and branded around Lagoon Fitness Gym.`;

    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({ success: true, advice: response.text });
  } catch (error: any) {
    console.error("AI Coach Error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to generate fitness recommendations. Please try again later.",
      fallbackAdvice: "Our AI Coach is currently training! Meanwhile, visit the reception desk at Janakpuri or Malviya Nagar for a free 1-on-1 consultation with Coach Rajeev or Coach Simran."
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Component Fitness Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
