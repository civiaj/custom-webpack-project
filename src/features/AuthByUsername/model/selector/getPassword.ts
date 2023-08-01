import { RootState } from "app/providers/StoreProvider";

export const getPassword = (state: RootState) => state.login?.password || "";
