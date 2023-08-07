import { RootState } from "app/providers/StoreProvider";
import { getProfileFormData } from "./getProfileFormData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

describe("getProfileFormData.test", () => {
    test("should return profile form data", () => {
        const data = {
            username: "admin",
            age: 22,
            city: "Cheboksary",
            currency: Currency.EUR,
            country: Country.Armenia,
            firstName: "FirstName",
            secondName: "SecondName",
        };
        const state: DeepPartial<RootState> = {
            profile: { formData: data },
        };
        expect(getProfileFormData(state as RootState)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state = {};
        expect(getProfileFormData(state as RootState)).toBe(undefined);
    });
});
