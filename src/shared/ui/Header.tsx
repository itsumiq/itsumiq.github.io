import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const themeElem =
    theme === 'dark' ? (
      <button onClick={() => setTheme('light')}>
        <Moon size="1.75rem" />
      </button>
    ) : (
      <button onClick={() => setTheme('dark')}>
        <Sun size="1.75rem" />
      </button>
    );

  useEffect(() => {
    const root = document.documentElement.classList;
    root.add(theme);

    return () => {
      root.remove(theme);
    };
  }, [theme]);

  return (
    <header className="flex items-center justify-between">
      <h1>TODO</h1>
      {themeElem}
    </header>
  );
};
