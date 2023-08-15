// import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";
// import { initArticlesPage } from "./initArticlesPage";
// import { fetchArticlesPage } from "../fetchArticlesPage/fetchArticlesPage";

// jest.mock("../fetchArticlesPage/fetchArticlesPage");

// describe("initArticlesPage.test", () => {
//     test("successs", async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articles: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//                 _inited: false,
//             },
//         });
//         await thunk.callThunk();

//         expect(thunk.dispatch).toHaveBeenCalledTimes(4);
//         expect(fetchArticlesPage).toBeCalledWith({ page: 1 });
//     });

//     test("not called then _inited true", async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articles: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//                 _inited: true,
//             },
//         });
//         await thunk.callThunk({});

//         expect(thunk.dispatch).toHaveBeenCalledTimes(2);
//         expect(fetchArticlesPage).not.toBeCalled();
//     });
// });
