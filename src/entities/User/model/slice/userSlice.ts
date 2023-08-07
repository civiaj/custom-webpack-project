import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSchema } from "entities/User/model/types/user";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localStorage";

const initialState: UserSchema = {
    _inited: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuth: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
            if (user) state.authData = JSON.parse(user);
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
