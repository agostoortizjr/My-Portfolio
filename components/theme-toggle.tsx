"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", nextDark);
    setDark(nextDark);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 bg-white text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-secondary/40 hover:text-secondary dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-accent"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
