import { classNames } from "shared/lib";
import cls from "./ArticleViewSelector.module.scss";
import { useTranslation } from "react-i18next";
import { ArticleView } from "../../model/types/article";
import { AppButton, AppButtonTheme, Text } from "shared/ui";
import { TileIcon } from "shared/assets/icons/TileIcons";
import { ListIcon } from "shared/assets/icons/ListIcon";

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
    const { t } = useTranslation();

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
