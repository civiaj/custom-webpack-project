import { AppButton } from "shared/ui/AppButton";
import { useTranslation } from "react-i18next";
import { GlobeIcon } from "shared/assets/langSwitchIcons/GlobeIcon";

interface LangSwitcherProps {
    className?: string;
}
export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();
    const toggle = () => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    return (
        <>
            <AppButton onClick={toggle}>
                <GlobeIcon />
            </AppButton>
        </>
    );
}
