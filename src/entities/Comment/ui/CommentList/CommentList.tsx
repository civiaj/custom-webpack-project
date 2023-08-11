import { classNames } from "shared/lib";
import cls from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { Text, TextAlign } from "shared/ui";
import { useTranslation } from "react-i18next";
import { CommentItem } from "../CommentItem/CommentItem";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentItem
                        isLoading={isLoading}
                        key={comment.id}
                        comment={comment}
                    />
                ))
            ) : (
                <Text
                    text={t("Комментарии отсутствуют")}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
};
