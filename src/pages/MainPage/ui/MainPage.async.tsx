import { lazy } from "react";
import { PAGE_LOAD_TIME } from "shared/const/const";

export const MainPageAsync = lazy(
    () =>
        new Promise((res) =>
            setTimeout(() => {
                // @ts-ignore
                res(import("./MainPage"));
            }, PAGE_LOAD_TIME)
        )
);
