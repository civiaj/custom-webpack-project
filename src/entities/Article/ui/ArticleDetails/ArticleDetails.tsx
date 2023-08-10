import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { CalendarIcon } from "shared/assets/icons/CalendarIcon";
import { EyeIcon } from "shared/assets/icons/EyeIcon";
import { classNames, useInitialEffect } from "shared/lib";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { Message, MessageAlign, MessageTheme, Skeleton } from "shared/ui";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/getArticleDetails/getArticleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleSlice";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(getArticleDetailsIsLoading);
    const error = useAppSelector(getArticleDetailsError);
    const article = useAppSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE: {
                return (
                    <ArticleCodeBlockComponent key={block.id} block={block} />
                );
            }
            case ArticleBlockType.IMAGE: {
                return (
                    <ArticleImageBlockComponent key={block.id} block={block} />
                );
            }
            case ArticleBlockType.TEXT: {
                return (
                    <ArticleTextBlockComponent key={block.id} block={block} />
                );
            }
            default: {
                return null;
            }
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton height={"3.2rem"} />
                <Skeleton height={"20rem"} />
                <Skeleton height={"7rem"} />
                <Skeleton height={"7rem"} />
                <Skeleton height={"100rem"} />
            </>
        );
    } else if (error) {
        content = (
            <Message
                theme={MessageTheme.ERROR}
                align={MessageAlign.CENTER}
                text={t("An error occurred while loading the article")}
            />
        );
    } else {
        content = (
            <>
                <Message title={article?.title} />
                <div className={cls.articleInfo}>
                    <div className={cls.articleInfoItem}>
                        <EyeIcon />
                        <span>{article?.views}</span>
                    </div>
                    <div className={cls.articleInfoItem}>
                        <CalendarIcon />
                        <span>{article?.createdAt}</span>
                    </div>
                </div>
                <ArticleImageBlockComponent
                    block={{
                        src: article?.img as string,
                        type: ArticleBlockType.IMAGE,
                        id: article?.id as string,
                    }}
                />
                {article?.blocks?.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicReducerLoader>
    );
});
