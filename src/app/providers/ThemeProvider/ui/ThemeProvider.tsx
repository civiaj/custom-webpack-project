import { ReactNode, useEffect, useMemo } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "../lib/ThemeContext";
import { useLocalStorage } from "shared/lib";

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const initialState =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
            ? Theme.DARK
            : Theme.LIGHT;

    const { value: theme, setValue: setTheme } = useLocalStorage<Theme>(
        initialState,
        LOCAL_STORAGE_THEME_KEY
    );

    const providerProps = useMemo(
        () => ({ theme, setTheme }),
        [theme, setTheme]
    );

    useEffect(() => {
        if (theme === Theme.LIGHT) {
            document.documentElement.classList.add(Theme.LIGHT);
            document.documentElement.classList.remove(Theme.DARK);
        } else if (theme === Theme.DARK) {
            document.documentElement.classList.add(Theme.DARK);
            document.documentElement.classList.remove(Theme.LIGHT);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={providerProps}>
            {children}
        </ThemeContext.Provider>
    );
}
