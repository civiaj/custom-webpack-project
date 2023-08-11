import { ComponentType, lazy } from "react";
import { LoginFormProps } from "./LoginForm";
import { PAGE_LOAD_TIME } from "shared/const/const";

export const LoginFormAsync = lazy<ComponentType<LoginFormProps>>(() => {
    return new Promise((res) => {
        setTimeout(() => {
            // @ts-ignore
            res(import("./LoginForm"));
        }, PAGE_LOAD_TIME);
    });
});
