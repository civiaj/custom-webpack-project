import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";

interface FetchArticlesPageProps {
    page?: number;
}

export const fetchArticlesPage = createAsyncThunk<
    Article[],
    FetchArticlesPageProps,
    ThunkConfig<string>
>("articlesPageSlice/fetchArticlesPage", async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const { page = 1 } = args;
    const limit = getArticlesPageLimit(getState());
    try {
        const response = await extra.api.get<Article[]>("articles", {
            params: {
                _expand: "user",
                _limit: limit,
                _page: page,
            },
        });

        if (!response.data) throw new Error();

        return response.data;
    } catch (err) {
        return rejectWithValue("Error");
    }
});
