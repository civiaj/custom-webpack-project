import { fetchArticlesPage } from "../fetchArticlesPage/fetchArticlesPage";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";

jest.mock("../fetchArticlesPage/fetchArticlesPage");

describe("fetchNextArticlesPage.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesPage).toHaveBeenCalledWith({ page: 3 });
    });

    test("not called then hasMore false", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesPage).not.toHaveBeenCalled();
    });

    test("not called then isLoading true", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesPage).not.toHaveBeenCalled();
    });
});
