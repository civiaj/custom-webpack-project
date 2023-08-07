import { RootState } from "app/providers/StoreProvider";
import { ValidateProfileErrors } from "../../types/profile";
import { getProfileErrors } from "./getProfileErrors";

describe("getProfileErrors.test", () => {
    test("should return profile validate errors", () => {
        const state: DeepPartial<RootState> = {
            profile: { validateErrors: [ValidateProfileErrors.INCORRECT_AGE] },
        };
        expect(getProfileErrors(state as RootState)).toEqual([
            ValidateProfileErrors.INCORRECT_AGE,
        ]);
    });

    test("should work with empty state", () => {
        const state = {};
        expect(getProfileErrors(state as RootState)).toBe(undefined);
    });
});
