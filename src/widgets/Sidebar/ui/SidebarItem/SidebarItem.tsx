import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { AppLink, AppLinkTheme } from "shared/ui";
import { SidebarItemType } from "widgets/Sidebar";
import cls from "./SidebarItem.module.scss";
import { memo } from "react";
import { useAppSelector } from "app/providers/StoreProvider";
import { getUserAuthData } from "entities/User";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const auth = useAppSelector(getUserAuthData);

    if (item.authOnly && !auth) return;

    return (
        <li
            className={classNames(cls.SidebarItem, {
                [cls.collapsed]: collapsed,
            })}
        >
            <AppLink theme={AppLinkTheme.PRIMARY} to={item.path}>
                {<item.Icon />}
                <span className={cls.linktext}>{t(item.text)}</span>
            </AppLink>
        </li>
    );
});
