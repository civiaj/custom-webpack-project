import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticlesPage } from "../fetchArticlesPage/fetchArticlesPage";

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articlesPageSlice/initArticlesPage", async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesPage({ page: 1 }));
    }
});
