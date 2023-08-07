import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(() => {
    return new Promise((res) => {
        setTimeout(() => {
            //@ts-ignore
            res(import("./ArticleDetailsPage"));
        }, 1000);
    });
});
