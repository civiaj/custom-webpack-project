import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localStorage";

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:8000/login", authData);

        if (!response.data) throw new Error();
        thunkAPI.dispatch(userActions.setAuthData(response.data));
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue("error");
    }
});
