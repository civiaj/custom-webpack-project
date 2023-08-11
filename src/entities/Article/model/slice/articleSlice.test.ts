import { articleDetailsReducer } from "./articleSlice";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById";
import { ArticleBlockType, ArticleType } from "../types/article";

describe("articleSlice.test", () => {
    test("extraReducer fetchArticleById fulfilled", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            data: undefined,
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(
                    {
                        blocks: [
                            {
                                type: ArticleBlockType.IMAGE,
                                id: "1",
                                src: "",
                            },
                        ],
                        createdAt: "",
                        id: "",
                        img: "",
                        subtitle: "",
                        title: "",
                        type: [ArticleType.IT],
                        user: { id: "1", username: "", avatar: "" },
                        views: 1,
                    },
                    "1",
                    ""
                )
            )
        ).toEqual({
            data: {
                blocks: [
                    {
                        type: ArticleBlockType.IMAGE,
                        id: "1",
                        src: "",
                    },
                ],
                createdAt: "",
                id: "",
                img: "",
                subtitle: "",
                title: "",
                type: [ArticleType.IT],
                user: { id: "1", username: "", avatar: "" },
                views: 1,
            },
            isLoading: false,
        });
    });
});
