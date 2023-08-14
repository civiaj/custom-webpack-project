import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/providers/StoreProvider";

export const getScrollRestoration = (state: RootState) =>
    state.scrollRestoration?.scroll;

export const getScrollResotrationByPath = createSelector(
    [getScrollRestoration, (state: RootState, pathname: string) => pathname],
    (scroll, pathname) => scroll[pathname]
);
