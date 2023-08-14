import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import {
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from "entities/Article";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { Page, Text } from "shared/ui";
import {
    // getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesPage } from "../../model/services/fetchArticlesPage/fetchArticlesPage";
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from "../../model/slice/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";

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

    const ovViewClick = (newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    };

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesPage({ page: 1 }));
    });

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart}>
                <div className={cls.header}>
                    <Text title={t("Articles")} />
                    <ArticleViewSelector
                        onViewClick={ovViewClick}
                        view={view}
                    />
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
