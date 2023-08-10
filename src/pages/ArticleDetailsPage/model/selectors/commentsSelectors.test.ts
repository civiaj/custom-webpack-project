import { RootState } from "app/providers/StoreProvider";
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from "./commentsSelectors";

describe("commentsSelectors.test", () => {
    test("return ArticleDetailsComments isLoading", () => {
        const state: DeepPartial<RootState> = {
            articleDetailsComments: { isLoading: true },
        };
        expect(getArticleDetailsCommentsIsLoading(state as RootState)).toBe(
            true
        );
    });

    test("should work with undefined and return false", () => {
        const state: DeepPartial<RootState> = {
            addCommentForm: { isLoading: undefined },
        };
        expect(getArticleDetailsCommentsIsLoading(state as RootState)).toBe(
            false
        );
    });

    test("return ArticleDetailsComments errpr", () => {
        const state: DeepPartial<RootState> = {
            articleDetailsComments: { error: "Test Error" },
        };
        expect(getArticleDetailsCommentsError(state as RootState)).toBe(
            "Test Error"
        );
    });

    test("should work with undefined and return undefined", () => {
        const state: DeepPartial<RootState> = {
            addCommentForm: { error: undefined },
        };
        expect(getArticleDetailsCommentsError(state as RootState)).toBe(
            undefined
        );
    });
});
