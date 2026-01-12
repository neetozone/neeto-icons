import { useState, useEffect } from "react";

export function useDarkMode() {
  // Initialize to light mode by default
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("neeto-ui-theme--dark");
  });

  // Sync state to DOM whenever it changes
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("neeto-ui-theme--dark");
    } else {
      html.classList.remove("neeto-ui-theme--dark");
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark((prev) => !prev);
  };

  return [isDark, toggle];
}

