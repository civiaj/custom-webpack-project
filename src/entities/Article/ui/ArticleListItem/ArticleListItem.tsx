import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "shared/assets/icons/EyeIcon";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib";
import { AppButton, Box, Text } from "shared/ui";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/types/article";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import cls from "./ArticleListItem.module.scss";
import { useTranslation } from "react-i18next";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation("article");
    const navigate = useNavigate();

    const textBlock = article.blocks.find(
        (articleBlock) => articleBlock.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    const onOpenArticle = useCallback(() => {
        navigate(routePath.article_details + article.id);
    }, [article.id, navigate]);

    if (view === ArticleView.TILE) {
        return (
            <Box className={classNames(cls.tileItem, {}, [className])}>
                <ArticleImageBlockComponent
                    className={cls.img}
                    block={{
                        src: article.img,
                        id: article.id,
                        type: ArticleBlockType.IMAGE,
                    }}
                />

                <div className={cls.info}>
                    <Text
                        text={article.type.join(", ")}
                        textStyle={cls.infoText}
                    />

                    <div className={cls.view}>
                        <Text text={String(article.views)} />
                        <EyeIcon />
                    </div>
                </div>
                <Text text={article.title} textStyle={cls.boldTitle} />

                <Text text={textBlock.paragraphs[0].substring(0, 50) + "..."} />
                <AppButton onClick={onOpenArticle}>{t("Read more")}</AppButton>
            </Box>
        );
    }

    return (
        <Box className={classNames(cls.listItem, {}, [className])}>
            <Text title={article.title} />
            <ArticleImageBlockComponent
                block={{
                    src: article.img,
                    id: article.id,
                    type: ArticleBlockType.IMAGE,
                }}
            />

            <div className={cls.info}>
                <Text text={article.type.join(", ")} textStyle={cls.infoText} />

                <div className={cls.view}>
                    <Text text={String(article.views)} />
                    <EyeIcon />
                </div>
            </div>
            {textBlock && <Text text={textBlock.paragraphs[0]} />}
            <AppButton className={cls.readBtn} onClick={onOpenArticle}>
                {t("Read more")}
            </AppButton>
        </Box>
    );
};
