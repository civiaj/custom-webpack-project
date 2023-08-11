import { lazy } from "react";
import { PAGE_LOAD_TIME } from "shared/const/const";

export const ArticlesPageAsync = lazy(() => {
    return new Promise((res) => {
        setTimeout(() => {
            //@ts-ignore
            res(import("./ArticlesPage"));
        }, PAGE_LOAD_TIME);
    });
});
