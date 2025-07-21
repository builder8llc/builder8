// lib/app-generator.ts
import { AppPlan } from '../types/builderbot';

export function generateAppFromPlan(plan: AppPlan) {
  const files: Record<string, string> = {};

  // 1. Prisma schema
  const modelBlocks = plan.entities.map((entity) => {
    return `model ${entity} {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}`;
  });

  files['prisma/schema.prisma'] = `
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

${modelBlocks.join('\n\n')}
`;

  // 2. API route stubs
  plan.entities.forEach((entity) => {
    const kebab = entity.toLowerCase();
    files[`pages/api/${kebab}/index.ts`] = `// ${entity} API (stub)
export default function handler(req, res) {
  res.status(200).json({ message: "This is the ${entity} API." });
}`;
  });

  // 3. Homepage stub
  files['pages/index.tsx'] = `
export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Welcome to ${plan.appName}</h1>
      <p>This app has these entities: ${plan.entities.join(', ')}</p>
    </main>
  );
}
`;

  return files;
}
