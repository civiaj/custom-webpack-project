import { RootState } from "app/providers/StoreProvider";

export const getProfileIsUpdating = (state: RootState) =>
    state.profile?.isUpdating;
