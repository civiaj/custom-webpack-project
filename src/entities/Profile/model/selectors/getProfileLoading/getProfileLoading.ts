import { RootState } from "app/providers/StoreProvider";

export const getProfileLoading = (state: RootState) =>
    state.profile?.isLoading || false;
