import { DeepPartial } from "@reduxjs/toolkit";
import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/counter";

describe("counterSlice.test", () => {
    test("increment", () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment())
        ).toEqual({ value: 11 });
    });

    test("decrement", () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement())
        ).toEqual({
            value: 9,
        });
    });
});
