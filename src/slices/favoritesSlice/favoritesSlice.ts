import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoritesState, WritingItem } from '../../api/interfaces';

// Attempting to load favorites data from localStorage, or initializing with default structure if not found.
// This enables persistence of favorite movies across browser sessions.
const favoritesFromLocalStorage: FavoritesState = localStorage.getItem("local-favorites") ? JSON.parse(localStorage.getItem("local-favorites")!) : {count: 0,favoritesData: null}

localStorage.setItem("local-favorites" , JSON.stringify(favoritesFromLocalStorage)); // Storing the initial state in localStorage to ensure persistence.

const initialState: FavoritesState = favoritesFromLocalStorage; // Setting the initial state of the slice from either localStorage or a default state.

// Creating a slice for favorites functionality, including actions for adding, removing, and toggling favorite movies.
const moviesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        // Action to add a movie to favorites. Checks for duplicates and max count constraint.
        addToFavorites(state, action: PayloadAction<WritingItem>) {
            const existingItem = state.favoritesData?.favorites.find(item => item.imdbID === action.payload.imdbID);
            if (existingItem || state.count >= 25) {
                alert("max movies in favorites");
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
        // Action to remove a movie from favorites.
        removeFromFavorites(state, action: PayloadAction<string>) {
            state.count--;
            if (state.favoritesData) {
                state.favoritesData.favorites = state.favoritesData.favorites.filter(item => item.imdbID !== action.payload);
            }

            localStorage.setItem("local-favorites", JSON.stringify(state));
        },
        // Action to clear all movies from favorites.
        clearAllFavorites(state) {
            state.count = 0;
            state.favoritesData = null;
            localStorage.setItem("local-favorites", JSON.stringify(state));
        },
        // Action to toggle a movie's favorite status. Adds it if not present, or removes it if it is.
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