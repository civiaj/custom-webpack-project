import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile, ValidateProfileErrors } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const formData = getProfileFormData(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put("profile", formData);

        if (!response.data) throw new Error();

        return response.data;
    } catch (err) {
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
});
