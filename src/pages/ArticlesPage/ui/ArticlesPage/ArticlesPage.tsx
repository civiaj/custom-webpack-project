import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import { ArticleList } from "entities/Article";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { Text } from "shared/ui";
import { Page } from "widgets/Page/Page";
import {
    // getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import {
    articlesPageReducer,
    getArticles,
} from "../../model/slice/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";

const reducers: ReducerList = {
    articles: articlesPageReducer,
};

const ArticlesPage = () => {
    const { t } = useTranslation("article");

    const dispatch = useAppDispatch();
    const articles = useAppSelector(getArticles.selectAll);
    const isLoading = useAppSelector(getArticlesPageIsLoading);
    // const error = useAppSelector(getArticlesPageError);
    const view = useAppSelector(getArticlesPageView);

    const [searchParams, setSearchparams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <div className={cls.header}>
                    <Text title={t("Articles")} />
                    <ArticlesPageFilters />
                </div>
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                />
            </Page>
        </DynamicReducerLoader>
    );
};

export default ArticlesPage;
