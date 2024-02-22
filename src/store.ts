// Importing the `configureStore` function from Redux Toolkit, which simplifies store setup and configuration.
import { configureStore } from "@reduxjs/toolkit";

// Importing reducers from different slices of the application.
// Each of these reducers manages a specific part of the application's state.
import themeReducer from "./slices/themeSlice/themeSlice"
import moviesReducer from "./slices/moviesSlice/moviesSlice";
import searchStringReducer from "./slices/searchStringSlice/searchStringSlice";
import pagesReducer from "./slices/pagesSlice/pagesSlice";
import isInitialLoadReducer from "./slices/isInitialLoadSlice/isInitialLoadSlice";
import movieDetailReducer from "./slices/movieDetailSlice/movieDetailSlice";
import favoritesReducer from "./slices/favoritesSlice/favoritesSlice";

// Configuring the Redux store with the imported reducers.
// The `reducer` object maps state slices to their corresponding reducers.
export const store = configureStore({
    reducer: {
        darkTheme: themeReducer, // Manages the theme state (dark/light).
        searchString: searchStringReducer, // Manages the state of the search string.
        pages: pagesReducer, // Manages pagination state.
        isInitialLoad: isInitialLoadReducer, // Manages the initial loading state.
        movieDetail: movieDetailReducer, // Manages the state of movie details.
        favorites: favoritesReducer, // Manages the favorites state.
        movies: moviesReducer, // Manages the state of movies listings.
    },
})

// Exporting RootState type, which represents the overall shape of the state within the Redux store.
// This type is useful for type-checking the state and selectors.
export type RootState = ReturnType<typeof store.getState>;

// Exporting AppDispatch type, which represents the type of the `dispatch` function for the Redux store.
// This type is useful for dispatching actions with type safety.
export type AppDispatch = typeof store.dispatch;