import { IconType } from "react-icons/lib";
import { AboutPageIcon } from "shared/assets/icons/AboutPageIcon";
import { ArticlesPageIcon } from "shared/assets/icons/ArticlesPageIcon";
import { HomePageIcon } from "shared/assets/icons/HomePageIcon";
import { ProfilePageIcon } from "shared/assets/icons/ProfilePageIcon";
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
        Icon: HomePageIcon,
        text: "mainSI",
    },
    {
        path: routePath.profile,
        Icon: ProfilePageIcon,
        text: "profileSI",
        authOnly: true,
    },
    {
        path: routePath.articles,
        Icon: ArticlesPageIcon,
        text: "articleSI",
        authOnly: true,
    },
    {
        path: routePath.about,
        Icon: AboutPageIcon,
        text: "aboutSI",
    },
];
