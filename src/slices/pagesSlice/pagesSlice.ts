import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PagesState } from "../../api/interfaces";



// Defining the initial state of the slice, conforming to the PagesState interface.
// This includes the current page and the total number of pages, both initialized to 1.
const initialState: PagesState = {
    actualPage: 1,
    pages: 1
};

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        // A reducer for setting the current and total pages.
        // It accepts an object with optional `actualPage` and `pages` properties.
        setPages: (state, action: PayloadAction<{ actualPage?: number; pages?: number }>) => {
            state.actualPage = action.payload.actualPage;
            state.pages = action.payload.pages;
        }
    }
});

export const { setPages } = pagesSlice.actions;

export default pagesSlice.reducer;