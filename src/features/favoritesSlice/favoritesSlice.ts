import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';


/** Interface */

export interface FavoriteItem {
    Title: string;
    imdbID: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface FavoritesState {
    count: number;
    favoritesData: null | { favorites: FavoriteItem[] };
}

/** State */

const initialState: FavoritesState = {
    count: 0,
    favoritesData: null
}


/** Slice */

const moviesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites(state, action: PayloadAction<FavoriteItem>) {
            const existingItem = state.favoritesData?.favorites.find(item => item.imdbID === action.payload.imdbID);
            if (existingItem || state.count >= 10) {
                return;
            }
            state.count++;
            if (!state.favoritesData) {
                state.favoritesData = { favorites: [action.payload] };
            } else {
                state.favoritesData.favorites.push(action.payload);
            }
        },
        removeFromFavorites(state, action: PayloadAction<string>) {
            state.count--;
            if (state.favoritesData) {
                state.favoritesData.favorites = state.favoritesData.favorites.filter(item => item.imdbID !== action.payload);
            }
        },
        clearAllFavorites(state) {
            state.count = 0;
            state.favoritesData = null;
        },
        toggleFavorites(state, action: PayloadAction<FavoriteItem>) {
            const existingIndex = state.favoritesData?.favorites.findIndex(item => item.imdbID === action.payload.imdbID);
            if (existingIndex !== undefined && existingIndex !== -1) {
                state.favoritesData?.favorites.splice(existingIndex, 1);
                state.count--;
            } else if (state.count < 10) {
                state.favoritesData?.favorites.push(action.payload);
                state.count++;
            }
        }
    },
});

export const { addToFavorites, removeFromFavorites, clearAllFavorites, toggleFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;