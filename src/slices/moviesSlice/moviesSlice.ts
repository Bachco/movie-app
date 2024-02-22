import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getMoviesByString } from '../../api/actions';
import { MoviesState } from '../../api/interfaces';

// Defining the initial state of the slice, conforming to the MoviesState interface.
// This state includes flags for loading and error states, and a data field for storing the movies data.
const initialState: MoviesState = {
    loading: false,
    error: null,
    data: null
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        clearAll(state) {
            state.data = null;
        },
    },
    extraReducers(builder) {
        // Handling the asynchronous getMoviesByString thunk action.
        builder
            // Handling the pending state of the getMoviesByString action.
            .addCase(getMoviesByString.pending, (state) => {
                state.loading = true;
            })
            // Handling the fulfilled state when getMoviesByString successfully fetches data.
            .addCase(getMoviesByString.fulfilled, (state, action: PayloadAction<{ Search: any[], totalResults: any, Error: any }>) => {
                state.loading = false;
                state.data = action.payload;
            })
            // Handling the rejected state when getMoviesByString fails to fetch data.
            .addCase(getMoviesByString.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export const { clearAll } = moviesSlice.actions;

export default moviesSlice.reducer;