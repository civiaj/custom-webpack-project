import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localStorage";

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI;
        try {
            const response = await extra.api.post("login", authData);
            if (!response.data) throw new Error();
            dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    }
);
