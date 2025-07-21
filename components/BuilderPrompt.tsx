import React, { useState } from 'react';

const BuilderPrompt = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      // Step 1: Send to /plan to get app structure
      const planRes = await fetch('/api/builderbot/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const planData = await planRes.json();

      // Step 2: Send plan to /generate to get ZIP
      const zipRes = await fetch('/api/builderbot/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(planData),
      });

      const blob = await zipRes.blob();
      const url = window.URL.createObjectURL(blob);

      // Trigger ZIP download
      const link = document.createElement('a');
      link.href = url;
      link.download = `${planData.appName}.zip`;
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert('Error generating app. Try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 32, textAlign: 'center' }}>
      <h1>BuilderBot</h1>
      <p>Describe the app you want to build:</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          style={{ width: '100%', maxWidth: 500, padding: 10 }}
          placeholder="e.g. A CRM to manage leads, assign tasks, and send follow-up emails"
        />
        <br />
        <button type="submit" disabled={loading} style={{ marginTop: 12 }}>
          {loading ? 'Generating...' : 'Generate App'}
        </button>
      </form>
    </div>
  );
};

export default BuilderPrompt;
