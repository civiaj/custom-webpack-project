import { RootState } from "app/providers/StoreProvider";

export const getUserInited = (state: RootState) => state.user._inited;
