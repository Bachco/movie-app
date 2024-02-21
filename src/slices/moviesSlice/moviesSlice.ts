import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getMoviesByString } from '../../api/actions';
import { MoviesState } from '../../api/interfaces';

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
        builder.addCase(getMoviesByString.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMoviesByString.fulfilled, (state, action: PayloadAction<{ Search: any[], totalResults: any, Error: any }>) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getMoviesByString.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export const { clearAll } = moviesSlice.actions;

export default moviesSlice.reducer;