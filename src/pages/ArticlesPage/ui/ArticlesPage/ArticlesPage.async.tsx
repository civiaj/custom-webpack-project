import { lazy } from "react";

export const ArticlesPageAsync = lazy(() => {
    return new Promise((res) => {
        setTimeout(() => {
            //@ts-ignore
            res(import("./ArticlesPage"));
        }, 1000);
    });
});
