import { lazy } from "react";

export const ProfilePageAsync = lazy(() => {
    return new Promise((res) => {
        setTimeout(() => {
            //@ts-ignore
            res(import("./ProfilePage"));
        }, 1000);
    });
});
