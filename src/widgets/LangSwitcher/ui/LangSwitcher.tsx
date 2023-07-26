import { AppButton, AppButtonTheme } from "shared/ui/AppButton";
import { useTranslation } from "react-i18next";
import { GlobeIcon } from "shared/assets/langSwitchIcons/GlobeIcon";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherrProps {
    className?: string;
    collapsed?: boolean;
}

export function LangSwitcher(props: LangSwitcherrProps) {
    const { className, collapsed } = props;
    const { t, i18n } = useTranslation();
    const toggle = async () =>
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
        <>
            <AppButton
                theme={AppButtonTheme.ICON}
                className={classNames("", {}, [className])}
                onClick={toggle}
            >
                <div
                    className={classNames(cls.flex, {
                        [cls.vertical]: collapsed,
                    })}
                >
                    <GlobeIcon />
                    <p className={cls.lang}>{t("curLang")}</p>
                </div>
            </AppButton>
        </>
    );
}
