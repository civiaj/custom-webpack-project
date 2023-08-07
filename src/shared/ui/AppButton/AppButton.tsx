import { classNames } from "shared/lib";
import cls from "./AppButton.module.scss";
import { ButtonHTMLAttributes, memo } from "react";
import { ButtonSpinner } from "../ButtonSpinner/ButtonSpinner";

export enum AppButtonTheme {
    REGULAR = "regular",
    CONFIRM = "confirm",
    ICON = "svg-with-span",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    isLoading?: boolean;
}

export const AppButton = memo((props: AppButtonProps) => {
    const {
        className,
        theme = AppButtonTheme.REGULAR,
        children,
        disabled = false,
        isLoading = false,
        ...otherProps
    } = props;
    return (
        <button
            {...otherProps}
            disabled={disabled}
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
        >
            {!isLoading ? children : <ButtonSpinner />}
        </button>
    );
});
