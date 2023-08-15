import { Box, Skeleton } from "shared/ui";
import { ArticleView } from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib";

interface ArticleListItemSkeletonProps {
    view: ArticleView;
    className?: string;
}

export const ArticleListItemSkeleton = ({
    view,
    className,
}: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.TILE) {
        return (
            <Box className={classNames(cls.tileItem, {}, [className])}>
                <Skeleton height={"25.8rem"} className={cls.img} />
                <div className={cls.info}>
                    <Skeleton height={"2.4rem"} width={"12rem"} />
                    <Skeleton height={"2.4rem"} width={"6rem"} />
                </div>

                <div className={cls.bottom}>
                    <div className={cls.textContainer}>
                        <Skeleton height={"4.8rem"} />
                        <Skeleton height={"9.6rem"} />
                    </div>

                    <Skeleton height={"3.2rem"} className={cls.btn} />
                </div>
            </Box>
        );
    }

    return (
        <Box className={classNames(cls.listItem, {}, [className])}>
            <Skeleton height={"3.2rem"} />
            <Skeleton height={"30rem"} />
            <div className={cls.info}>
                <Skeleton height={"2.4rem"} width={"20rem"} />
                <div className={cls.view}>
                    <Skeleton height={"2.4rem"} width={"6rem"} />
                </div>
            </div>
            <Skeleton height={"7.2rem"} />
            <Skeleton
                height={"3.2rem"}
                width={"13rem"}
                className={cls.readBtn}
            />
        </Box>
    );
};
