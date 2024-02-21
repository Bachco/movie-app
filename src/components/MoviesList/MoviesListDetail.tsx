import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../hooks/storeHook';
import { getMoviesById } from "../../api/actions";
import ButtonIsFavorit from "../ButtonIsFavorit/ButtonIsFavorit";
import { WritingItem } from "../../api/interfaces";


const MoviesListDetail: FC<WritingItem> = (props) => {
    const { Poster, Title, Type, Year, imdbID } = props;
    const dispatch = useAppDispatch();
    const handleFetchMovie = (sID: string) => {
        dispatch(getMoviesById({ searchId: sID }));
    };

    return (
        <div className="w-full bg-white mx-auto shadow-md dark:bg-gray-800">
            <div className="max-h-40 overflow-hidden">
                <img src={Poster} alt={Title} className="min-h-80 w-full object-cover" />
            </div>
            <div className="p-5">
                <Link to="detail" onClick={() => handleFetchMovie(imdbID)}>
                    <h3 className="mb-2 text-xl font-bold tracking-tight to-gray-900 dark:text-white">
                        {Title}
                    </h3>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {Year}
                </p>
                <ButtonIsFavorit item={{Title, imdbID, Poster, Type, Year}} />
            </div>
        </div>
    )
}

export default MoviesListDetail