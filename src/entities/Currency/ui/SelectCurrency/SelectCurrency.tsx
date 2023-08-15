import { memo, useCallback } from "react";
import { Select, SelectOption } from "shared/ui";
import { useTranslation } from "react-i18next";
import { Currency } from "../../model/types/currency";

const currencyOptions: SelectOption<Currency>[] = [
    { content: Currency.RUB, value: Currency.RUB },
    { content: Currency.EUR, value: Currency.EUR },
    { content: Currency.USD, value: Currency.USD },
];

interface SelectCurrencyProps {
    value?: string;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

export const SelectCurrency = memo((props: SelectCurrencyProps) => {
    const { onChange, value, readOnly } = props;
    const { t } = useTranslation();

    const handleChangeCurrency = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );

    return (
        <Select
            readOnly={readOnly}
            onChange={handleChangeCurrency}
            value={value}
            label={t("Specify currency")}
            options={currencyOptions}
        />
    );
});
