import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice"
import moviesReducer from "./features/movies/moviesSlice";
import searchStringReducer from "./features/searchStringSlice/searchStringSlice";
import pagesReducer from "./features/pages/pagesSlice";
import isInitialLoadReducer from "./features/isInitialLoad/isInitialLoad";

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        searchString: searchStringReducer,
        pages: pagesReducer,
        isInitialLoad: isInitialLoadReducer,
        movies: moviesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;