import { createContext, useContext, useEffect, useState } from "react";
import { getInitialTheme } from "~/utils/theme";

// types

export enum Themes {
  dark = "dark",
  light = "light",
}

type ThemeContextProps = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};

// context

export const ThemeContext = createContext<ThemeContextProps>({} as any);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};

// provider

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === Themes.dark;

    root.classList.remove(
      isDark ? Themes.light.toString() : Themes.dark.toString()
    );
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
