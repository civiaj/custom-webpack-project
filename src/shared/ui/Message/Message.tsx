import { classNames } from "shared/lib/";
import cls from "./Message.module.scss";

export enum MessageTheme {
    ERROR = "error",
    PRIMARY = "primary",
}

interface MessageProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: MessageTheme;
}

export function Message(props: MessageProps) {
    const { className, title, text, theme = MessageTheme.PRIMARY } = props;
    return (
        <div className={classNames("", {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}
