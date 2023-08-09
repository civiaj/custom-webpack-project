import { classNames } from "shared/lib";
import cls from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { Message, MessageAlign } from "shared/ui";
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
                <Message
                    text={t("Комментарии отсутствуют")}
                    align={MessageAlign.CENTER}
                />
            )}
        </div>
    );
};
