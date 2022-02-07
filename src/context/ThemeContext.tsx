import { createContext, useContext, useEffect, useState } from "react";

const themeColours = {
  light: {
    color: "#ffffff",
    backgroundColor: "#fefefe",
  },

  dark: {
    color: "#fff",
    backgroundColor: "#121212",
  },
};

type ThemeName = "light" | "dark";

type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType>(undefined!);

type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [themeName, setThemeName] = useState<ThemeName>("dark");

  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);

  const setTheme = (name: ThemeName) => {
    document.body.style.setProperty("--color", themeColours[name].color);
    document.body.style.setProperty(
      "--background-color",
      themeColours[name].backgroundColor
    );
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
