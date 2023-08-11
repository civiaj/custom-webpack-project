import { useCallback } from "react";
import { classNames } from "shared/lib";
import cls from "./Code.module.scss";
import { AppButton, AppButtonTheme } from "shared/ui";
import { CopyCodeIcon } from "shared/assets/icons/CopyCodeIcon";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <code className={classNames(cls.Code, {}, [className])}>
            <pre>{text}</pre>
            <AppButton
                className={cls.copy}
                onClick={onCopy}
                theme={AppButtonTheme.ICON}
            >
                <CopyCodeIcon />
            </AppButton>
        </code>
    );
};
