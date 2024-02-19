import { FC } from "react";

interface MoviesListDetailProps {
    poster_path: string,
    title: string,
    year: string
}

const MoviesListDetail: FC<MoviesListDetailProps> = (props) => {
    const { poster_path, title, year } = props;
  return (
    <div className="w-full bg-white mx-auto shadow-md dark:bg-gray-800 hover:scale-105 transition-all duration-200 hover:animate-pulse">
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
        </div>
    </div>
  )
}

export default MoviesListDetail