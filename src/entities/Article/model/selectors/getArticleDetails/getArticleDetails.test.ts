import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "./getArticleDetails";
import { RootState } from "app/providers/StoreProvider";

describe("getArticleDetails.test", () => {
    test("return article data", () => {
        const data = { title: "Test article" };
        const state: DeepPartial<RootState> = { articleDetails: { data } };
        expect(getArticleDetailsData(state as RootState)).toEqual(data);
    });

    test("should work with empty data and return undefined", () => {
        const state: DeepPartial<RootState> = { articleDetails: {} };
        expect(getArticleDetailsData(state as RootState)).toBe(undefined);
    });

    test("return article isLoading", () => {
        const state: DeepPartial<RootState> = {
            articleDetails: { isLoading: true },
        };
        expect(getArticleDetailsIsLoading(state as RootState)).toBe(true);
    });

    test("should work with empty isLoading and return false", () => {
        const state: DeepPartial<RootState> = { articleDetails: {} };
        expect(getArticleDetailsIsLoading(state as RootState)).toBe(false);
    });

    test("return article error", () => {
        const state: DeepPartial<RootState> = {
            articleDetails: { error: "Error" },
        };
        expect(getArticleDetailsError(state as RootState)).toBe("Error");
    });

    test("should work with empty error and return undefined", () => {
        const state: DeepPartial<RootState> = { articleDetails: {} };
        expect(getArticleDetailsError(state as RootState)).toBe(undefined);
    });
});
