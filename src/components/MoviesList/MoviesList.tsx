import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import Search from '../Search/Search';
import MoviesListDetail from './MoviesListDetail';
import { getMoviesByString } from '../../features/movies/moviesSlice';
import { setSearchString } from '../../features/searchStringSlice/searchStringSlice';
import Pagination from '../Pagination/Pagination';
import { setPages } from '../../features/pages/pagesSlice';

const MoviesList = () => {
    const { movies } = useAppSelector((state) => state);
    const searchString = useAppSelector((state) => state.searchString);
    const { actualPage, pages } = useAppSelector((state) => state.pages);
    const dispatch = useAppDispatch();

    const searchMovies = movies.data?.Search;
    const totalResults = movies.data?.totalResults;
    const errorMessage = movies.data ? movies.data.Error : movies.error;

    const totalPages = Math.ceil(totalResults / 10);

    useEffect(() => {
        if (pages !== undefined && actualPage !== undefined) {
            dispatch(getMoviesByString({ searchString, page: actualPage }));
        } else {
            dispatch(getMoviesByString({ searchString }));
        }
    }, [dispatch, searchString, actualPage, pages]);

    const onSearch = (newSearchString: string) => {
        dispatch(setSearchString(newSearchString));
        if (errorMessage) {
            (totalPages > 1) && dispatch(setPages({actualPage: undefined, pages: undefined}))            
        } else {
            (totalPages > 1) && dispatch(setPages({actualPage: 1, pages: totalPages}))            
        }
        
    };

    return (
        <div>
            <div className='mb-12 flex items-center justify-center'>
                <Search onSearch={onSearch} />
            </div>

            {errorMessage && <p className='text-center'>{errorMessage}</p>}
            {totalResults && <p className='text-center mb-2'>Total Results: {totalResults}</p>}
            {(totalPages > 1) &&<Pagination />}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-10'>
                {searchMovies && searchMovies.map(movie => <MoviesListDetail key={movie.imdbID} title={movie.Title} year={movie.Year} poster_path={movie.Poster} />)}
            </div>
        </div>
    );
};

export default MoviesList;
