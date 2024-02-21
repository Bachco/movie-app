import { FC } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { addToFavorites, removeFromFavorites } from "../../slices/favoritesSlice/favoritesSlice";
import { ButtonIsFavoritProps } from "../../api/interfaces";


const ButtonIsFavorit: FC<ButtonIsFavoritProps> = ({ item }) => {
  const { Poster, Title, Year, imdbID, Type } = item; // Destructuring objektu item
  const { favoritesData } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const isFavorite = favoritesData?.favorites.some((favorite) => favorite.imdbID === imdbID);

  return (
    isFavorite ? (
      <button
        className="hover:text-blue-400 transition-colors duration-200"
        onClick={() => dispatch(removeFromFavorites(imdbID))}>
        <GoStarFill />
      </button>
    ) : (
      <button
        className="hover:text-blue-400 transition-colors duration-200"
        onClick={() => dispatch(addToFavorites({ Title, imdbID, Poster, Type, Year }))}>
        <GoStar />
      </button>
    )
  );
};

export default ButtonIsFavorit;
