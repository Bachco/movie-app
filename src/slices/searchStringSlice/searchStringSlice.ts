import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const searchStringSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchString: (state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
});

export const { setSearchString } = searchStringSlice.actions;

export default searchStringSlice.reducer;