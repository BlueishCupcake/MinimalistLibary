import React, { useContext } from "react";

import { BooksContext } from "context/BooksContext";

import { Header } from "components/Header";
import { BooksList } from "components/BooksList";

export const FavoritesPage: React.FC = () => {
  const { state } = useContext(BooksContext);

  const { favorites } = state;

  return (
    <>
      <Header />
      <BooksList booksList={favorites} />
    </>
  );
};
