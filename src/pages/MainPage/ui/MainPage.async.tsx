import { lazy } from "react";

export const MainPageAsync = lazy(
    () =>
        new Promise((res) =>
            setTimeout(() => {
                // eslint-disable-next-line
                // @ts-ignore
                res(import("./MainPage"));
            }, 1000)
        )
);
