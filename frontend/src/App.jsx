import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-gray-800">
        <h1 className="text-3xl font-bold text-yellow-400">ZamLyrics</h1>
      </header>

      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Zambia's Genius 🎤</h2>
        <input
          type="text"
          placeholder="Search for lyrics or songs..."
          className="w-full p-3 rounded bg-gray-700 text-white"
        />
      </main>
    </div>
  );
}

export default App;
