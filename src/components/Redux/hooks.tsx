import { RootState, AppDispatch } from "./Store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// typed useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();