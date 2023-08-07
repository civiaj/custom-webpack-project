import { RootState } from "app/providers/StoreProvider";
import { getProfileIsUpdating } from "./getProfileIsUpdating";

describe("getProfileIsUpdating.test", () => {
    test("should return isUpdating status", () => {
        const state: DeepPartial<RootState> = {
            profile: { isUpdating: true },
        };
        expect(getProfileIsUpdating(state as RootState)).toEqual(true);
    });

    test("should work with empty state", () => {
        const state = {};
        expect(getProfileIsUpdating(state as RootState)).toBe(undefined);
    });
});
