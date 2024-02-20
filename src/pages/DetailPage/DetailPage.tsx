import { addToFavorites, removeFromFavorites, toggleFavorites } from "../../features/favoritesSlice/favoritesSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHook";

const DetailPage = () => {
  const { movieDetail } = useAppSelector((state) => state);
  const { favoritesData } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const isFavorite = favoritesData?.favorites.some((favorite) => favorite.imdbID === movieDetail.imdbID);

  console.log(isFavorite);


  return (
    <div>
      {movieDetail.imdbID == "" ?
        (<div>Movie detail don't exist</div>) :
        (<div>
          <div>
            {movieDetail.Poster !== "" && <img src={movieDetail.Poster} alt={movieDetail.Title} />}
          </div>
          <div>
            {movieDetail.Title !== "" && <h1>{movieDetail.Title}</h1>}
            {movieDetail.Type !== "" && <p>{movieDetail.Type}</p>}
            {movieDetail.Year !== "" && <p>{movieDetail.Year}</p>}
            {isFavorite ? (
              <button
                className={isFavorite ? "is-favorite" : ""}
                onClick={() => dispatch(removeFromFavorites(movieDetail.imdbID))}> 
                remove
              </button>
              ) : (
                <button
                  className={isFavorite ? "is-favorite" : ""}
                  onClick={() => dispatch(addToFavorites(movieDetail))}>
                  add
                </button>
              )
            }
          </div>
        </div>)
      }
    </div>
  )
}

export default DetailPage