import { RootState } from "app/providers/StoreProvider";

export const getUsername = (state: RootState) => state.login?.username || "";
