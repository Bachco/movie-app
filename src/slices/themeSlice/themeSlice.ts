import { createSlice } from "@reduxjs/toolkit";

// Defining the type for the theme state, which is a boolean indicating whether the dark theme is enabled (true) or not (false).
type ThemeState = boolean;

// Attempting to retrieve the theme preference from local storage to maintain consistency across sessions.
// The double negation (`!!`) converts the retrieved value to a boolean, effectively checking if the "site-theme" item exists.
const themeFromLocalStorage = !!localStorage.getItem("site-theme");

// Setting the initial state of the theme based on the value retrieved from local storage.
const initialState: ThemeState = themeFromLocalStorage;

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // A reducer function to toggle the theme state between true (dark mode) and false (light mode).
        toggleTheme: (state) => {
            if (state) {
                localStorage.removeItem("site-theme");
            } else {
                localStorage.setItem("site-theme", "-");
            }
            return (state = !state);
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;