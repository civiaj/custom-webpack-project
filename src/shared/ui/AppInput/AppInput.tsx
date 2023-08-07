import { classNames } from "shared/lib";
import cls from "./AppInput.module.scss";
import {
    ChangeEventHandler,
    InputHTMLAttributes,
    KeyboardEventHandler,
    memo,
    useEffect,
    useRef,
} from "react";

type InputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface AppInputProps extends InputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        type = "text",
        autoFocus,
        onChange,
        readOnly,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange?.(e.target.value);
    };

    const handleNumbers: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (type !== "number") return;
        if (e.key === "e") e.preventDefault();
    };

    useEffect(() => {
        if (autoFocus) inputRef?.current?.focus();
    }, [autoFocus]);

    return (
        <>
            <input
                disabled={readOnly}
                value={value}
                onKeyDown={handleNumbers}
                onChange={handleChange}
                ref={inputRef}
                type={type}
                className={classNames(
                    cls.AppInput,
                    { [cls.readonly]: readOnly },
                    [className]
                )}
                {...otherProps}
            />
        </>
    );
});
