import { DeepPartial } from "@reduxjs/toolkit";
import { RootState } from "app/providers/StoreProvider";
import { getError } from "./getError";

describe("getError.test", () => {
    test("return login error", () => {
        const state: DeepPartial<RootState> = { login: { error: "Test Error" } };
        expect(getError(state as RootState)).toEqual("Test Error");
    });

    test("empty error", () => {
        const state: DeepPartial<RootState> = {};
        expect(getError(state as RootState)).toEqual(undefined);
    });
});
