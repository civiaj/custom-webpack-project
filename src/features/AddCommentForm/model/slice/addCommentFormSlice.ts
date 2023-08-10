import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addCommentFormSchema } from "../types/addCommentFormSchema";

const initialState: addCommentFormSchema = {
    error: undefined,
    isLoading: false,
    text: "",
};

const addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { actions: addCommentFormActions } = addCommentFormSlice;
