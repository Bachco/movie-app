import { FC } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { addToFavorites, removeFromFavorites } from "../../slices/favoritesSlice/favoritesSlice";
import { ButtonIsFavoritProps } from "../../api/interfaces";


/** Component for button which add or remove movie to favorite */

const ButtonIsFavorit: FC<ButtonIsFavoritProps> = ({ item }) => {
  const { Poster, Title, Year, imdbID, Type } = item;
  const { favoritesData } = useAppSelector((state) => state.favorites); //get favorites movies from redux
  const dispatch = useAppDispatch(); // Hook to dispatch actions
  const isFavorite = favoritesData?.favorites.some((favorite) => favorite.imdbID === imdbID); // check if movie is in favorite

  /** Template */
  return (
    isFavorite ? (
      <button
        className="hover:text-blue-400 transition-colors duration-200 text-white"
        onClick={() => dispatch(removeFromFavorites(imdbID))}>
        <GoStarFill />
      </button>
    ) : (
      <button
        className="hover:text-blue-400 transition-colors duration-200 text-white"
        onClick={() => dispatch(addToFavorites({ Title, imdbID, Poster, Type, Year }))}>
        <GoStar />
      </button>
    )
  );
};

export default ButtonIsFavorit;
