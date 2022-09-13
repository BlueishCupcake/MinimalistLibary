import React, { useState, useEffect, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";

import { BooksContext } from "context/BooksContext";

import BooksServices from "services/BooksServices";

import * as s from "./style";

export const BookDetailsBody: React.FC = () => {
  const [bookData, setBookData] = useState<any>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  const { state, dispatch } = useContext(BooksContext);

  let { favorites } = state;

  const getBookData = useCallback(async () => {
    const currentBook = await BooksServices.getBookDetails(id);
    const currentBookFavorite = favorites.find(
      (item: any) => item.id === currentBook.id
    );

    if (currentBookFavorite) {
      setIsFavorite(true);
    }

    setBookData(currentBook);
  }, [id, favorites, setIsFavorite, setBookData]);

  const favoriteHandler = () => {
    const currentBook = favorites.find((item: any) => item.id === bookData.id);

    if (!currentBook) {
      setIsFavorite(true);
      favorites.push(bookData);
    } else {
      setIsFavorite(false);
      favorites = favorites.filter((item: any) => item.id !== bookData.id);
    }

    dispatch({
      type: "SET_FAVORITES",
      data: favorites,
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  useEffect(() => {
    getBookData();
  }, [getBookData]);

  return (
    <s.BodyDetails>
      {bookData?.volumeInfo?.imageLinks?.thumbnail ? (
        <s.BookImage src={bookData?.volumeInfo?.imageLinks?.thumbnail} />
      ) : (
        <s.DefaultThumbnail>?</s.DefaultThumbnail>
      )}
      <s.InfoDiv>
        <s.BookInfo>
          Title: {bookData?.volumeInfo?.title || "Title not found"}.
        </s.BookInfo>
        {bookData?.volumeInfo?.subtitle && (
          <s.BookInfo>Subtitle: {bookData?.volumeInfo?.subtitle}.</s.BookInfo>
        )}
        <s.BookInfo>
          By: {bookData?.volumeInfo?.authors || "Author not found"}.
        </s.BookInfo>
        <s.BookInfo>
          Number of pages:
          {bookData?.volumeInfo?.printedPageCount ||
            "Number of pages not found"}
          .
        </s.BookInfo>
        <s.BookInfo>
          Date of publish:
          {bookData?.volumeInfo?.publishedDate || "Published date not found"}.
        </s.BookInfo>
        <s.BookInfo>
          Publisher:
          {bookData?.volumeInfo?.publisher || "Publisher not found"}.
        </s.BookInfo>

        <s.AddFavorites onClick={favoriteHandler}>
          {!isFavorite ? "Add to" : "Remove from"} favorites
        </s.AddFavorites>
      </s.InfoDiv>
    </s.BodyDetails>
  );
};
