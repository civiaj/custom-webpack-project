import { classNames } from "shared/lib";
import cls from "./ArticleImageBlockComponent.module.scss";

import { memo } from "react";
import { ArticleImageBlock } from "entities/Article/model/types/article";
import { Text } from "shared/ui";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;

        return (
            <>
                <div className={classNames(cls.image, {}, [className])}>
                    <img src={block.src} alt={block.title} />
                </div>
                {block.title && <Text text={block.title} />}
            </>
        );
    }
);
