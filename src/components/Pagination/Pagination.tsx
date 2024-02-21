import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { setPages } from '../../slices/pagesSlice/pagesSlice';
import { useEffect } from 'react';

const Pagination = () => {
    
    const { actualPage, pages } = useAppSelector((state) => state.pages);
    const { movies } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    const totalResults = movies.data?.totalResults;

    const totalPages = Math.ceil(totalResults / 10);

    useEffect(() => {
        if (pages == undefined && actualPage == undefined && totalPages > 1) {        
            dispatch(setPages({ actualPage: 1, pages: totalPages }));     
        } else {
            dispatch(setPages({ actualPage: actualPage, pages: totalPages }));
        }
    }, [totalPages]);

    useEffect(() => {
        if ((pages !== undefined && actualPage !== undefined)) {
            if (actualPage > pages) {
                dispatch(setPages({ actualPage: pages, pages }));
            }
        }
    }, [pages]);

    return (
        <div className='flex justify-center content-center gap-4 mb-4'>
            {
                (pages !== undefined && actualPage !== undefined) && (<>
                    <button
                        type="button"
                        onClick={() => {
                            (actualPage > 1) &&
                                dispatch(setPages({ actualPage: 1, pages }));
                        }}
                        className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >First
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            (actualPage > 1) &&
                                dispatch(setPages({ actualPage: (actualPage - 1), pages }));
                        }}
                        className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                        </svg>
                    </button>


                    <span>{actualPage}/{totalPages}</span>

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
                </>)


            }
        </div>
    )
}

export default Pagination