import { classNames } from "shared/lib";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme, AppInput } from "shared/ui";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { FormEventHandler, memo, useCallback } from "react";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername";
import { Text, TextTheme } from "shared/ui";

import { getPassword } from "../../model/selector/getPassword/getPassword";
import { getIsLoading } from "../../model/selector/getIsLoading/getIsLoading";
import { getError } from "../../model/selector/getError/getError";
import { getUsername } from "../../model/selector/getUsername/getUsername";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const loginReducers: ReducerList = { login: loginReducer };

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useAppSelector(getUsername);
    const password = useAppSelector(getPassword);
    const isLoading = useAppSelector(getIsLoading);
    const error = useAppSelector(getError);

    const handleUsernameChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const handlePasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLogin: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const promise = await dispatch(loginByUsername({ password, username }));
        if (promise.meta.requestStatus === "fulfilled") onSuccess();
    };

    return (
        <DynamicReducerLoader reducers={loginReducers}>
            <form
                onSubmit={onLogin}
                className={classNames(cls.LoginForm, {}, [className])}
            >
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
                {error && (
                    <Text text={t("login-error")} theme={TextTheme.ERROR} />
                )}
                <AppButton
                    className={cls.loginBtn}
                    theme={AppButtonTheme.REGULAR}
                    type="submit"
                    disabled={isLoading}
                    isLoading={isLoading}
                >
                    {t("login")}
                </AppButton>
            </form>
        </DynamicReducerLoader>
    );
});

export default LoginForm;
