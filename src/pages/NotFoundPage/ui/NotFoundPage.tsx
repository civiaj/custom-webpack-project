import { classNames } from "shared/lib";
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

interface NotFoundPageProps {
    className?: string;
}
export function NotFoundPage({ className }: NotFoundPageProps) {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            <h2>🙈 {t("not found error page")}</h2>
        </Page>
    );
}
