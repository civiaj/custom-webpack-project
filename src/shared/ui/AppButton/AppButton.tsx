import { classNames } from "shared/lib";
import cls from "./AppButton.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum AppButtonTheme {
    REGULAR = "regular",
    ICON = "svg-with-span",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props;
    return (
        <button
            {...otherProps}
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};
