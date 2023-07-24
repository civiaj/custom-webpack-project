import { AppButton } from "shared/ui/AppButton";
import { useTranslation } from "react-i18next";
import { GlobeIcon } from "shared/assets/langSwitchIcons/GlobeIcon";
import { classNames } from "shared/lib/classNames/classNames";

interface LangSwitcherrProps {
    className?: string;
}

export function LangSwitcher(props: LangSwitcherrProps) {
    const { className } = props;
    const { i18n } = useTranslation();
    const toggle = async () =>
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
        <>
            <AppButton
                className={classNames("", {}, [className])}
                onClick={toggle}
            >
                <GlobeIcon />
            </AppButton>
        </>
    );
}
