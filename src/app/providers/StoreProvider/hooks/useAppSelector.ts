import { RootState } from "../config/store";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
