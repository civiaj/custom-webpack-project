import { RootState } from "app/providers/StoreProvider";

export const getAddCommentFormText = (state: RootState) =>
    state.addCommentForm?.text || "";

export const getAddCommentFormError = (state: RootState) =>
    state.addCommentForm?.error;

export const getAddCommentFormIsLoading = (state: RootState) =>
    state.addCommentForm?.isLoading || false;
