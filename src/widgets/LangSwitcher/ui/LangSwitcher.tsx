import { AppButton, AppButtonTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
import { GlobeIcon } from "shared/assets/icons/GlobeIcon";
import { classNames } from "shared/lib";
import cls from "./LangSwitcher.module.scss";
import { memo } from "react";

interface LangSwitcherrProps {
    className?: string;
    collapsed?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherrProps) => {
    const { className, collapsed } = props;
    const { t, i18n } = useTranslation();
    const toggle = async () =>
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
        <>
            <AppButton
                theme={AppButtonTheme.ICON}
                className={classNames("", { [cls.vertical]: collapsed }, [
                    className,
                ])}
                onClick={toggle}
            >
                <GlobeIcon />
                <span>{t("curLang")}</span>
            </AppButton>
        </>
    );
});
