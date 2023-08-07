import { RootState } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading.test", () => {
    test("should return isLoading status", () => {
        const state: DeepPartial<RootState> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as RootState)).toEqual(true);
    });

    test("should work with empty state", () => {
        const state = {};
        expect(getProfileIsLoading(state as RootState)).toBe(false);
    });
});
