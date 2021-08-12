//Dependencies
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";

//Styles
import * as s from "./style";

const Header = () => {
  return (
    <s.HeaderContainer>
      <HomeIcon />
      <s.SearchInput />
      <FavoriteIcon />
    </s.HeaderContainer>
  );
};

export default Header;
