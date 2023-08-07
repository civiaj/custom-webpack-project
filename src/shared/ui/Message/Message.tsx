import { classNames } from "shared/lib/";
import cls from "./Message.module.scss";

export enum MessageTheme {
    ERROR = "error",
    PRIMARY = "primary",
}

export enum MessageAlign {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

interface MessageProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: MessageTheme;
    align?: MessageAlign;
}

export function Message(props: MessageProps) {
    const {
        className,
        title,
        text,
        theme = MessageTheme.PRIMARY,
        align = MessageAlign.LEFT,
    } = props;
    return (
        <div
            className={classNames("", {}, [className, cls[theme], cls[align]])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}
