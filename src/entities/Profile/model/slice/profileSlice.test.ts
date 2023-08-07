import { Currency } from "entities/Currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema, ValidateProfileErrors } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "entities/Country";

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

describe("profileSlice.test", () => {
    test("set readonly", () => {
        const state: ProfileSchema = { readOnly: true };

        expect(
            profileReducer(state, profileActions.setReadOnly(false))
        ).toEqual({ readOnly: false });
    });

    test("update profile", () => {
        const state: ProfileSchema = {
            formData: { firstName: "Name", secondName: "SecondName", age: 18 },
        };
        expect(
            profileReducer(
                state,
                profileActions.updateProfile({
                    firstName: "UpdatedName",
                    secondName: "UpdatedSecondName",
                })
            )
        ).toEqual({
            formData: {
                firstName: "UpdatedName",
                secondName: "UpdatedSecondName",
                age: 18,
            },
        });
    });

    test("cancel edit", () => {
        const data = { age: 19, firstName: "Name", secondName: "SecondName" };
        const state: ProfileSchema = {
            readOnly: false,
            formData: { secondName: "Test" },
            data,
            validateErrors: [ValidateProfileErrors.INCORRECT_AGE],
        };
        expect(profileReducer(state, profileActions.cancelEdit)).toEqual({
            readOnly: true,
            formData: data,
            data,
            validateErrors: undefined,
        });
    });

    test("update profile data pending", () => {
        const state: ProfileSchema = {
            isUpdating: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(profileReducer(state, updateProfileData.pending)).toEqual({
            isUpdating: true,
            validateErrors: undefined,
        });
    });

    test("update profile data fulfilled", () => {
        const state: ProfileSchema = {
            isUpdating: true,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(
            profileReducer(state, updateProfileData.fulfilled(data, ""))
        ).toEqual({
            isUpdating: false,
            validateErrors: undefined,
            readOnly: true,
            data,
            formData: data,
        });
    });
});
