import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import Search from '../Search/Search';
import MoviesListDetail from './MoviesListDetail';
import { setSearchString } from '../../slices/searchStringSlice/searchStringSlice';
import Pagination from '../Pagination/Pagination';
import { setPages } from '../../slices/pagesSlice/pagesSlice';
import { getMoviesByString } from '../../api/actions';
import Loading from '../Loading/Loading';

const MoviesList = () => {
    // Selecting movies, searchString, and pagination details from the Redux store
    const { movies } = useAppSelector((state) => state);
    const searchString = useAppSelector((state) => state.searchString);
    const { actualPage, pages } = useAppSelector((state) => state.pages);

    const dispatch = useAppDispatch();// Hook to dispatch actions

    // Extracting specific properties from the movies object
    const searchMovies = movies.data?.Search;
    const totalResults = movies.data?.totalResults;
    const errorMessage = movies.error;
    const errorMessageData = movies.data?.Error;

    // Calculating the total number of pages based on total results
    const totalPages = Math.ceil(totalResults / 10);

    // useEffect hook to fetch movies when component mounts or dependencies change
    useEffect(() => {
        // Dispatching action to fetch movies based on the current page and search string
        if (pages !== undefined && actualPage !== undefined) {
            dispatch(getMoviesByString({ searchString, page: actualPage }));
        } else {
            dispatch(getMoviesByString({ searchString }));
        }
    }, [dispatch, searchString, actualPage, pages]);

    // Handler for search action
    const onSearch = (newSearchString: string) => {
        // Dispatching action to update search string in the Redux store
        dispatch(setSearchString(newSearchString));
        // Resetting pagination if there is an error or setting it based on total results
        if (errorMessage) {
            (totalPages > 1) && dispatch(setPages({actualPage: undefined, pages: undefined}))            
        } else {
            (totalPages > 1) && dispatch(setPages({actualPage: 1, pages: totalPages}))            
        }
    };

    /** Template */
    return (
        <div>
            <div className='mb-12 flex items-center justify-center'>
                <Search onSearch={onSearch} />
            </div>

            {movies.loading && <Loading />}

            {errorMessage && <p className='text-center'>{errorMessage}</p>}
            {totalResults && <p className='text-center mb-2'>Total Results: {totalResults}</p>}
            {(!movies.data || errorMessageData === "Incorrect IMDb ID.") && <p className='text-center'>Type something</p>}
            {(errorMessageData && errorMessageData !== "Incorrect IMDb ID.") && <p className='text-center'>{errorMessageData}</p>}
            {(totalPages > 1) &&<Pagination />}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-10'>
                {searchMovies && searchMovies.map(movie => <MoviesListDetail key={movie.imdbID} imdbID={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} Type={movie.Type} />)}
            </div>
        </div>
    );
};

export default MoviesList;
