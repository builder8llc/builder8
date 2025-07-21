// app/layout.tsx

export const metadata = {
  title: "Builder8",
  description: "Build full SaaS apps from prompts — instantly.",
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
