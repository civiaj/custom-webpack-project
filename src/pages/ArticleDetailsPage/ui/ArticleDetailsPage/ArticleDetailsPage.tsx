import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import cls from "./ArticleDetailsPage.module.scss";
import { Message } from "shared/ui";

interface ArticlesPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <Message title={t("Article details")} />
        </div>
    );
};

export default ArticleDetailsPage;
