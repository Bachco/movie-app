import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../hooks/storeHook';
import { getMoviesById } from "../../api/actions";
import ButtonIsFavorit from "../Buttons/ButtonIsFavorit";
import { WritingItem } from "../../api/interfaces";


const MoviesListDetail: FC<WritingItem> = (props) => {    
    const { Poster, Title, Type, Year, imdbID } = props; // Destructuring props to extract movie details
    const dispatch = useAppDispatch(); // Hook to dispatch actions

    // Handler function for fetching movie details by ID
    const handleFetchMovie = (sID: string) => {
        dispatch(getMoviesById({ searchId: sID }));
    };

    /** Template */
    return (
        <div className="w-full bg-white mx-auto shadow-md dark:bg-gray-800">
            <div className="max-h-40 overflow-hidden relative">
                {(Poster && Poster !== "N/A") ? (
                    <div className="relative after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-black/30"><img src={Poster} alt={Title} className="min-h-80 w-full object-cover" /></div>
                ) : (
                    <div className="flex w-full h-40 justify-center items-center bg-gray-900 text-white">
                        No image
                    </div>
                )}
                <div className="absolute top-2 right-2 text-2xl"><ButtonIsFavorit item={{ Title, imdbID, Poster, Type, Year }} /></div>                
            </div>
            <div className="p-5">
                <Link to="detail" onClick={() => handleFetchMovie(imdbID)} className="group">
                    <h3 className="mb-2 text-xl font-bold tracking-tight to-gray-900 dark:text-white transition-colors duration-200 group-hover:text-blue-500">
                        {Title}
                    </h3>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {Year}
                </p>
            </div>
        </div>
    )
}

export default MoviesListDetail