import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";

describe("fetchCommentsByArticleId.test", () => {
    test("success", async () => {
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
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk("1");
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("1");
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
