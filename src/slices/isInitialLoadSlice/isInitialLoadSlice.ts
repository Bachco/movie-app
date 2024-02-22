import { createSlice } from "@reduxjs/toolkit";

// Defining the type for the state managed by this slice. In this case, it's a boolean indicating loading state.
type LoadState = boolean;

// Setting the initial state of the slice. It is of type `LoadState`, initially set to true, implying
// that the application considers itself in a loading state when it starts.
const initialState: LoadState = true;

export const isInitialLoadSlice = createSlice({
    name: 'isInitialLoad',
    initialState,
    reducers: {
        // Reducer for toggling the current load state. If it's true, it becomes false, and vice versa.
        toggleLoad: (state) => {
            return (state = !state);
        },
        // Reducer for explicitly setting the load state to false, indicating loading has completed.
        setFalse: (state) => {
            return (state = false);
        }
    }
});

export const { toggleLoad, setFalse } = isInitialLoadSlice.actions;

export default isInitialLoadSlice.reducer;