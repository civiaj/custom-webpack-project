import { RootState } from "app/providers/StoreProvider";

export const getArticleDetailsCommentsIsLoading = (state: RootState) =>
    state.articleDetailsComments?.isLoading || false;

export const getArticleDetailsCommentsError = (state: RootState) =>
    state.articleDetailsComments?.error;
