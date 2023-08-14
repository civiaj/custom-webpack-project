import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticlesPage } from "../fetchArticlesPage/fetchArticlesPage";

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articlesPageSlice/fetchNextArticlesPage", async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesPageHasMore(getState());
    const pageNumber = getArticlesPageNumber(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (!isLoading && hasMore) {
        dispatch(articlesPageActions.setPage(pageNumber + 1));
        dispatch(fetchArticlesPage({ page: pageNumber + 1 }));
    }
});
