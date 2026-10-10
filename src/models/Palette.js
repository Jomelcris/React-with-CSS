import Theme from "./Theme.js";

export default class Palette {
  constructor(name, themes) {
    this.name = name;
    this.themes = themes;
  }
}

export const defaultPalette = new Palette("Default palette", [
  new Theme("Light", "#ffffff", "#1a1a1a", "#2563eb"),
  new Theme("Dark", "#16181d", "#eceff4", "#7aa2f7"),
  new Theme("Ocean", "#0b3d4f", "#e6f6fa", "#4fd1c5"),
  new Theme("Sunset", "#fff1e6", "#4a1d0f", "#e8590c"),
  new Theme("Forest", "#1f3a2b", "#ecf5ea", "#9be37a"),
  new Theme("Lavender", "#f1ecff", "#2d2250", "#7c4dff"),
]);