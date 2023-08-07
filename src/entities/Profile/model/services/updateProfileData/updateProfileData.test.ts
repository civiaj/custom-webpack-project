import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";
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

describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { formData: data },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("server error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { formData: data },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
    });

    test("validation error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { formData: { ...data, firstName: "" } },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
        ]);
    });
});
