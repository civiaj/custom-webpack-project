import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticlesPage } from "../fetchArticlesPage/fetchArticlesPage";
import { SortOrder } from "../../types/articlesPageSchema";
import { ArticleSortField, ArticleType } from "entities/Article";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("articlesPageSlice/initArticlesPage", async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
        const orderValue = searchParams.get("order") as SortOrder;
        const sortValue = searchParams.get("sort") as ArticleSortField;
        const searchValue = searchParams.get("search");
        const type = searchParams.get("type") as ArticleType;

        if (orderValue) dispatch(articlesPageActions.setOrder(orderValue));
        if (sortValue) dispatch(articlesPageActions.setSort(sortValue));
        if (searchValue) dispatch(articlesPageActions.setSearch(searchValue));
        if (type) dispatch(articlesPageActions.setType(type));

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesPage({}));
    }
});
