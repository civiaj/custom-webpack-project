import { RootState } from "app/providers/StoreProvider";

export const getProfileErrors = (state: RootState) =>
    state.profile?.validateErrors;
