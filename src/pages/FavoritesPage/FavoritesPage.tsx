import { removeFromFavorites } from "../../features/favoritesSlice/favoritesSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHook";

const FavoritesPage = () => {
  const { favoritesData } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  return (
    <div>
      {favoritesData?.favorites ?
        (favoritesData?.favorites.map(item => <p>{item.Title}<button onClick={() => dispatch(removeFromFavorites(item.imdbID))}>remove</button></p>)) :
        <p>No favorites movies</p>
      }
    </div>
  )
}

export default FavoritesPage