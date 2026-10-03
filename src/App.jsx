import { useState } from "react";

// Each theme is just three colors: background, text, and accent.
const THEMES = [
  { name: "Light", bg: "#ffffff", text: "#1a1a1a", accent: "#2563eb" },
  { name: "Dark", bg: "#16181d", text: "#eceff4", accent: "#7aa2f7" },
  { name: "Ocean", bg: "#0b3d4f", text: "#e6f6fa", accent: "#4fd1c5" },
  { name: "Sunset", bg: "#fff1e6", text: "#4a1d0f", accent: "#e8590c" },
  { name: "Forest", bg: "#1f3a2b", text: "#ecf5ea", accent: "#9be37a" },
  { name: "Lavender", bg: "#f1ecff", text: "#2d2250", accent: "#7c4dff" },
];

export default function App() {
  const [theme, setTheme] = useState(THEMES[0]);

  // The theme colors become CSS variables that Tailwind classes read,
  // e.g. bg-[var(--bg)].
  const pageStyle = {
    "--bg": theme.bg,
    "--text": theme.text,
    "--accent": theme.accent,
  };

  const isDark = theme.name === "Dark";

  function toggleLightDark() {
    setTheme(isDark ? THEMES[0] : THEMES[1]);
  }

  function updateColor(key, value) {
    setTheme({ ...theme, name: "Custom", [key]: value });
  }

  return (
    <div
      style={pageStyle}
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
    >
      <div className="flex justify-center p-6">
        <main className="w-full max-w-xl rounded-2xl border-2 border-[var(--accent)] p-8">
          <h1 className="mb-2 text-3xl font-bold text-[var(--accent)]">
            Theme Switcher
          </h1>
          <p className="mb-3 leading-relaxed">
            Pick a palette below. The background, text, and accent colors of the
            whole page change right away.
          </p>
          <p>
            Current theme: <strong>{theme.name}</strong>
          </p>

          <h2 className="mt-7 mb-2.5 font-semibold">Palettes</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5">
            {THEMES.map((t) => (
              <button
                key={t.name}
                onClick={() => setTheme(t)}
                style={{
                  background: t.bg,
                  color: t.text,
                  borderColor: t.accent,
                }}
                className={
                  "flex cursor-pointer items-center gap-2 rounded-xl border-2 px-3 py-2.5 " +
                  (t.name === theme.name
                    ? "outline-3 outline-offset-2 outline-[var(--accent)]"
                    : "")
                }
              >
                <span
                  className="h-3.5 w-3.5 rounded-full"
                  style={{ background: t.accent }}
                />
                {t.name}
              </button>
            ))}
          </div>

          <h2 className="mt-7 mb-2.5 font-semibold">Light / dark</h2>
          <button
            onClick={toggleLightDark}
            className="cursor-pointer rounded-xl bg-[var(--accent)] px-5 py-2.5 font-semibold text-[var(--bg)] hover:opacity-85"
          >
            {isDark ? "Switch to light" : "Switch to dark"}
          </button>

          <h2 className="mt-7 mb-2.5 font-semibold">Make your own</h2>
          <div className="flex flex-wrap gap-5">
            {[
              ["bg", "Background"],
              ["text", "Text"],
              ["accent", "Accent"],
            ].map(([key, label]) => (
              <label key={key} className="flex flex-col gap-1.5 text-sm">
                {label}
                <input
                  type="color"
                  value={theme[key]}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="h-9 w-16 cursor-pointer"
                />
              </label>
            ))}
          </div>

          <h2 className="mt-7 mb-2.5 font-semibold">Current colors</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <p>
              Background: <strong>{theme.bg}</strong>
            </p>
            <p>
              Text: <strong>{theme.text}</strong>
            </p>
            <p>
              Accent: <strong>{theme.accent}</strong>
            </p>
          </div>

          <h2 className="mt-7 mb-2.5 font-semibold">Reset</h2>
          <button
            onClick={() => setTheme(THEMES[0])}
            className="cursor-pointer rounded-xl bg-red-500 px-5 py-2.5 font-semibold text-white hover:bg-red-600"
          >
            Reset to default
          </button>
        </main>
      </div>
    </div>
  );
}
