import { classNames } from "shared/lib";
import cls from "./Select.module.scss";
import { ChangeEventHandler, memo, useMemo } from "react";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    id?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const { className, label, id, value, onChange, options, readOnly } = props;

    const optionList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    key={opt.value}
                    className={cls.option}
                    value={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options]
    );

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <label htmlFor={id}>{label}</label>}
            <select
                className={classNames(cls.Select, { [cls.readonly]: readOnly })}
                disabled={readOnly}
                id={id}
                value={value}
                onChange={handleChange}
            >
                {optionList}
            </select>
        </div>
    );
});
