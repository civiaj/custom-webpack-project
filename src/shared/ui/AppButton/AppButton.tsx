import { classNames } from "shared/lib";
import cls from "./AppButton.module.scss";
import { ButtonHTMLAttributes, memo } from "react";
import { ButtonSpinner } from "../ButtonSpinner/ButtonSpinner";

export enum AppButtonTheme {
    REGULAR = "regular",
    ICON = "svg-with-span",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
}

export const AppButton = memo((props: AppButtonProps) => {
    const { className, theme, children, disabled = false, ...otherProps } = props;
    return (
        <button
            {...otherProps}
            disabled={disabled}
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
        >
            {!disabled ? children : <ButtonSpinner />}
        </button>
    );
});
