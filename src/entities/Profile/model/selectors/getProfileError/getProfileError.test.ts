import { RootState } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
    test("should return profile error", () => {
        const state: DeepPartial<RootState> = { profile: { error: "error" } };
        expect(getProfileError(state as RootState)).toBe("error");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<RootState> = {};
        expect(getProfileError(state as RootState)).toBe(undefined);
    });
});
