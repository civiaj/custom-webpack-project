import {
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from "entities/Article";
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from "../../model/slice/articlesPageSlice";
import { useTranslation } from "react-i18next";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { Text } from "shared/ui";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import { useInitialEffect } from "shared/lib";
import { fetchArticlesPage } from "../../model/services/fetchArticlesPage";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import cls from "./ArticlesPage.module.scss";

const reducers: ReducerList = {
    articles: articlesPageReducer,
};

const ArticlesPage = () => {
    const { t } = useTranslation("article");

    const dispatch = useAppDispatch();

    const articles = useAppSelector(getArticles.selectAll);
    const isLoading = useAppSelector(getArticlesPageIsLoading);
    const error = useAppSelector(getArticlesPageError);
    const view = useAppSelector(getArticlesPageView);

    const ovViewClick = (newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    };

    useInitialEffect(() => {
        dispatch(fetchArticlesPage());
        dispatch(articlesPageActions.initState());
    });

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={cls.header}>
                <Text title={t("Articles")} />
                <ArticleViewSelector onViewClick={ovViewClick} view={view} />
            </div>
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
            />
        </DynamicReducerLoader>
    );
};

export default ArticlesPage;
