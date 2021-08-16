//Dependencies
import React, { useContext } from "react";

//Context
import { BooksContext } from "context/BooksContext";

//Styles
import * as s from "./style";

const Body = () => {
  const { state } = useContext(BooksContext);

  return (
    <>
      {state.booksList?.items?.length > 0 ? (
        <s.BookListContainer>
          {state.booksList?.items?.map((item: any) => {
            return (
              <s.BookDiv>
                {item.volumeInfo.imageLinks?.thumbnail ? (
                  <img src={item.volumeInfo.imageLinks?.thumbnail} />
                ) : (
                  <s.DefaultThumbnail>?</s.DefaultThumbnail>
                )}
                <div>
                  <s.BookTitle>{item.volumeInfo.title}</s.BookTitle>
                  <s.BookSubtitle>{item.volumeInfo.subtitle}</s.BookSubtitle>
                  <s.BookAuthors>{item.volumeInfo.authors}</s.BookAuthors>
                </div>
              </s.BookDiv>
            );
          })}
        </s.BookListContainer>
      ) : (
        <s.BodyContainer>
          <s.StyledHello>Try searching for a book above!</s.StyledHello>
        </s.BodyContainer>
      )}
    </>
  );
};

export default Body;
