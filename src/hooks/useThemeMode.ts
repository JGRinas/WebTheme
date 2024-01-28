import { useState } from "react";

type ThemesType = "default" | "dark";

const useThemeMode = () => {
  const [theme, setTheme] = useState<ThemesType>("default");

  const toggleTheme = () => {
    if (theme === "default") {
      setTheme("dark");
      return;
    }
    setTheme("default");
  };

  return { theme, toggleTheme };
};

export default useThemeMode;
