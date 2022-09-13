import React, { useContext } from "react";

import { BooksContext } from "context/BooksContext";

import { Header } from "components/Header";
import { BooksList } from "components/BooksList";
import { Footer } from "components/Footer";

export const SearchResults: React.FC = () => {
  const { state } = useContext(BooksContext);

  return (
    <>
      <Header />
      <BooksList booksList={state.booksList} />
      <Footer />
    </>
  );
};
