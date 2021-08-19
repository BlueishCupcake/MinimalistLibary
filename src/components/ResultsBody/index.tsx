//Dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { BooksContext } from "context/BooksContext";

//Styles
import * as s from "./style";

const ResultsBody = () => {
  const { state } = useContext(BooksContext);

  return (
    <s.BookListContainer>
      {state.booksList?.map((item: any) => {
        return (
          <s.BookDiv>
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

export default ResultsBody;
