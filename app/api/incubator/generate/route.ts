import { google } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const { idea } = await req.json();

    if (!idea) {
      return new Response('Idea is required', { status: 400 });
    }

    const { object } = await generateObject({
      model: google('gemini-1.5-flash'),
      schema: z.object({
        title: z.string().describe('A catchy name for the product'),
        oneLiner: z.string().describe('A punchy value proposition'),
        targetAudience: z.string().describe('Who is this for? (ICP)'),
        problemSolved: z.string().describe('The core pain point being addressed'),
        monetization: z.string().describe('How it makes money (Pricing model)'),
        mvpFeatures: z.array(z.string()).describe('List of 3-5 core features for MVP'),
        techStack: z.string().describe('Recommended tech stack'),
        viabilityScore: z.number().min(1).max(10).describe('1-10 rating of potential success'),
        viabilityReason: z.string().describe('Why this score was given'),
        nextSteps: z.enum(['Start Project', 'Save for Later', 'Discard']).describe('Recommended action')
      }),
      prompt: `Analyze this software product idea and create a mini business plan:
      
      Idea: "${idea}"
      
      Be critical but constructive. Focus on Micro-SaaS viability (low overhead, high automation).`
    });

    return Response.json(object);
  } catch (error) {
    console.error('Incubator Error:', error);
    return new Response('Failed to generate plan', { status: 500 });
  }
}
