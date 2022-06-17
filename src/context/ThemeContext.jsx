import React from "react";

export const ThemeContext = React.createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("dark"); // "light", "dark"

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
