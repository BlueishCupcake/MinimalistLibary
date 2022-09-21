import React from "react";
import { Link } from "react-router-dom";

import * as s from "./style";

type PageItemTypes = {
  item: number;
  children: React.ReactChild;
  word: string | undefined;
};

export const PageItem: React.FC<PageItemTypes> = ({ word, item, children }) => {
  return (
    <s.PageListItem>
      <Link to={`/results/${word}/${item}`}>{children}</Link>
    </s.PageListItem>
  );
};
