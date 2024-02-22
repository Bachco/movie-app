import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesById } from "../../api/actions";
import { MovieDetailInterface } from "../../api/interfaces";

// Defining the initial state of the slice with a structure that matches the MovieDetailInterface.
// This includes a loading flag, an error field for storing any errors, and a data field for the movie details.
const initialState: MovieDetailInterface = {
    loading: false,
    error: null,
    data: null,
};


export const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Using the builder callback to add cases for the async thunk actions.
        builder
            // Handling the pending state of the getMoviesById async thunk.
            .addCase(getMoviesById.pending, (state) => {
                state.loading = true;
                state.data = null;
            })
            // Handling the fulfilled state when getMoviesById successfully fetches data.
            .addCase(getMoviesById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            // Handling the rejected state when getMoviesById fails.
            .addCase(getMoviesById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.data = null;
            });
    }
});

export default movieDetailSlice.reducer;