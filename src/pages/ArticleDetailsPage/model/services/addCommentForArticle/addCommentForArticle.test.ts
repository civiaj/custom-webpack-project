import { addCommentForArticle } from "./addCommentForArticle";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";

const data = [
    {
        id: "1",
        text: "some comment",
        articleId: "1",
        userId: "1",
    },
    {
        id: "2",
        text: "some comment 2",
        articleId: "1",
        userId: "2",
    },
];

const state = {
    user: { authData: { id: "2" } },
    articleDetails: { data: { id: "3" } },
};

describe("addCommentForArticle.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk("Text");
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("Text");
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
