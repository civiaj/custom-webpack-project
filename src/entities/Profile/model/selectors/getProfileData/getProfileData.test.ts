import { Currency } from "entities/Currency";
import { getProfileData } from "./getProfileData";
import { RootState } from "app/providers/StoreProvider";
import { Country } from "entities/Country";

describe("getProfileData.test", () => {
    test("should return profile data", () => {
        const data = {
            username: "admin",
            age: 22,
            city: "Cheboksary",
            currency: Currency.EUR,
            country: Country.Armenia,
            firstName: "FirstName",
            secondName: "SecondName",
        };
        const state: DeepPartial<RootState> = { profile: { data } };
        expect(getProfileData(state as RootState)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<RootState> = {};
        expect(getProfileData(state as RootState)).toEqual(undefined);
    });
});
