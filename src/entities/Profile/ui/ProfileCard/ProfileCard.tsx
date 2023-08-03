// import { useAppSelector } from "app/providers/StoreProvider";
// import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
// import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
// import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import { useTranslation } from "react-i18next";
import { AppButton, Message } from "shared/ui";

export const ProfileCard = () => {
    // const profile = useAppSelector(getProfileData);
    // const isLoading = useAppSelector(getProfileLoading);
    // const error = useAppSelector(getProfileError);
    const { t } = useTranslation("profile");
    return (
        <div>
            <Message title={t("profile page")} />
            <AppButton>{t("edit")}</AppButton>
        </div>
    );
};
