import React from "react";

import { PageItem } from "../PageItem";

import * as s from "./style";

type PaginationTypes = {
  current: number;
  total: number;
};

export const Pagination: React.FC<PaginationTypes> = ({ current, total }) => {
  return (
    <s.PageList>
      {current > 1 && <PageItem item={1}>1</PageItem>}

      {current - 1 > 1 && <PageItem item={current - 1}>{current - 1}</PageItem>}

      <s.PageListItem currentPage>{current}</s.PageListItem>

      {current + 1 < total && (
        <PageItem item={current + 1}>{current + 1}</PageItem>
      )}

      {current < total && <PageItem item={total}>{total}</PageItem>}
    </s.PageList>
  );
};
