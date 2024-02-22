import { FC, FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHook";
import { setSearchString } from "../../slices/searchStringSlice/searchStringSlice";
import { clearAll } from "../../slices/moviesSlice/moviesSlice";
import { SearchBoxProps } from "../../api/interfaces";

const Search: FC<SearchBoxProps> = ({ onSearch }) => {
    const dispatch = useAppDispatch();
    const searchString = useAppSelector((state) => state.searchString);  // Selecting the searchString state from the Redux store.
     // Local state for managing the input value, initialized with the current search string from the Redux store.
     const [inputValue, setInputValue] = useState(searchString);

    // Function to handle form submission.
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Preventing default form submission behavior.
        if (inputValue.trim().toLowerCase() === "") {
            // If the input value is empty, dispatch the clearAll action to reset the movies data.
            dispatch(clearAll());
        } else {
            // Otherwise, dispatch setSearchString with the trimmed and lowercase input value,
            // and call the onSearch prop function with the same value.
            dispatch(setSearchString(inputValue.trim().toLowerCase()));
            onSearch(inputValue.trim().toLowerCase());
        }
    };

    // Function to handle input value changes.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Filtering the input value to remove non-alphanumeric characters.
        const filteredValue = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
        // Updating the local state with the filtered input value.
        setInputValue(filteredValue);
    };

    /** Template */
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-0">
                <input
                    type="search"
                    name="search"
                    className="block p-4 focus:outline-none text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Search
                </button>
            </div>
        </form>
    );
};

export default Search;
