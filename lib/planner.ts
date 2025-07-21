import { AppPlan } from '../types/builderbot';

export async function planAppFromPrompt(prompt: string): Promise<AppPlan> {
  const lower = prompt.toLowerCase();

  const plan: AppPlan = {
    appName: prompt.slice(0, 20).replace(/[^a-zA-Z0-9]/g, '') || 'MyApp',
    entities: [],
    features: [],
    stack: {
      frontend: 'Next.js + TailwindCSS',
      backend: 'Node.js + Prisma',
      database: 'PostgreSQL',
    },
    estimatedModules: 4,
  };

  if (lower.includes('crm')) {
    plan.entities.push('User', 'Lead', 'Task', 'EmailLog');
    plan.features.push('Authentication', 'Task Assignment', 'Email Reminders');
    plan.appName = 'LeadCRM';
    plan.estimatedModules = 6;
  }

  return plan;
}
