//Dependencies
import React, { useState, useContext, ChangeEvent } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

//Context
import { BooksContext } from "context/BooksContext";

//Services
import BooksServices from "services/BooksServices";

//Styles
import * as s from "./style";

const Header = () => {
  const [words, setWords] = useState<string>("");

  const { dispatch } = useContext(BooksContext);

  const onClickHandler = async () => {
    const searchBooks = await BooksServices.getBooks(words, 0);

    dispatch({
      type: "SET_BOOKS_LIST",
      data: searchBooks.data,
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
