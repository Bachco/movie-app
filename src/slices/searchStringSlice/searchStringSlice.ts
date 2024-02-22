import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defining the initial state of the slice. In this case, it's a simple string,
// initialized as an empty string to represent the absence of a search query.
const initialState: string = "";

export const searchStringSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // Reducer for setting the search string. It takes the current state and an action as arguments.
        // The state is directly returned with the new value from the action's payload, effectively
        // replacing the previous state with the new search string.
        setSearchString: (state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
});

export const { setSearchString } = searchStringSlice.actions;

export default searchStringSlice.reducer;