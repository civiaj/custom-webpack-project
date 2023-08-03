import { getCounterValue } from "./getCounterValue";
import { RootState } from "app/providers/StoreProvider";

describe("getCounterValue.test", () => {
    test("return value", () => {
        const state: DeepPartial<RootState> = { counter: { value: 10 } };
        expect(getCounterValue(state as RootState)).toBe(10);
    });
});
