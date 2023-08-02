import { classNames } from "shared/lib";
import { memo } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { MoonIcon } from "shared/assets/themeSwitchIcons/MoonIcon";
import { SunIcon } from "shared/assets/themeSwitchIcons/SunIcon";
import { AppButton, AppButtonTheme } from "shared/ui";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <AppButton
            theme={AppButtonTheme.ICON}
            onClick={toggleTheme}
            className={classNames("", {}, [className])}
        >
            {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
        </AppButton>
    );
});
