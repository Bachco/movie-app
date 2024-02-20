import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { setMovieDetail } from "../../features/movieDetailSlice/movieDetailSlice";
import { addToFavorites, removeFromFavorites } from "../../features/favoritesSlice/favoritesSlice";

interface MoviesListDetailProps {
    poster_path: string,
    title: string,
    year: string,
    id: string,
    type: string
}

const MoviesListDetail: FC<MoviesListDetailProps> = (props) => {
    const { poster_path, title, year, id, type } = props;
    const { favoritesData } = useAppSelector((state) => state.favorites);
    const dispatch = useAppDispatch();

    const isFavorite = favoritesData?.favorites.some((favorite) => favorite.imdbID === id);

    return (
        <div className="w-full bg-white mx-auto shadow-md dark:bg-gray-800">
            <div className="max-h-40 overflow-hidden">
                <img src={poster_path} alt={title} className="min-h-80 w-full object-cover" />
            </div>
            <div className="p-5">
                <h3 className="mb-2 text-xl font-bold tracking-tight to-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {year}
                </p>
                <Link to="detail" onClick={() => dispatch(setMovieDetail({Title: title, imdbID: id, Poster: poster_path, Type: type, Year: year}))}>
                    lol
                </Link>
                <br></br>
                {isFavorite ? (
              <button
                className={isFavorite ? "is-favorite" : ""}
                onClick={() => dispatch(removeFromFavorites(id))}> 
                remove
              </button>
              ) : (
                <button
                  className={isFavorite ? "is-favorite" : ""}
                  onClick={() => dispatch(addToFavorites({Title: title, imdbID: id, Poster: poster_path, Type: type, Year: year}))}>
                  add
                </button>
              )
            }
            </div>
        </div>
    )
}

export default MoviesListDetail