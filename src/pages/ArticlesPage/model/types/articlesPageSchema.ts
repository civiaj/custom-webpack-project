import { EntityState } from "@reduxjs/toolkit";
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
    // articles
    isLoading?: boolean;
    error?: string;
    // view
    view: ArticleView;
    // pagiantion
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    // initialization
    _inited?: boolean;
}

export type SortOrder = "asc" | "desc";

export interface ArticleSearchParams {
    order: SortOrder;
    search: string;
    sort: ArticleSortField;
    type: ArticleType;
}

export type ArticleSearchParamsKeys = keyof ArticleSearchParams;
