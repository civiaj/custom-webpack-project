import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import {
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from "entities/Article";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
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
        dispatch(initArticlesPage());
    });

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
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
