import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}
export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.Navbar__container}></div>
        </nav>
    );
}
