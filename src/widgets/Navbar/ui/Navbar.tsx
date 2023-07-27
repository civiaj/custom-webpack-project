import { classNames } from "shared/lib";
import cls from "./Navbar.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui";
import { LoginIcon } from "shared/assets/NavbarIcons/LoginIcon";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
    className?: string;
}
export function Navbar({ className }: NavbarProps) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <AppButton theme={AppButtonTheme.ICON} onClick={handleOpen}>
                <LoginIcon />
                <span>{t("login")}</span>
            </AppButton>
            <LoginModal isOpen={open} onClose={handleClose} />
        </nav>
    );
}
