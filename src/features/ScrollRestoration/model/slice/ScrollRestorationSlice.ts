import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScrollRestorationSchema } from "../types/ScrollRestorationSchema";

const initialState: ScrollRestorationSchema = { scroll: {} };

const scrollRestorationSlice = createSlice({
    name: "scrollRestoration",
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string; scrollPosition: number }>
        ) => {
            state.scroll[action.payload.path] = action.payload.scrollPosition;
        },
    },
});

export const {
    actions: scrollRestorationActions,
    reducer: scrollRestorationReducer,
} = scrollRestorationSlice;
