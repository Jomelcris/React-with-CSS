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

  // Changing a single piece of state re-styles the whole page.
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
    <div className="page" style={pageStyle}>
      <main className="card">
        <h1>Theme Switcher</h1>
        <p className="lead">
          Pick a palette below. The background, text, and accent colors of the
          whole page change right away.
        </p>

        <p className="current">
          Current theme: <strong>{theme.name}</strong>
        </p>

        <h2>Palettes</h2>
        <div className="swatches">
          {THEMES.map((t) => (
            <button
              key={t.name}
              className={"swatch" + (t.name === theme.name ? " active" : "")}
              style={{ background: t.bg, color: t.text, borderColor: t.accent }}
              onClick={() => setTheme(t)}
            >
              <span className="dot" style={{ background: t.accent }} />
              {t.name}
            </button>
          ))}
        </div>

        <h2>Light / dark</h2>
        <button className="primary" onClick={toggleLightDark}>
          {isDark ? "Switch to light" : "Switch to dark"}
        </button>

        <h2>Make your own</h2>
        <div className="pickers">
          <label>
            Background
            <input
              type="color"
              value={theme.bg}
              onChange={(e) => updateColor("bg", e.target.value)}
            />
          </label>
          <label>
            Text
            <input
              type="color"
              value={theme.text}
              onChange={(e) => updateColor("text", e.target.value)}
            />
          </label>
          <label>
            Accent
            <input
              type="color"
              value={theme.accent}
              onChange={(e) => updateColor("accent", e.target.value)}
            />
          </label>
        </div>
      </main>
    </div>
  );
}
