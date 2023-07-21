import { classNames } from "shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { FC } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { MoonIcon } from "shared/assets/themeSwitchIcons/MoonIcon";
import { SunIcon } from "shared/assets/themeSwitchIcons/SunIcon";
import { AppButton } from "shared/ui/AppButton";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <AppButton onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
        </AppButton>
    );
};
