import { RootState } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article";

export const getArticlesPageIsLoading = (state: RootState) =>
    state.articles?.isLoading || false;

export const getArticlesPageError = (state: RootState) => state.articles?.error;

export const getArticlesPageView = (state: RootState) =>
    state.articles?.view || ArticleView.LIST;
