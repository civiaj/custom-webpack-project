import { classNames } from "shared/lib";
import cls from "./Sidebar.module.scss";
import { memo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppButton, AppButtonTheme } from "shared/ui";
import { ToggleLeft, ToggleRight } from "shared/assets/icons/ToggleSidebar";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useAppSelector } from "app/providers/StoreProvider";
import { getSidebarItems } from "widgets/Sidebar/model/selectors/getSidebarItems";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useAppSelector(getSidebarItems);

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
            <div className={cls.navigation}>
                <AppButton
                    theme={AppButtonTheme.ICON}
                    data-testid="sidebar-toggle"
                    onClick={onToggle}
                >
                    {collapsed ? <ToggleRight /> : <ToggleLeft />}
                </AppButton>
                <nav>
                    <ul>
                        {sidebarItemsList.map((sidebarItem) => (
                            <SidebarItem
                                key={sidebarItem.path}
                                item={sidebarItem}
                                collapsed={collapsed}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} />
            </div>
        </div>
    );
});
