import { classNames } from "shared/lib";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
    className?: string;
}

export function PageError({ className }: PageErrorProps) {
    const { t } = useTranslation();
    const handleRedirect = () => window.location.replace("/");
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h2>{t("app-error")}</h2>
            <button onClick={handleRedirect}>{t("on-main")}</button>
        </div>
    );
}
