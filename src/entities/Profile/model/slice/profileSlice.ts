import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
    readOnly: true,
    isLoading: false,
    isUpdating: false,
    error: undefined,
    data: undefined,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readOnly = action.payload;
        },

        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        cancelEdit: (state) => {
            state.readOnly = true;
            state.formData = state.data;
            state.validateErrors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.formData = action.payload;
                }
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined;
                state.isUpdating = true;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.validateErrors = undefined;
                    state.isUpdating = false;
                    state.data = action.payload;
                    state.formData = action.payload;
                    state.readOnly = true;
                }
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isUpdating = false;
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
