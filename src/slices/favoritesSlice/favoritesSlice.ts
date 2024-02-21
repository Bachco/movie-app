import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { count } from 'console';
import { WritingItem } from '../../api/interfaces';



interface FavoritesState {
    count: number;
    favoritesData: null | { favorites: WritingItem[] };
}


const favoritesFromLocalStorage: FavoritesState = localStorage.getItem("local-favorites") ? JSON.parse(localStorage.getItem("local-favorites")!) : {count: 0,favoritesData: null}

localStorage.setItem("local-favorites" , JSON.stringify(favoritesFromLocalStorage));

/** State */

const initialState: FavoritesState = favoritesFromLocalStorage;


/** Slice */

const moviesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites(state, action: PayloadAction<WritingItem>) {
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

            localStorage.setItem("local-favorites", JSON.stringify(state));
        },
        removeFromFavorites(state, action: PayloadAction<string>) {
            state.count--;
            if (state.favoritesData) {
                state.favoritesData.favorites = state.favoritesData.favorites.filter(item => item.imdbID !== action.payload);
            }

            localStorage.setItem("local-favorites", JSON.stringify(state));
        },
        clearAllFavorites(state) {
            state.count = 0;
            state.favoritesData = null;
            localStorage.setItem("local-favorites", JSON.stringify(state));
        },
        toggleFavorites(state, action: PayloadAction<WritingItem>) {
            const existingIndex = state.favoritesData?.favorites.findIndex(item => item.imdbID === action.payload.imdbID);
            if (existingIndex !== undefined && existingIndex !== -1) {
                state.favoritesData?.favorites.splice(existingIndex, 1);
                state.count--;
            } else if (state.count < 10) {
                state.favoritesData?.favorites.push(action.payload);
                state.count++;
            }
            localStorage.setItem("local-favorites", JSON.stringify(state));
        }
    },
});

export const { addToFavorites, removeFromFavorites, clearAllFavorites, toggleFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;