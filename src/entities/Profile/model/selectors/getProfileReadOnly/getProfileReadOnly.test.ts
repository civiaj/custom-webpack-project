import { RootState } from "app/providers/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("getProfileReadOnly.test", () => {
    test("should return read only status", () => {
        const state: DeepPartial<RootState> = {
            profile: { readOnly: true },
        };
        expect(getProfileReadOnly(state as RootState)).toEqual(true);
    });

    test("should work with empty state", () => {
        const state = {};
        expect(getProfileReadOnly(state as RootState)).toBe(undefined);
    });
});
