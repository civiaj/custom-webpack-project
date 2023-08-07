import { validateProfileData } from "./validateProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileErrors } from "../../types/profile";

const data = {
    username: "admin",
    age: 22,
    city: "Cheboksary",
    currency: Currency.EUR,
    country: Country.Armenia,
    firstName: "FirstName",
    secondName: "SecondName",
    avatar: "https://avatar-pic.com",
};

describe("validateProfileData.test", () => {
    test("all correct", () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test("incorrect user data", () => {
        const result = validateProfileData({
            ...data,
            firstName: "",
            secondName: "",
        });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test("incorrect age", () => {
        const result = validateProfileData({
            ...data,
            age: 1,
        });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test("no city", () => {
        const result = validateProfileData({
            ...data,
            city: undefined,
        });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });
});
