import { lazy } from "react";

const MainPage = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./MainPage"));
            }, 1000);
        })
);

export default MainPage;
