import { RootState } from "app/providers/StoreProvider";

export const getCounter = (state: RootState) => state.counter;
