// app/layout.tsx
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
      <body>{children}</body>
    </html>
  );
}
