import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesById } from "../../api/actions";
import { MovieDetailInterface } from "../../api/interfaces";

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
                state.data = null;
            })
            .addCase(getMoviesById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getMoviesById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.data = null;
            });
    }
});

export default movieDetailSlice.reducer;