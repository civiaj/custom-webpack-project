import { classNames } from "shared/lib";
import cls from "./Avatar.module.scss";
import { Mods } from "shared/lib/classNames/classNames";

export enum AvatarTheme {
    SIZE_L = "large",
    SIZE_M = "medium",
    SIZE_S = "small",
}

interface AvatarProps {
    className?: string;
    src: string | undefined;
    alt?: string | undefined;
    theme?: AvatarTheme;
}

export const Avatar = (props: AvatarProps) => {
    const { className, theme = AvatarTheme.SIZE_L, src, alt } = props;

    const mods: Mods = {};

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className, cls[theme]])}
        />
    );
};
