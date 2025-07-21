// pages/api/builderbot/generate.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { generateAppFromPlan } from '../../../lib/app-generator';
import { AppPlan } from '../../../types/builderbot';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const plan: AppPlan = req.body.plan;

  if (!plan || !plan.appName || !Array.isArray(plan.entities)) {
    return res.status(400).json({ error: 'Invalid plan format' });
  }

  const files = generateAppFromPlan(plan);

  res.status(200).json({ success: true, files });
}
