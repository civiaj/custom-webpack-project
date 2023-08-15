import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib";
import cls from "./Box.module.scss";

export enum BoxTheme {
    BOX = "box",
    TAB = "tab",
    TAB_ACTIVE = "tab--active",
}

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: BoxTheme;
}

export const Box = (props: BoxProps) => {
    const { className, children, theme = BoxTheme.BOX, ...otherProps } = props;

    return (
        <div
            {...otherProps}
            className={classNames(cls.Box, {}, [className, cls[theme]])}
        >
            {children}
        </div>
    );
};
