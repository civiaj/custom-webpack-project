import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
    // articles
    isLoading?: boolean;
    error?: string;
    // view
    view: ArticleView;
    // pagiantion
    page: number;
    limit?: number;
    hasMore: boolean;
    _inited?: boolean;
}
