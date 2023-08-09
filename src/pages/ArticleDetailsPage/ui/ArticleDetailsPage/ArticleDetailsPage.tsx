import { useTranslation } from "react-i18next";

import { Message } from "shared/ui";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";

const ArticleDetailsPage = () => {
    const { t } = useTranslation("article");
    const { id: articleId } = useParams<{ id: string }>();

    if (!articleId) {
        return <Message text={t("Article not found")} />;
    }

    return (
        <>
            <ArticleDetails id={articleId} />
        </>
    );
};

export default ArticleDetailsPage;
