import { FC } from "react";
import { useAppDispatch } from "../../hooks/storeHook";
import { removeFromFavorites } from "../../slices/favoritesSlice/favoritesSlice";
import { ButtonIsFavoritProps } from "../../api/interfaces";
import { TiDelete } from "react-icons/ti";

const ButtonRemoveFavorit: FC<ButtonIsFavoritProps> = ({ item }) => {
  const { imdbID } = item;
  const dispatch = useAppDispatch();

  return (
    <button
      className="hover:text-red-600"
      onClick={() => dispatch(removeFromFavorites(imdbID))}>
      <TiDelete />
    </button>
  )
};

export default ButtonRemoveFavorit;
