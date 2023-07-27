import { AppButton } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export function GenerateErrorButton() {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <AppButton onClick={() => setError(true)}>
            {t("generate-error")}
        </AppButton>
    );
}
