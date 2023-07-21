import { classNames } from "shared/lib/classNames";
import cls from "./AppButton.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum AppButtonTheme {
    CLEAR = "clear",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const { className, theme = AppButtonTheme.CLEAR, children, ...otherProps } = props;
    return (
        <button {...otherProps} className={classNames(cls.AppButton, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};
