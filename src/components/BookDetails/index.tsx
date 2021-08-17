//Dependencies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Services
import BooksServices from "services/BooksServices";

//Components
import Header from "components/Header";
import Footer from "components/Footer";

//Styles
import * as s from "./style";

const BookDetails = () => {
  const [bookData, setBookData] = useState<any>();

  const { id } = useParams<{ id: string }>();

  const getBookData = async () => {
    const currentBook = await BooksServices.getBookDetails(id);
    setBookData(currentBook);
  };

  useEffect(() => {
    getBookData();
  }, []);

  console.log(bookData);

  return (
    <>
      <Header />

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
        </s.InfoDiv>
      </s.BodyDetails>

      <Footer />
    </>
  );
};

export default BookDetails;
