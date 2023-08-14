import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

function MainPage() {
    const { t } = useTranslation();
    return (
        <Page>
            <div>{t("main page")}</div>
            <Counter />
            <h1></h1>
        </Page>
    );
}
export default MainPage;
