import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';


/** Interface */

export interface MoviesState {
    loading: boolean;
    error: null | string;
    data: null | { Search: any[], totalResults: any, Error: any }
}

interface GetMoviesByStringParams {
    [key: string]: string;
}

/** Action */

export const getMoviesByString = createAsyncThunk("movies/getMoviesByString", async ({ searchString, page =1 } : { searchString: string; page?: number }, thunkApi) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=63378e05&s=${searchString}&page=${page}`);
        return await response.json();
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }
});

export const getMoviesByParams = createAsyncThunk(
    "movies/getMoviesByParams",
    async (params: GetMoviesByStringParams, thunkApi) => {
        try {
            const queryParams = Object.entries(params)
                .map(([key, value]) => `${encodeURIComponent(value)}`)
                .join('&');
                console.log(`https://www.omdbapi.com/?apikey=63378e05&${queryParams}`);
            const response = await fetch(`https://www.omdbapi.com/?apikey=63378e05&${queryParams}`);
            return await response.json();
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

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