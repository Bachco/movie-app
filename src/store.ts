import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice/themeSlice"
import moviesReducer from "./slices/moviesSlice/moviesSlice";
import searchStringReducer from "./slices/searchStringSlice/searchStringSlice";
import pagesReducer from "./slices/pagesSlice/pagesSlice";
import isInitialLoadReducer from "./slices/isInitialLoadSlice/isInitialLoadSlice";
import movieDetailReducer from "./slices/movieDetailSlice/movieDetailSlice";
import favoritesReducer from "./slices/favoritesSlice/favoritesSlice";

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        searchString: searchStringReducer,
        pages: pagesReducer,
        isInitialLoad: isInitialLoadReducer,
        movieDetail: movieDetailReducer,
        favorites: favoritesReducer,
        movies: moviesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;