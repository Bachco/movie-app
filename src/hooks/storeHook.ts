import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "../store";

// `useAppDispatch` is a custom hook that wraps `useDispatch`. It does not modify the behavior of `useDispatch`
// but provides it with the specific type `AppDispatch` which comes from the store configuration.
// This typing ensures that the dispatch function is aware of the thunk actions and other middleware applied in the store.
export const useAppDispatch: () => AppDispatch = useDispatch;

// `useAppSelector` is a custom hook that wraps `useSelector` to provide it with the type of the application's root state.
// By providing the type `RootState`, it ensures that when selecting parts of the state,
// you have autocompletion for the state structure and type checking.
// This enhances developer productivity and reduces runtime errors due to incorrect state structure access.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

