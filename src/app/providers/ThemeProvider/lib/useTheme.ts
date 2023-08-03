import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
    const { setTheme, theme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
    };
    return { theme: theme || Theme.LIGHT, toggleTheme };
}
