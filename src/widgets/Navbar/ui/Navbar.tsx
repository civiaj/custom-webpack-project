import { classNames } from "shared/lib/classNames";
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
            <div className={cls.Navbar__container}>
                <ul className={cls.Navbar__links}>
                    <li>
                        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
                            {t("Home")}
                        </AppLink>
                    </li>
                    <li>
                        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
                            {t("about")}
                        </AppLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
