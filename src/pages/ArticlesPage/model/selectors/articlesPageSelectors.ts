import { RootState } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article";
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
