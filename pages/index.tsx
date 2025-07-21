import React from 'react';
import Head from 'next/head';
import BuilderPrompt from '../components/BuilderPrompt';

export default function Home() {
  return (
    <>
      <Head>
        <title>Builder8 - Launch SaaS from a Prompt</title>
        <meta name="description" content="The smartest way to launch software from a single prompt." />
      </Head>
      <BuilderPrompt />
    </>
  );
}
