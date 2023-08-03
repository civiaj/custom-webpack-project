import { RootState } from "app/providers/StoreProvider";
import { getIsLoading } from "./getIsLoading";

describe("getIsLoading.test", () => {
    test("return login isLoading", () => {
        const state: DeepPartial<RootState> = { login: { isLoading: true } };
        expect(getIsLoading(state as RootState)).toEqual(true);
    });

    test("empty isLoading", () => {
        const state: DeepPartial<RootState> = {};
        expect(getIsLoading(state as RootState)).toEqual(false);
    });
});
