//Dependencies
import React, { useContext } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

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
                <Link to={`/details/${item.id}`}>
                  {item.volumeInfo.imageLinks?.thumbnail ? (
                    <img src={item.volumeInfo.imageLinks?.thumbnail} />
                  ) : (
                    <s.DefaultThumbnail>?</s.DefaultThumbnail>
                  )}
                  <s.InfoDiv>
                    <s.BookTitle>{item.volumeInfo.title}</s.BookTitle>
                    <s.BookSubtitle>{item.volumeInfo.subtitle}</s.BookSubtitle>
                    <s.BookAuthors>{item.volumeInfo.authors}</s.BookAuthors>
                  </s.InfoDiv>
                </Link>
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
// <s.HiddenBtn>
//   <FavoriteIcon />
// </s.HiddenBtn>

export default Body;
