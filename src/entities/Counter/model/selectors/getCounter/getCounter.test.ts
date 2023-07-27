import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from "./getCounter";
import { RootState } from "app/providers/StoreProvider";

describe("getCounter.test", () => {
    test("return counter", () => {
        const state: DeepPartial<RootState> = { counter: { value: 10 } };
        expect(getCounter(state as RootState)).toEqual({ value: 10 });
    });
});
