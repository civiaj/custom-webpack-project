import { IconType } from "react-icons/lib";
import { AboutIcon } from "shared/assets/SidebarIcons/AboutIcon";
import { HomeIcon } from "shared/assets/SidebarIcons/HomeIcon";
import { ProfileIcon } from "shared/assets/SidebarIcons/ProfileIcon";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: IconType;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: "/",
        Icon: HomeIcon,
        text: "mainSI",
    },
    {
        path: "/profile",
        Icon: ProfileIcon,
        text: "profileSI",
    },
    {
        path: "/about",
        Icon: AboutIcon,
        text: "aboutSI",
    },
];
