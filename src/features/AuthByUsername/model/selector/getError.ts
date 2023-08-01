import { RootState } from "app/providers/StoreProvider";

export const getError = (state: RootState) => state.login?.error || "";
