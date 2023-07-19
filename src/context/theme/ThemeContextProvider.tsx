import { ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeContextProviderProps {
    children: ReactNode;
}

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
}
export default ThemeContextProvider;
