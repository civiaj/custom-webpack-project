import { classNames } from "shared/lib";
import cls from "./ArticleList.module.scss";
import { useTranslation } from "react-i18next";
import { Article, ArticleView } from "../../model/types/article";
import { useCallback } from "react";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading = false,
        view = ArticleView.TILE,
    } = props;

    const { t } = useTranslation();

    const renderArticle = useCallback(
        (article: Article) => {
            return (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={view}
                />
            );
        },
        [view]
    );

    return (
        <div className={classNames("", {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
};
