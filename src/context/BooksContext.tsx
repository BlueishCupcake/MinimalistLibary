//Dependencies
import React, { useReducer, createContext } from "react";
import { BookReducer } from "reducers/BookReducer";

const initialState = {
  booksList: [],
  isLoading: false,
};

const BookContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const BookProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BookReducer, initialState);
  const value: any = { state, dispatch };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export { BookContext, BookProvider };
