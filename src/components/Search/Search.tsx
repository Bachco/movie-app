import { FC, FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHook";
import { setSearchString } from "../../slices/searchStringSlice/searchStringSlice";

interface SearchBoxProps {
    onSearch: (searchTerm: string) => void;
}

const Search: FC<SearchBoxProps> = ({ onSearch }) => {
    const dispatch = useAppDispatch();
    const searchString = useAppSelector((state) => state.searchString);
    const [inputValue, setInputValue] = useState(searchString); // Uchovávame hodnotu vstupného poľa v lokálnom stave

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setSearchString(inputValue.trim().toLowerCase())); // Používame inputValue namiesto searchString
        onSearch(inputValue.trim().toLowerCase());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value); // Aktualizujeme inputValue pri zmene vstupného poľa
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-0">
                <input
                    type="search"
                    name="search"
                    className="block p-4 focus:outline-none text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={handleChange} // Používame handleChange funkciu pri zmene vstupného poľa
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Search
                </button>
            </div>
        </form>
    );
};

export default Search;
