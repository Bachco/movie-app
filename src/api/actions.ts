import { createAsyncThunk } from "@reduxjs/toolkit";

/** thunk action for fetch all movies by search string from API */
export const getMoviesByString = createAsyncThunk("movies/getMoviesByString", async ({ searchString, page =1 } : { searchString: string; page?: number }, thunkApi) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=63378e05&s=${searchString}&page=${page}`);
        return await response.json();
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }
});

/** thunk action for fetch movie by id from API */
export const getMoviesById = createAsyncThunk("movieDetail/getMoviesById", async ({ searchId }: { searchId: string }, thunkApi) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=63378e05&i=${searchId}`);
        return await response.json();
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }
});