import { articleDetailsReducer } from "./articleSlice";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById";

describe("ArticleDetailsSchema.test", () => {
    test("extraReducer fetchArticleById fulfilled", () => {
        const data = {
            id: "1",
            title: "Test",
            views: 100,
        };
        const state: DeepPartial<ArticleDetailsSchema> = {
            data: undefined,
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, "1", "")
            )
        ).toEqual({ data, isLoading: false });
    });
});
