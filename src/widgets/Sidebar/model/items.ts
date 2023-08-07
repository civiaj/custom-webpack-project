import { IconType } from "react-icons/lib";
import { AboutIcon } from "shared/assets/SidebarIcons/AboutIcon";
import { ArticlesIcon } from "shared/assets/SidebarIcons/ArticlesIcon";
import { HomeIcon } from "shared/assets/SidebarIcons/HomeIcon";
import { ProfileIcon } from "shared/assets/SidebarIcons/ProfileIcon";
import { routePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: IconType;
    authOnly?: boolean;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: routePath.main,
        Icon: HomeIcon,
        text: "mainSI",
    },
    {
        path: routePath.profile,
        Icon: ProfileIcon,
        text: "profileSI",
        authOnly: true,
    },
    {
        path: routePath.articles,
        Icon: ArticlesIcon,
        text: "articleSI",
        authOnly: true,
    },
    {
        path: routePath.about,
        Icon: AboutIcon,
        text: "aboutSI",
    },
];
