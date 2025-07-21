// app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Builder8',
  description: 'AI-powered SaaS builder that launches full apps from a prompt',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
