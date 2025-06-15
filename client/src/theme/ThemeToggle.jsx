import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved === "dark" || (!saved && prefers);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="group relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
      aria-label="Toggle Theme"
    >
      
      <Sun
        className={`w-5 h-5 text-yellow-500 transition-transform duration-300 ${isDark ? "scale-0" : "scale-100"}`}
      />
      <Moon
        className={`w-5 h-5 text-gray-100 absolute top-2 left-2 transition-transform duration-300 ${isDark ? "scale-100" : "scale-0"}`}
      />
    </button>
  );
}
