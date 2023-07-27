import { classNames } from "shared/lib";
import cls from "./AppLink.module.scss";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            {...otherProps}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};
