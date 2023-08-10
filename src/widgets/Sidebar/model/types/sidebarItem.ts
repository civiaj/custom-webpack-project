import { IconType } from "react-icons/lib";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: IconType;
    authOnly?: boolean;
}
