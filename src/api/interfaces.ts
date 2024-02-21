import { ReactNode } from "react";

export interface WritingItem {
    Title: string;
    imdbID: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface SearchBoxProps {
    onSearch: (searchTerm: string) => void;
}

export interface MoviesState {
    loading: boolean;
    error: null | string;
    data: null | { Search: any[], totalResults: any, Error: any }
}

export interface MovieDetailInterface {
    loading: boolean;
    error: null | any;
    data: null | any[];
}

export interface ButtonIsFavoritProps {
    item: WritingItem;
}

export interface Props {
    children?: ReactNode
}

export interface TitleProps {
    title: string;
    specialClass?: string;
    headingLevel?: number;
}

export interface FavoritesState {
    count: number;
    favoritesData: null | { favorites: WritingItem[] };
}

export interface PagesState {
    actualPage?: number;
    pages?: number;
}