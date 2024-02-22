import { FC } from "react";
import { useAppDispatch } from "../../hooks/storeHook";
import { removeFromFavorites } from "../../slices/favoritesSlice/favoritesSlice";
import { ButtonIsFavoritProps } from "../../api/interfaces";
import { TiDelete } from "react-icons/ti";

/** component for button only for remove movie from favorites */
const ButtonRemoveFavorit: FC<ButtonIsFavoritProps> = ({ item }) => {
  const { imdbID } = item; //we need only id from item
  const dispatch = useAppDispatch(); // Hook to dispatch actions

  /** Template */
  return (
    <button
      className="hover:text-red-600"
      onClick={() => dispatch(removeFromFavorites(imdbID))}>
      <TiDelete />
    </button>
  )
};

export default ButtonRemoveFavorit;
