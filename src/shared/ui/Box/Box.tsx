import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib";
import cls from "./Box.module.scss";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Box = (props: BoxProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div {...otherProps} className={classNames(cls.Box, {}, [className])}>
            {children}
        </div>
    );
};
