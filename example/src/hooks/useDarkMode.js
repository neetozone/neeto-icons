import { useState, useEffect } from "react";

export function useDarkMode() {
  // Initialize to light mode by default
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  // Sync state to DOM whenever it changes
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark((prev) => !prev);
  };

  return [isDark, toggle];
}

