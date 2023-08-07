import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
        const response = await extra.api.get("profile");
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
