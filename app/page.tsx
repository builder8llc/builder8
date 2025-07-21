'use client';

import BuilderPrompt from '@/components/BuilderPrompt';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-6 py-24 sm:py-32 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Launch Your SaaS in Seconds
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-300">
          Describe your idea. BuilderPrompt handles the rest — planning, generating code, and deploying your live app.
        </p>

        <div className="mt-10 w-full max-w-2xl">
          <BuilderPrompt />
        </div>
      </section>
    </main>
  );
}
