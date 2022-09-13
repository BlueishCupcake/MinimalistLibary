import React from "react";
import { Link } from "react-router-dom";

import * as s from "./style";

type PageItemTypes = {
  item: number;
  children: React.ReactChild;
};

export const PageItem: React.FC<PageItemTypes> = ({ item, children }: any) => {
  return (
    <s.PageListItem>
      <Link to={`/results/${item}`}>{children}</Link>
    </s.PageListItem>
  );
};
