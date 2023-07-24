import { classNames } from "shared/lib";
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
    className?: string;
}
export function NotFoundPage({ className }: NotFoundPageProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h2>🙈 {t("No Page")}</h2>
        </div>
    );
}
