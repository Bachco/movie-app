import { createSlice } from "@reduxjs/toolkit";

type ThemeState = boolean;

const themeFromLocalStorage = !!localStorage.getItem("site-theme");

const initialState: ThemeState = themeFromLocalStorage;

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
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