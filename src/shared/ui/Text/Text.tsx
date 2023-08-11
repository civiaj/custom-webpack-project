import { classNames } from "shared/lib/";
import cls from "./Text.module.scss";

export enum TextTheme {
    ERROR = "error",
    PRIMARY = "primary",
}

export enum TextAlign {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextAlign;
    titleStyle?: string;
    textStyle?: string;
}

export function Text(props: TextProps) {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        titleStyle = undefined,
        textStyle = undefined,
    } = props;
    return (
        <div
            className={classNames("", {}, [className, cls[theme], cls[align]])}
        >
            {title && (
                <p className={[cls.title, titleStyle].join(" ")}>{title}</p>
            )}
            {text && <p className={[cls.text, textStyle].join(" ")}>{text}</p>}
        </div>
    );
}
