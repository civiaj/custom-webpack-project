import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { Box, Text, TextAlign } from "shared/ui";
import { getArticleDetailsCommentsIsLoading } from "../../model/selectors/commentsSelectors";
import {
    ArticleDetailsCommentsReducer,
    getArticleDetailsComments,
} from "../../model/slice/articleDetailsCommentsSlice";
import { AddCommentForm } from "features/AddCommentForm";
import { useCallback } from "react";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { Page } from "widgets/Page/Page";

const reducers: ReducerList = {
    articleDetailsComments: ArticleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation("article");

    const { id: articleId } = useParams<{ id: string }>();
    const comments = useAppSelector(getArticleDetailsComments.selectAll);
    const isLoading = useAppSelector(getArticleDetailsCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(articleId)));

    const onSendComment = useCallback(
        (value: string) => {
            dispatch(addCommentForArticle(value));
        },
        [dispatch]
    );

    if (!articleId) {
        return <Text text={t("Article not found")} align={TextAlign.CENTER} />;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <Box>
                    <ArticleDetails id={articleId} />
                </Box>
                <Box>
                    <AddCommentForm onSendComment={onSendComment} />
                </Box>
                <Box>
                    <CommentList isLoading={isLoading} comments={comments} />
                </Box>
            </Page>
        </DynamicReducerLoader>
    );
};

export default ArticleDetailsPage;
