import React, { useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BooksContext } from "context/BooksContext";

import BooksServices from "services/BooksServices";

import { Header } from "components/Header";
import { BooksList } from "components/BooksList";
import { Footer } from "components/Footer";

import { BodyContainer } from "./style";

export const SearchResults: React.FC = () => {
  const { dispatch, state } = useContext(BooksContext);

  const { word, page } = useParams();

  const handleResults = useCallback(async () => {
    if (!word) {
      return;
    }
    const searchBooks = await BooksServices.getBooks(
      word,
      parseInt(page || "") || 1
    );

    dispatch({
      type: "SET_BOOKS_LIST",
      data: searchBooks.data.items,
    });
    dispatch({
      type: "SET_TOTAL_PAGES",
      data: Math.ceil(searchBooks.data.totalItems / 10),
    });
  }, [word, page, dispatch]);

  useEffect(() => {
    handleResults();
  }, [handleResults]);

  return (
    <BodyContainer>
      <Header />
      <BooksList booksList={state.booksList} />
      <Footer />
    </BodyContainer>
  );
};
