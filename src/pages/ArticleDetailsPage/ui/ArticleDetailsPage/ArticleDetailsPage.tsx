import { useTranslation } from "react-i18next";

import { Box, Message } from "shared/ui";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import {
    ArticleDetailsCommentsSliceReducer,
    getArticleDetailsComments,
} from "../../model/slice/ArticleDetailsCommentsSlice";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from "../../model/selectors/commentsSelectors";
import { useInitialEffect } from "shared/lib";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId";

const reducers: ReducerList = {
    articleDetailsComments: ArticleDetailsCommentsSliceReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation("article");
    const { id: articleId } = useParams<{ id: string }>();
    const comments = useAppSelector(getArticleDetailsComments.selectAll);
    const isLoading = useAppSelector(getArticleDetailsCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(articleId)));

    if (!articleId) {
        return <Message text={t("Article not found")} />;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Box>
                <ArticleDetails id={articleId} />
            </Box>
            <Box>
                <CommentList isLoading={isLoading} comments={comments} />
            </Box>
        </DynamicReducerLoader>
    );
};

export default ArticleDetailsPage;
