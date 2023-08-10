import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../types/sidebarItem";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { HomePageIcon } from "shared/assets/icons/HomePageIcon";
import { ProfilePageIcon } from "shared/assets/icons/ProfilePageIcon";
import { ArticlesPageIcon } from "shared/assets/icons/ArticlesPageIcon";
import { AboutPageIcon } from "shared/assets/icons/AboutPageIcon";

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: routePath.main,
            Icon: HomePageIcon,
            text: "mainSI",
        },
        {
            path: routePath.about,
            Icon: AboutPageIcon,
            text: "aboutSI",
        },
    ];

    if (authData)
        sidebarItemsList.push(
            {
                path: routePath.profile + authData.id,
                Icon: ProfilePageIcon,
                text: "profileSI",
                authOnly: true,
            },
            {
                path: routePath.articles,
                Icon: ArticlesPageIcon,
                text: "articleSI",
                authOnly: true,
            }
        );

    return sidebarItemsList;
});
