import { classNames } from "shared/lib";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui";

interface PageErrorProps {
    className?: string;
}

export function PageError({ className }: PageErrorProps) {
    const { t } = useTranslation();
    const handleRedirect = () => window.location.replace("/");
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h2>{t("app-error")}</h2>
            <AppButton theme={AppButtonTheme.REGULAR} onClick={handleRedirect}>
                {t("on-main")}
            </AppButton>
        </div>
    );
}
