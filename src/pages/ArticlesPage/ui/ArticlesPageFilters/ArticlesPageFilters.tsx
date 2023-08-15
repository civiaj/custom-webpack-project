import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import {
    ArticleSortField,
    ArticleTabs,
    ArticleType,
    ArticleView,
    ArticleViewSelector,
} from "entities/Article";
import { ArticleSortSelector } from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { fetchArticlesPage } from "pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { ARTICLES_SEARCH_DEBOUNCE } from "shared/const/articles";
import { classNames } from "shared/lib";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { AppInput, Box } from "shared/ui";
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import {
    ArticleSearchParamsKeys,
    SortOrder,
} from "../../model/types/articlesPageSchema";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const view = useAppSelector(getArticlesPageView);

    const sortValue = useAppSelector(getArticlesPageSort);
    const orderValue = useAppSelector(getArticlesPageOrder);
    const search = useAppSelector(getArticlesPageSearch);
    const type = useAppSelector(getArticlesPageType);

    const [searchParams, setSearchParams] = useSearchParams();

    const fetchData = useCallback(
        (params: ArticleSearchParamsKeys, value: string) => {
            dispatch(fetchArticlesPage({ replace: true }));
            searchParams.set(params, value);
            setSearchParams(searchParams);
        },
        [dispatch, searchParams, setSearchParams]
    );

    const debouncedFetchData = useDebounce(
        (params: ArticleSearchParamsKeys, value: string) =>
            fetchData(params, value),
        ARTICLES_SEARCH_DEBOUNCE
    );

    const onChangeView = (newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
        dispatch(articlesPageActions.setPage(1));
    };

    const onChangeOrder = (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData("order", newOrder);
    };

    const onChangeSort = (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData("sort", newSort);
    };

    const onChangeSearch = (newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData("search", newSearch);
    };

    const onChangeType = (newType: ArticleType) => {
        dispatch(articlesPageActions.setType(newType));
        dispatch(articlesPageActions.setPage(1));
        fetchData("type", newType);
    };

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <ArticleViewSelector onViewClick={onChangeView} view={view} />
            <ArticleSortSelector
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}
                orderValue={orderValue}
                sortValue={sortValue}
            />
            <Box>
                <AppInput onChange={onChangeSearch} value={search} />
            </Box>
            <ArticleTabs onTabClick={onChangeType} value={type} />
        </div>
    );
};
