//Dependencies
import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { Link, useHistory } from "react-router-dom";

//Context
import { BooksContext } from "context/BooksContext";

//Services
import BooksServices from "services/BooksServices";

//Helpers
import { GetPage } from "helpers/getPage";

//Styles
import * as s from "./style";

const Header = () => {
  const { dispatch, state } = useContext(BooksContext);

  const { word } = state;

  const page = GetPage();

  const history = useHistory();

  useEffect(() => {
    onClickHandler(false);
  }, [page]);

  const onClickHandler = async (redirect: boolean) => {
    if (!word) {
      return;
    }

    const searchBooks = await BooksServices.getBooks(word, page);

    dispatch({
      type: "SET_BOOKS_LIST",
      data: searchBooks.data.items,
    });

    dispatch({
      type: "SET_TOTAL_PAGES",
      data: Math.ceil(searchBooks.data.totalItems / 10),
    });

    if (redirect) {
      history.push(`/results/1`);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_WORD",
      data: e.currentTarget.value,
    });
  };

  return (
    <s.HeaderContainer>
      <s.HiddenBtn>
        <Link to="/">
          <HomeIcon className="icon" />
        </Link>
      </s.HiddenBtn>

      <s.SearchDiv>
        <s.SearchInput value={word} onChange={onChangeHandler} />
        <s.StyledBtn
          onClick={() => {
            onClickHandler(true);
          }}
        >
          Search
        </s.StyledBtn>
      </s.SearchDiv>

      <FavoriteIcon />
    </s.HeaderContainer>
  );
};

export default Header;
