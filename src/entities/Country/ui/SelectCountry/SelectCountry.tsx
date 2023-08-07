import { memo, useCallback } from "react";
import { Select, SelectOption } from "shared/ui";
import { useTranslation } from "react-i18next";
import { Country } from "../../model/types/country";

const countryOptions: SelectOption[] = [
    { content: Country.Armenia, value: Country.Armenia },
    { content: Country.Belarus, value: Country.Belarus },
    { content: Country.Kazakhstan, value: Country.Kazakhstan },
    { content: Country.Russia, value: Country.Russia },
    { content: Country.Ukraine, value: Country.Ukraine },
];

interface SelectCountryProps {
    value?: string;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

export const SelectCountry = memo((props: SelectCountryProps) => {
    const { onChange, value, readOnly } = props;
    const { t } = useTranslation();

    const handleChangeCountry = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );

    return (
        <Select
            readOnly={readOnly}
            onChange={handleChangeCountry}
            value={value}
            label={t("Specify country")}
            options={countryOptions}
        />
    );
});
