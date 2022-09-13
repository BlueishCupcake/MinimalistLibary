import React from "react";
import { Link } from "react-router-dom";

import * as s from "./style";

type BooksListTypes = {
  booksList: Array<any>;
};

export const BooksList: React.FC<BooksListTypes> = ({ booksList }) => {
  return (
    <s.BookListContainer>
      {booksList?.map((item: any) => {
        return (
          <s.BookDiv key={item.id}>
            <Link to={`/details/${item.id}`}>
              {item.volumeInfo.imageLinks?.thumbnail ? (
                <img src={item.volumeInfo.imageLinks?.thumbnail} alt="Book" />
              ) : (
                <s.DefaultThumbnail>?</s.DefaultThumbnail>
              )}
              <s.InfoDiv>
                <s.BookTitle>{item.volumeInfo.title}</s.BookTitle>
                <s.BookAuthors>{item.volumeInfo.authors}</s.BookAuthors>
              </s.InfoDiv>
            </Link>
          </s.BookDiv>
        );
      })}
    </s.BookListContainer>
  );
};
