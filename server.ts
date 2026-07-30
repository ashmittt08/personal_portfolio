import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini AI Chat endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.json({
          reply: "Ashmit Saxena is a Computer Science undergraduate at VIT Bhopal specializing in Full-Stack Web Development (React, Node.js, Express, MongoDB, PostgreSQL, Prisma), Gemini AI integrations, and AR/Unity development."
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `
You are an AI assistant representing Ashmit Saxena, a Computer Science undergraduate at VIT Bhopal, India.
Ashmit is a Full-Stack Developer, AI Enthusiast, and AR & Game Developer.
He works with React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Prisma ORM, Unity, Vuforia SDK, C#, Blender, and Google Gemini AI.
His key projects include MockMate (AI mock interview platform with Gemini AI), MentorBoard (internship management web app), Smooth AI, EcoVerse AR (educational AR application), and AR Business Card.
Be concise, friendly, professional, and helpful when answering questions about Ashmit's background, portfolio, stack, projects, or availability.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({ reply: response.text || "Thank you for asking about Ashmit's portfolio!" });
    } catch (err: any) {
      console.error('Gemini API error:', err);
      return res.json({
        reply: "Ashmit is currently open for full-stack engineering internships, AI/AR projects, and software roles. Feel free to send a message via the contact form!"
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
