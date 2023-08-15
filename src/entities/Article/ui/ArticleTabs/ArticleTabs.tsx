import { memo, useCallback, useMemo } from "react";
import { ArticleType } from "../../model/types/article";
import { TabItem, Tabs } from "shared/ui";
import { useTranslation } from "react-i18next";

interface ArticleTabsProps {
    value: ArticleType;
    onTabClick: (newTab: ArticleType) => void;
}

export const ArticleTabs = memo((props: ArticleTabsProps) => {
    const { t } = useTranslation();
    const { onTabClick, value } = props;

    const tabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t("All"),
            },
            {
                value: ArticleType.IT,
                content: t("IT"),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t("Economics"),
            },
            {
                value: ArticleType.SCIENCE,
                content: t("Science"),
            },
        ],
        [t]
    );

    const onChangeType = useCallback(
        (newType: TabItem) => onTabClick(newType.value as ArticleType),
        [onTabClick]
    );

    return <Tabs onTabClick={onChangeType} tabs={tabs} value={value} />;
});
