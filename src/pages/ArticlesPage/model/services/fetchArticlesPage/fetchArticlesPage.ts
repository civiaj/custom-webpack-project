import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import {
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from "../../selectors/articlesPageSelectors";

interface fetchArticlesPageProps {
    replace?: boolean;
}

export const fetchArticlesPage = createAsyncThunk<
    Article[],
    fetchArticlesPageProps,
    ThunkConfig<string>
>("articlesPageSlice/fetchArticlesPage", async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPageNumber(getState());
    const sortValue = getArticlesPageSort(getState());
    const orderValue = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());

    try {
        const response = await extra.api.get<Article[]>("articles", {
            params: {
                _expand: "user",
                _limit: limit,
                _page: page,
                _sort: sortValue,
                _order: orderValue,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
            },
        });

        if (!response.data) throw new Error();

        return response.data;
    } catch (err) {
        return rejectWithValue("Error");
    }
});
