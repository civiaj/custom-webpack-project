import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => {
    return new Promise((res) => {
        setTimeout(() => {
            // eslint-disable-next-line
            // @ts-ignore
            res(import("./LoginForm"));
        }, 1000);
    });
});
