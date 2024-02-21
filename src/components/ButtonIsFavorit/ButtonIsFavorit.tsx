import { FC } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { addToFavorites, removeFromFavorites } from "../../slices/favoritesSlice/favoritesSlice";
import { WritingItem } from "../../api/interfaces";

// Definícia props ako objektu item
interface ButtonIsFavoritProps {
  item: WritingItem;
}

const ButtonIsFavorit: FC<ButtonIsFavoritProps> = ({ item }) => {
  const { Poster, Title, Year, imdbID, Type } = item; // Destructuring objektu item
  const { favoritesData } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const isFavorite = favoritesData?.favorites.some((favorite) => favorite.imdbID === imdbID);

  return (
    isFavorite ? (
      <button
        className={isFavorite ? "is-favorite" : ""}
        onClick={() => dispatch(removeFromFavorites(imdbID))}>
        <GoStarFill />
      </button>
    ) : (
      <button
        className={!isFavorite ? "not-favorite" : ""}
        onClick={() => dispatch(addToFavorites({ Title, imdbID, Poster, Type, Year }))}>
        <GoStar />
      </button>
    )
  );
};

export default ButtonIsFavorit;
