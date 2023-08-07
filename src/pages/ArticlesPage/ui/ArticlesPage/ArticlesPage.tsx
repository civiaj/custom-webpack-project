import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import cls from "./ArticlePage.module.scss";
import { Message } from "shared/ui";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            <Message title={t("Articles")} />
        </div>
    );
};

export default ArticlesPage;
