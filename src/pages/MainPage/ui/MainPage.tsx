import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

function MainPage() {
    const { t } = useTranslation();
    return (
        <>
            <div>{t("MainPage")}</div>
            <Counter />
        </>
    );
}
export default MainPage;
