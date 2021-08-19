//Dependencies
import React, { useContext } from "react";

//Context
import { BooksContext } from "context/BooksContext";

//Components
import Header from "components/Header";
import BooksList from "components/BooksList";

const FavoirtesPage = () => {
  const { state } = useContext(BooksContext);

  const { favorites } = state;

  return (
    <>
      <Header />
      <BooksList booksList={favorites} />
    </>
  );
};

export default FavoirtesPage;
