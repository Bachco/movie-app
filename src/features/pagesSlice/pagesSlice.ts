import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PagesState {
    actualPage?: number;
    pages?: number;
}

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