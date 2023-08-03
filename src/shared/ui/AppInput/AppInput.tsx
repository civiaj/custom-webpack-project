import { classNames } from "shared/lib";
import cls from "./AppInput.module.scss";
import {
    ChangeEventHandler,
    InputHTMLAttributes,
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
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        type = "text",
        autoFocus,
        onChange,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) inputRef?.current?.focus();
    }, [autoFocus]);

    return (
        <input
            value={value}
            onChange={handleChange}
            ref={inputRef}
            type={type}
            className={classNames(cls.AppInput, {}, [className])}
            {...otherProps}
        ></input>
    );
});
