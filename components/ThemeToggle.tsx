import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="rounded px-3 py-1 bg-gray-800 text-white"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="glass">Glass</option>
    </select>
  );
}
