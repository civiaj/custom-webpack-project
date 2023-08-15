import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "app/providers/StoreProvider";
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from "entities/Article";
import { ArticlesPageSchema, SortOrder } from "../types/articlesPageSchema";
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
        _inited: false,
        limit: 0,
        sort: ArticleSortField.CREATED,
        search: "",
        order: "asc",
        type: ArticleType.ALL,
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
            state._inited = true;
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },

        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },

        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },

        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesPage.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesPageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesPage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesPageAdapter.setAll(state, action.payload);
                } else {
                    articlesPageAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesPage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
    articlesPageSlice;
