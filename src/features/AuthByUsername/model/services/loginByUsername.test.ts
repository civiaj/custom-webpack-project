import axios from "axios";
import { loginByUsername } from "./loginByUsername";
// import { Dispatch } from "@reduxjs/toolkit";
// import { RootState } from "app/providers/StoreProvider";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, { shallow: false });

describe("loginByUsername.test", () => {
    // let dispatch: Dispatch;
    // let getState: () => RootState;
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test("1 call, fulfilled", async () => {
    //     const userData = { username: "123", id: "1" };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    //     const action = loginByUsername({ password: "123", username: "admin" });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("fulfilled");
    //     expect(result.payload).toEqual(userData);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    // });
    // test("1 call, rejected", async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ password: "123", username: "admin" });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("rejected");
    //     expect(result.payload).toBe("error");
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    // });

    test("1 call, fulfilled", async () => {
        const userData = { username: "123", id: "1" };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk({
            password: "123",
            username: "123",
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userData);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userData)
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    });
    test("1 call, rejected", async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({
            password: "123",
            username: "123",
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
