import { ReactNode } from "react";
import { classNames } from "shared/lib";
import cls from "./Box.module.scss";

interface BoxProps {
    className?: string;
    children: ReactNode;
}

export const Box = (props: BoxProps) => {
    const { className, children } = props;
    return (
        <div className={classNames(cls.Box, {}, [className])}>{children}</div>
    );
};
