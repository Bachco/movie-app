import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MovieDetailState = string;

export interface MovieDetailInterface {
    Title: string;
    imdbID: string;
    Year: string;
    Type: string;
    Poster: string;
}

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
    }
});

export const { setMovieDetail } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;