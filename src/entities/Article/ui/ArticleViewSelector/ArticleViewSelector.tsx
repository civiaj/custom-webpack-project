import { ListIcon } from "shared/assets/icons/ListIcon";
import { TileIcon } from "shared/assets/icons/TileIcons";
import { classNames } from "shared/lib";
import { AppButton, AppButtonTheme } from "shared/ui";
import { ArticleView } from "../../model/types/article";
import cls from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewItems = [
    {
        view: ArticleView.TILE,
        Icon: TileIcon,
    },
    {
        view: ArticleView.LIST,
        Icon: ListIcon,
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;

    const clickHandler = (newView: ArticleView) => () => {
        if (newView !== view) onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewItems.map((viewItem) => (
                <AppButton
                    className={classNames(cls.btn, {
                        [cls.active]: view === viewItem.view,
                    })}
                    key={viewItem.view}
                    theme={AppButtonTheme.ICON}
                    onClick={clickHandler(viewItem.view)}
                >
                    {<viewItem.Icon />}
                </AppButton>
            ))}
        </div>
    );
};
