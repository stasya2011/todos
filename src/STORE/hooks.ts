import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootStore } from "../STORE";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
