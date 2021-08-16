//Dependencies
import React, { useState, ChangeEvent } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";

//Services
import BooksServices from "services/BooksServices";

//Styles
import * as s from "./style";

const Header = () => {
  const [words, setWords] = useState<string>("");

  const onClickHandler = async () => {
    const searchBooks = await BooksServices.getBooks(words);
    console.log(searchBooks);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWords(e.currentTarget.value);
  };

  return (
    <s.HeaderContainer>
      <HomeIcon />

      <s.SearchDiv>
        <s.SearchInput value={words} onChange={onChangeHandler} />
        <s.StyledBtn onClick={onClickHandler}>Search</s.StyledBtn>
      </s.SearchDiv>

      <FavoriteIcon />
    </s.HeaderContainer>
  );
};

export default Header;
