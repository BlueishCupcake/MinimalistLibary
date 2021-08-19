//Dependencies
import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { Link, useParams } from "react-router-dom";

//Context
import { BooksContext } from "context/BooksContext";

//Services
import BooksServices from "services/BooksServices";

//Helpers
import { GetPage } from "helpers/getPage";

//Styles
import * as s from "./style";

const Header = () => {
  const [words, setWords] = useState<string>("");

  const { dispatch } = useContext(BooksContext);

  const page = GetPage();

  useEffect(() => {
    onClickHandler();
  }, [page]);

  const onClickHandler = async () => {
    if (!words) {
      return;
    }

    const searchBooks = await BooksServices.getBooks(words, page);

    dispatch({
      type: "SET_BOOKS_LIST",
      data: searchBooks.data.items,
    });

    dispatch({
      type: "SET_TOTAL_PAGES",
      data: Math.ceil(searchBooks.data.totalItems / 10),
    });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWords(e.currentTarget.value);
  };

  return (
    <s.HeaderContainer>
      <s.HiddenBtn>
        <Link to="/">
          <HomeIcon className="icon" />
        </Link>
      </s.HiddenBtn>

      <s.SearchDiv>
        <s.SearchInput value={words} onChange={onChangeHandler} />
        <s.StyledBtn onClick={onClickHandler}>Search</s.StyledBtn>
      </s.SearchDiv>

      <FavoriteIcon />
    </s.HeaderContainer>
  );
};

export default Header;
