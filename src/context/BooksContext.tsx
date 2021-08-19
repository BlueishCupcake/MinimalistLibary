//Dependencies
import React, { useReducer, createContext } from "react";
import { BookReducer } from "reducers/BookReducer";

const initialState = {
  booksList: [],
  favorites: [],
  totalPages: 1,
  word: "",
};

let favorites: any = localStorage.getItem("favorites");

initialState.favorites = favorites ? JSON.parse(favorites) : [];

const BooksContext = createContext<{
  state: any;
  dispatch: (action: { type: string; data: any }) => void;
}>({
  state: initialState,
  dispatch: () => {},
});

const BooksProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BookReducer, initialState);
  const value: any = { state, dispatch };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export { BooksContext, BooksProvider };
