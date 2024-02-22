import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { setPages } from '../../slices/pagesSlice/pagesSlice';
import { useEffect } from 'react';

const Pagination = () => {
    // Selecting pagination and movies state from the Redux store
    const { actualPage, pages } = useAppSelector((state) => state.pages);
    const { movies } = useAppSelector((state) => state);
    const dispatch = useAppDispatch(); // Hook to dispatch actions

    // Calculating total results from the movies state
    const totalResults = movies.data?.totalResults;

    // Calculating total pages based on total results, assuming 10 results per page
    const totalPages = Math.ceil(totalResults / 10);

    // useEffect to update pagination state when total pages change
    useEffect(() => {
        // Setting initial pagination if not already set and more than one page of results exists
        if (pages == undefined && actualPage == undefined && totalPages > 1) {
            dispatch(setPages({ actualPage: 1, pages: totalPages }));
        } else {
            // Updating pagination state to current values
            dispatch(setPages({ actualPage: actualPage, pages: totalPages }));
        }
    }, [totalPages]);

    // useEffect to ensure actualPage does not exceed total pages
    useEffect(() => {
        if ((pages !== undefined && actualPage !== undefined)) {
            if (actualPage > pages) {
                dispatch(setPages({ actualPage: pages, pages }));
            }
        }
    }, [pages]);

    /** Template */
    return (
        <div className='flex justify-center content-center items-center gap-4 mb-4 flex-wrap'>
            {
                (pages !== undefined && actualPage !== undefined) && (<>
                    <div className={`flex gap-2 ${actualPage === 1 && " pointer-events-none opacity-50"}`}>
                        <button
                            type="button"
                            onClick={() => {
                                (actualPage > 1) &&
                                    dispatch(setPages({ actualPage: 1, pages }));
                            }}
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >First
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                (actualPage > 1) &&
                                    dispatch(setPages({ actualPage: (actualPage - 1), pages }));
                            }}
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                        </button>
                    </div>


                    <span>{actualPage}/{totalPages}</span>
                    <div className={`flex gap-2 ${actualPage === totalPages && " pointer-events-none opacity-50"}`}>

                        <button
                            type="button"
                            onClick={() => {
                                (pages > actualPage) &&
                                    dispatch(setPages({ actualPage: (actualPage + 1), pages }));
                            }}
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                (pages > actualPage) &&
                                    dispatch(setPages({ actualPage: pages, pages }));
                            }}
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >Last
                        </button>
                    </div>
                </>)


            }
        </div>
    )
}

export default Pagination