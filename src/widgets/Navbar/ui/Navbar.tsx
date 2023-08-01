import { classNames } from "shared/lib";
import cls from "./Navbar.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui";
import { LoginIcon } from "shared/assets/NavbarIcons/LoginIcon";
import { LoginModal } from "features/AuthByUsername";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
    className?: string;
}
export function Navbar({ className }: NavbarProps) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const { t } = useTranslation();
    const authData = useAppSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const onLogout = () => {
        setOpen(false);
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <AppButton theme={AppButtonTheme.ICON} onClick={onLogout}>
                    <LoginIcon />
                    <span>{t("logout")}</span>
                </AppButton>
            </nav>
        );
    }

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
