import { RootState } from "app/providers/StoreProvider";

export const getProfileReadOnly = (state: RootState) => state.profile?.readOnly;
