import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesById } from "../../api/actions";

export interface MovieDetailInterface {
    loading: boolean;
    error: null | any;
    data: null | any[];
}

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
        builder
            .addCase(getMoviesById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMoviesById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getMoviesById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default movieDetailSlice.reducer;