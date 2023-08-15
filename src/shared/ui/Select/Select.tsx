import { classNames } from "shared/lib";
import cls from "./Select.module.scss";
import { ChangeEventHandler, useMemo } from "react";

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    id?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readOnly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
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
};
