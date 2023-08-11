import { classNames } from "shared/lib";
import cls from "./CommentItem.module.scss";
import { Comment } from "../../model/types/comment";
import { AppLink, Avatar, AvatarTheme, Skeleton } from "shared/ui";
import { routePath } from "shared/config/routeConfig/routeConfig";

interface CommentItemProps {
    className?: string;
    comment?: Comment;
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

    if (!comment) return null;

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <AppLink
                className={cls.link}
                to={`${routePath.profile}${comment.user.id}`}
            >
                {comment.user.avatar && (
                    <Avatar
                        theme={AvatarTheme.SIZE_S}
                        src={comment.user.avatar}
                        alt={comment.user.username}
                    />
                )}
                <p>{comment.user.username}</p>
            </AppLink>
            <p>{comment.text}</p>
        </div>
    );
};
