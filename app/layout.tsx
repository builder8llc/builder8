// app/layout.tsx

import './globals.css'; // ⬅️ Make sure this exists

export const metadata = {
  title: 'Builder8',
  description: 'AI-powered SaaS builder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
