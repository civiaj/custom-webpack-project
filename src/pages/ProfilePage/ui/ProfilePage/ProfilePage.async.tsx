import { lazy } from "react";
import { PAGE_LOAD_TIME } from "shared/const/const";

export const ProfilePageAsync = lazy(() => {
    return new Promise((res) => {
        setTimeout(() => {
            //@ts-ignore
            res(import("./ProfilePage"));
        }, PAGE_LOAD_TIME);
    });
});
