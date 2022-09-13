import React from "react";
import { Link } from "react-router-dom";

import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";

import * as s from "./style";

export const Header: React.FC = () => {
  return (
    <s.HeaderContainer>
      <s.HiddenBtn>
        <Link to="/">
          <HomeIcon className="icon" />
        </Link>
      </s.HiddenBtn>

      <s.HiddenBtn>
        <Link to="/favorites">
          <FavoriteIcon className="icon" />
        </Link>
      </s.HiddenBtn>
    </s.HeaderContainer>
  );
};
