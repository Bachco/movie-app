import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PagesState } from "../../api/interfaces";


const initialState: PagesState = {
    actualPage: 1,
    pages: 1
};

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setPages: (state, action: PayloadAction<{ actualPage?: number; pages?: number }>) => {
            state.actualPage = action.payload.actualPage;
            state.pages = action.payload.pages;
        }
    }
});

export const { setPages } = pagesSlice.actions;

export default pagesSlice.reducer;