import { RootState } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { ARTICLES_LIMIT } from "shared/const/articles";

export const getArticlesPageIsLoading = (state: RootState) =>
    state.articles?.isLoading || false;

export const getArticlesPageError = (state: RootState) => state.articles?.error;

export const getArticlesPageView = (state: RootState) =>
    state.articles?.view || ArticleView.LIST;

export const getArticlesPageNumber = (state: RootState) =>
    state.articles?.page || 1;

export const getArticlesPageLimit = (state: RootState) =>
    state.articles?.limit || ARTICLES_LIMIT;

export const getArticlesPageHasMore = (state: RootState) =>
    state.articles?.hasMore;

export const getArticlesPageInited = (state: RootState) =>
    state.articles?._inited;

export const getArticlesPageOrder = (state: RootState) =>
    state.articles?.order || "asc";

export const getArticlesPageSort = (state: RootState) =>
    state.articles?.sort || ArticleSortField.CREATED;

export const getArticlesPageSearch = (state: RootState) =>
    state.articles?.search ?? "";

export const getArticlesPageType = (state: RootState) =>
    state.articles?.type ?? ArticleType.ALL;
