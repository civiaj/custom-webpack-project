import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticlesPage } from "../services/fetchArticlesPage/fetchArticlesPage";
import { LOCAL_STORAGE_VIEW_KEY } from "shared/const/localStorage";
import { MAX_LIST_ARTICLES, MAX_TILE_ARTICLES } from "shared/const/articles";

const articlesPageAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<RootState>(
    (state) => state.articles || articlesPageAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
    name: "articlesPageSlice",
    initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        entities: {},
        view: ArticleView.LIST,
        error: undefined,
        isLoading: false,
        page: 1,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, action.payload);
        },

        initState: (state) => {
            const view = localStorage.getItem(
                LOCAL_STORAGE_VIEW_KEY
            ) as ArticleView;

            state.view = view;
            state.limit =
                view === ArticleView.LIST
                    ? MAX_LIST_ARTICLES
                    : MAX_TILE_ARTICLES;
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesPage.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesPage.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articlesPageAdapter.addMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                }
            )
            .addCase(fetchArticlesPage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
    articlesPageSlice;
