import { classNames } from "shared/lib";
import cls from "./CommentItem.module.scss";
import { Comment } from "../../model/types/comment";
import { Avatar, AvatarTheme, Skeleton } from "shared/ui";

interface CommentItemProps {
    className?: string;
    comment: Comment;
    isLoading: boolean;
}

export const CommentItem = (props: CommentItemProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <Skeleton />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <div>
                {comment.user.avatar && (
                    <Avatar
                        theme={AvatarTheme.SIZE_S}
                        src={comment.user.avatar}
                    />
                )}
                <p>{comment.user.username}</p>
            </div>
            <p>{comment.text}</p>
        </div>
    );
};
