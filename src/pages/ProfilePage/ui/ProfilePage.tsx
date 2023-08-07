import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import {
    ProfileCard,
    ValidateProfileErrors,
    fetchProfileData,
    getProfileError,
    getProfileErrors,
    getProfileIsLoading,
    profileActions,
    profileReducer,
} from "entities/Profile";
import { getProfileFormData } from "entities/Profile/model/selectors/getProfileFormData/getProfileFormData";
import { useCallback, useEffect } from "react";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Box, Message } from "shared/ui";
import { useTranslation } from "react-i18next";

const profileReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const profile = useAppSelector(getProfileFormData);
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileIsLoading);
    const validateErrors = useAppSelector(getProfileErrors);
    const { t } = useTranslation("profile");

    const validateErrorsTranslations: Record<ValidateProfileErrors, string> = {
        [ValidateProfileErrors.INCORRECT_AGE]: t("Wrong age"),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t("Wrong country name"),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t("Wrong user data"),
        [ValidateProfileErrors.NO_DATA]: t("No data was found"),
        [ValidateProfileErrors.SERVER_ERROR]: t("Server error"),
    };

    const onChangeFirstName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ firstName: value }));
        },
        [dispatch]
    );

    const onChangeSecondName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ secondName: value }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value) }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (value: Country) => {
            dispatch(profileActions.updateProfile({ country: value }));
        },
        [dispatch]
    );

    useEffect(() => {
        if (__PROJECT__ !== "storybook") dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicReducerLoader reducers={profileReducers}>
            <ProfilePageHeader />
            {validateErrors?.length && (
                <Box>
                    {validateErrors.map((err) => (
                        <Message
                            key={err}
                            text={validateErrorsTranslations[err]}
                        />
                    ))}
                </Box>
            )}
            <Box>
                <ProfileCard
                    data={profile}
                    error={error}
                    isLoading={isLoading}
                    onChangeFirstName={onChangeFirstName}
                    onChangeSecondName={onChangeSecondName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Box>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
