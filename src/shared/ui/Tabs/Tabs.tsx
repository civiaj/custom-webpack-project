import { ReactNode, useCallback } from "react";
import { classNames } from "shared/lib";
import { Box, BoxTheme } from "../Box/Box";
import cls from "./Tabs.module.scss";

export interface TabItem {
    content: ReactNode;
    value: string;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = (props: TabsProps) => {
    const { className, onTabClick, tabs, value } = props;

    const handleClick = useCallback(
        (newTab: TabItem) => () => onTabClick(newTab),
        [onTabClick]
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Box
                    theme={
                        value === tab.value ? BoxTheme.TAB_ACTIVE : BoxTheme.TAB
                    }
                    key={tab.value}
                    onClick={handleClick(tab)}
                >
                    {tab.content}
                </Box>
            ))}
        </div>
    );
};
