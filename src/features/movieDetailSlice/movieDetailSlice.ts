import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface MovieDetailInterface {
    Title: string;
    imdbID: string;
    Year: string;
    Type: string;
    Poster: string;
}

/** Action */

export const getMoviesById = createAsyncThunk("movies/getMoviesByString", async ({ searchId } : { searchId: string }, thunkApi) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=63378e05&i=${searchId}`);
        return await response.json();
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }
});

const initialState: MovieDetailInterface = {
    Title: "",
    imdbID: "",
    Year: "",
    Type: "",
    Poster: ""
};


export const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {
        setMovieDetail: (state, action: PayloadAction<MovieDetailInterface>) => {
            return action.payload;
        },
    },
});

export const { setMovieDetail } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;