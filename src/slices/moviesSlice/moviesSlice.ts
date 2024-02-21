import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getMoviesByString } from '../../api/actions';


/** Interface */

export interface MoviesState {
    loading: boolean;
    error: null | string;
    data: null | { Search: any[], totalResults: any, Error: any }
}

interface GetMoviesByStringParams {
    [key: string]: string;
}

/** State */

const initialState: MoviesState = {
    loading: false,
    error: null,
    data: null
}


/** Slice */

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
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

export default moviesSlice.reducer;