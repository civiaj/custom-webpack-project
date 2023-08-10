import { RootState } from "app/providers/StoreProvider";
import {
    getAddCommentFormError,
    getAddCommentFormIsLoading,
    getAddCommentFormText,
} from "./addCommentFormSelectors";

describe("addCommentFormSelectors.test", () => {
    test("return AddCommentForm text", () => {
        const state: DeepPartial<RootState> = {
            addCommentForm: { text: "Test" },
        };
        expect(getAddCommentFormText(state as RootState)).toBe("Test");
    });

    test("should work with undefined and return empty string", () => {
        const state: DeepPartial<RootState> = {
            addCommentForm: { text: undefined },
        };
        expect(getAddCommentFormText(state as RootState)).toBe("");
    });

    test("return AddCommentForm error", () => {
        const state: DeepPartial<RootState> = {
            addCommentForm: { error: "Test Error" },
        };
        expect(getAddCommentFormError(state as RootState)).toBe("Test Error");
    });

    test("should work with undefined and return undefined", () => {
        const state: DeepPartial<RootState> = {
            addCommentForm: { error: undefined },
        };
        expect(getAddCommentFormError(state as RootState)).toBe(undefined);
    });

    test("return AddCommentForm isLoading", () => {
        const state: DeepPartial<RootState> = {
            addCommentForm: { isLoading: true },
        };
        expect(getAddCommentFormIsLoading(state as RootState)).toBe(true);
    });

    test("should work with undefined and return false", () => {
        const state: DeepPartial<RootState> = {
            addCommentForm: { isLoading: undefined },
        };
        expect(getAddCommentFormIsLoading(state as RootState)).toBe(false);
    });
});
