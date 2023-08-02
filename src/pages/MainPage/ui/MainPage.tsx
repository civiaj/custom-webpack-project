import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

function MainPage() {
    const { t } = useTranslation();
    return (
        <>
            <div>{t("main page")}</div>
            <Counter />
            <h1></h1>
        </>
    );
}
export default MainPage;
