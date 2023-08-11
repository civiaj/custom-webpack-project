import { Profile } from "../../model/types/profile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import {
    AppInput,
    Avatar,
    Loader,
    Text,
    TextAlign,
    TextTheme,
} from "shared/ui";
import cls from "./Profile.module.scss";
import { useAppSelector } from "app/providers/StoreProvider";
import { getProfileReadOnly } from "entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { Currency, SelectCurrency } from "entities/Currency";
import { Country, SelectCountry } from "entities/Country";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeSecondName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstName,
        onChangeSecondName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation("profile");
    const readOnly = useAppSelector(getProfileReadOnly);

    if (isLoading)
        return (
            <div className={classNames(cls.Profile, {}, [className])}>
                <Loader />
            </div>
        );

    if (error)
        return (
            <div className={classNames(cls.Profile, {}, [className])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t("An error occured during profile loading")}
                    text={t("Try reloading the page to fix the problem")}
                />
            </div>
        );

    return (
        <div
            className={classNames(cls.Profile, { [cls.editing]: !readOnly }, [
                className,
            ])}
        >
            <div className={cls.left}>
                <div>
                    <Avatar src={data?.avatar} alt="profile image" />
                </div>
                <div>
                    <SelectCurrency
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readOnly={readOnly}
                    />
                    <SelectCountry
                        value={data?.country}
                        onChange={onChangeCountry}
                        readOnly={readOnly}
                    />
                </div>
            </div>
            <div className={cls.right}>
                <label htmlFor="firstName">
                    {t("Name")}
                    <AppInput
                        id="firstName"
                        value={data?.firstName}
                        readOnly={readOnly}
                        onChange={onChangeFirstName}
                    />
                </label>
                <label htmlFor="secondName">
                    {t("Second name")}
                    <AppInput
                        id="secondName"
                        value={data?.secondName}
                        readOnly={readOnly}
                        onChange={onChangeSecondName}
                    />
                </label>
                <label htmlFor="age">
                    {t("Age")}
                    <AppInput
                        id="age"
                        value={String(data?.age)}
                        readOnly={readOnly}
                        type="number"
                        onChange={onChangeAge}
                    />
                </label>
                <label htmlFor="city">
                    {t("City")}
                    <AppInput
                        id="city"
                        value={String(data?.city)}
                        readOnly={readOnly}
                        onChange={onChangeCity}
                    />
                </label>
                <label htmlFor="username">
                    {t("Username")}
                    <AppInput
                        id="username"
                        value={String(data?.username)}
                        readOnly={readOnly}
                        onChange={onChangeUsername}
                    />
                </label>
                <label htmlFor="avatar">
                    {t("Avatar")}
                    <AppInput
                        id="avatar"
                        value={String(data?.avatar)}
                        readOnly={readOnly}
                        onChange={onChangeAvatar}
                    />
                </label>
            </div>
        </div>
    );
};
