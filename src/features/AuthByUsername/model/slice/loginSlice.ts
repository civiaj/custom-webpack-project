import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginByUsername } from "../services/loginByUsername";

const initialState: LoginSchema = {
    isLoading: false,
    password: "",
    username: "",
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, aciton: PayloadAction<string>) => {
            state.password = aciton.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
