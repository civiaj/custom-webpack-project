import { classNames } from "shared/lib";
import cls from "./ArticleSortSelector.module.scss";
import { Select, SelectOption } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { ArticleSortField } from "../../model/types/article";
import { SortOrder } from "pages/ArticlesPage/model/types/articlesPageSchema";

interface ArticleSortSelectorProps {
    className?: string;
    sortValue: ArticleSortField;
    orderValue: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, orderValue, sortValue } =
        props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            { content: t("Ascending"), value: "asc" },
            { content: t("Descending"), value: "desc" },
        ],
        [t]
    );

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            { content: t("Date"), value: ArticleSortField.CREATED },
            { content: t("Title"), value: ArticleSortField.TITLE },
            { content: t("Views"), value: ArticleSortField.VIEWS },
        ],
        [t]
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                label={t("Sort by")}
                options={sortOptions}
                value={sortValue}
                onChange={onChangeSort}
            />
            <Select
                label={t("Order")}
                options={orderOptions}
                value={orderValue}
                onChange={onChangeOrder}
            />
        </div>
    );
};
