import { ComponentType, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<ComponentType<LoginFormProps>>(() => {
    return new Promise((res) => {
        setTimeout(() => {
            // @ts-ignore
            res(import("./LoginForm"));
        }, 1000);
    });
});
