import { useCallback } from "react";
import { MAX_LIST_ARTICLES, MAX_TILE_ARTICLES } from "shared/const/articles";
import { classNames } from "shared/lib";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

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

    const getSkeleton = () =>
        Array(view === ArticleView.TILE ? MAX_TILE_ARTICLES : MAX_LIST_ARTICLES)
            .fill(0)
            .map((_, index) => (
                <ArticleListItemSkeleton key={index} view={view} />
            ));

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
            {isLoading && getSkeleton()}
        </div>
    );
};
