import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice/themeSlice"
import moviesReducer from "./features/moviesSlice/moviesSlice";
import searchStringReducer from "./features/searchStringSlice/searchStringSlice";
import pagesReducer from "./features/pagesSlice/pagesSlice";
import isInitialLoadReducer from "./features/isInitialLoadSlice/isInitialLoadSlice";
import movieDetailReducer from "./features/movieDetailSlice/movieDetailSlice";
import favoritesReducer from "./features/favoritesSlice/favoritesSlice";

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