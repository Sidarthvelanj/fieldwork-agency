"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("fieldwork-theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line dark:border-line-dark bg-paper/90 dark:bg-paper-dark/90 backdrop-blur">
      <div className="wrap flex items-center justify-between h-16">
        <a href="#top" className="font-display italic text-lg tracking-tight">
          Fieldwork
        </a>

        <nav className="hidden md:flex items-center gap-8 label">
          <a href="#services" className="hover:text-clay transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-clay transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-clay transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            aria-pressed={isDark}
            className="label border border-line dark:border-line-dark rounded-full w-9 h-9 flex items-center justify-center hover:border-clay hover:text-clay transition-colors"
          >
            {isDark ? "☀" : "☾"}
          </button>
          <a
           href="#contact"
  className="hidden sm:inline-flex label bg-clay text-paper px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
>
  Start a Project
</a>
        </div>
      </div>
    </header>
  );
}
