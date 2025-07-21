import { NextApiRequest, NextApiResponse } from 'next';
import { planAppFromPrompt } from '../../../lib/planner';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt } = req.body;
  if (!prompt || prompt.length < 5) return res.status(400).json({ error: 'Invalid prompt' });

  try {
    const plan = await planAppFromPrompt(prompt);
    return res.status(200).json({ success: true, plan });
  } catch (err) {
    console.error('[BuilderBot] Planning error:', err);
    return res.status(500).json({ error: 'Failed to plan app' });
  }
}
