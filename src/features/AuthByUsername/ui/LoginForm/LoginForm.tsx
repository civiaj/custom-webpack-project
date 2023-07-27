import { classNames } from "shared/lib";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme, AppInput } from "shared/ui";
import { useState } from "react";

interface LoginFormProps {
    className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleUsernameChange = (value: string) => {
        setUsername(value);
    };
    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <label htmlFor="username">
                {t("username")}
                <AppInput
                    value={username}
                    onChange={handleUsernameChange}
                    id="username"
                    type="text"
                    autoFocus
                />
            </label>
            <label htmlFor="password">
                {t("password")}
                <AppInput
                    value={password}
                    onChange={handlePasswordChange}
                    id="password"
                    type="text"
                />
            </label>
            <AppButton
                className={cls.loginBtn}
                theme={AppButtonTheme.REGULAR}
                type="submit"
            >
                {t("login")}
            </AppButton>
        </form>
    );
}
