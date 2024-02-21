import { createSlice } from "@reduxjs/toolkit";

type LoadState = boolean;

const initialState: LoadState = true;

export const isInitialLoadSlice = createSlice({
    name: 'isInitialLoad',
    initialState,
    reducers: {
        toggleLoad: (state) => {
            return (state = !state);
        },
        setFalse: (state) => {
            return (state = false);
        }
    }
});

export const { toggleLoad, setFalse } = isInitialLoadSlice.actions;

export default isInitialLoadSlice.reducer;