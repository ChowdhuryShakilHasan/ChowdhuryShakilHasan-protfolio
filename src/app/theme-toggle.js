"use client";

const STORAGE_KEY = "shakil-portfolio-theme";

export default function ThemeToggle() {
  function toggleTheme() {
    const activeTheme = document.documentElement.dataset.theme || "dark";
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Keep the selected theme for this visit even if storage is unavailable.
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      title="Toggle dark and light mode"
    >
      <span className="theme-icon theme-dark-icon" aria-hidden="true">☼</span>
      <span className="theme-icon theme-light-icon" aria-hidden="true">☾</span>
      <span className="theme-label">Light</span>
    </button>
  );
}
