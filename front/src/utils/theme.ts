import { Themes } from "~/providers/ThemeProvider";

export const getInitialTheme = (): Themes => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs as Themes;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return Themes.dark;
    }
  }

  return Themes.light;
};
