import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { AppButton, AppButtonTheme, Message } from "shared/ui";
import cls from "./ProfilePageHeader.module.scss";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import {
    getProfileIsUpdating,
    getProfileIsLoading,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
    getProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { getUserAuthData } from "entities/User";

interface ProfilePageHeaderProps {
    clasName?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { clasName } = props;
    const { t } = useTranslation("profile");
    const readOnly = useAppSelector(getProfileReadOnly);
    const isUpdating = useAppSelector(getProfileIsUpdating);
    const isLoading = useAppSelector(getProfileIsLoading);
    const dispatch = useAppDispatch();
    const disabled = isLoading || isUpdating;
    const authData = useAppSelector(getUserAuthData);
    const profileData = useAppSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(
        () => dispatch(profileActions.setReadOnly(false)),
        [dispatch]
    );

    const onCancel = useCallback(
        () => dispatch(profileActions.cancelEdit()),
        [dispatch]
    );

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [clasName])}>
            <Message title={t("profile page")} />
            {canEdit && (
                <>
                    {readOnly ? (
                        <AppButton disabled={disabled} onClick={onEdit}>
                            {t("edit")}
                        </AppButton>
                    ) : (
                        <div className={cls.buttons}>
                            <AppButton
                                isLoading={isUpdating}
                                disabled={disabled}
                                theme={AppButtonTheme.CONFIRM}
                                onClick={onSave}
                            >
                                {t("Save")}
                            </AppButton>
                            <AppButton disabled={disabled} onClick={onCancel}>
                                {t("Cancel")}
                            </AppButton>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
