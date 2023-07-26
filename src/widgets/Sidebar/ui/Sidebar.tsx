import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppButton, AppButtonTheme } from "shared/ui/AppButton";
import {
    ToggleLeft,
    ToggleRight,
} from "shared/assets/SidebarIcons/ToggleSidebar";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { HomeIcon } from "shared/assets/SidebarIcons/HomeIcon";
import { AboutIcon } from "shared/assets/SidebarIcons/AboutIcon";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((p) => !p);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <AppButton
                theme={AppButtonTheme.ICON}
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {collapsed ? <ToggleRight /> : <ToggleLeft />}
            </AppButton>
            <nav>
                <ul>
                    <li>
                        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
                            <HomeIcon />
                            {!collapsed && t("Home")}
                        </AppLink>
                    </li>
                    <li>
                        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
                            <AboutIcon />
                            {!collapsed && t("about")}
                        </AppLink>
                    </li>
                </ul>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
                <p className={cls.lang}>{t("curLang")}</p>
            </div>
        </div>
    );
};
